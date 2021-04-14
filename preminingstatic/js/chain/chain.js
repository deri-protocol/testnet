
BigNumber.config({
    DECIMAL_PLACES: 18,
    ROUNDING_MODE: BigNumber.ROUND_DOWN,
    EXPONENTIAL_AT: 256
});
function bg(value, base=0) {
    if (base == 0) {
        return BigNumber(value);
    } else if (base > 0) {
        return BigNumber(value).times(BigNumber('1' + '0'.repeat(base)));
    } else {
        return BigNumber(value).div(BigNumber('1' + '0'.repeat(-base)));
    }
}

function deri_natural(value) {
    return bg(value, -18);
}

function natural_deri(value) {
    return bg(value, 18).toFixed(0).toString();
}

function max(value1, value2) {
    if (value1.gte(value2)) {
        return value1;
    } else {
        return value2;
    }
}

function min(value1, value2) {
    if (value1.lte(value2)) {
        return value1;
    } else {
        return value2;
    }
}


class Chain {

    constructor() {
        this.web3 = null;
        this.ethereum = null;
        this.account = null;

        this.oracleUrl = null;
        this.addresses = null;
        this.abifiles = null;
        this.methods = null;

        this.pool = null;
        this.bToken = null;
        this.pToken = null;
        this.lToken = null;
        this.dToken = null;

        this.symbol = null;
        this.bSymbol = null;
        this.bDecimals = null;
        this.mintClaimAddress = '0xD6Cd936ad0dAeD0f8549c7f4878afC2FB1e425E7';
        this.deriAddress= '0x3C125824a889B46f039ab7449b70AF5b8466F3cf';
        this.multiplier = null;
        this.feeRatio = null;
        this.minPoolMarginRatio = null;
        this.minInitialMarginRatio = null;
        this.minMaintenanceMarginRatio = null;
        this.minAddLiquidity = null;
        this.redemptionFeeRatio = null;
        this.fundingRateCoefficient = null;
        this.minLiquidationReward = null;
        this.maxLiquidationReward = null;
        this.liquidationCutRatio = null;
        this.priceDelayAllowance = null;
        this.getClainmedamount = null;
        this.oracle = {};
        this.balance = {};
        this.position = {
            volume: bg(0),
            cost: bg(0),
            lastCumuFundingRate: bg(0),
            margin: bg(0),
            lastUpdateTimestamp: bg(0)
        };
        this.states = {};
        this.url = 'wss://kovan.infura.io/ws/v3/be8f2596352a4ea2986472ec46f5c6e1';
        this.abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"v","type":"uint8"},{"indexed":false,"internalType":"bytes32","name":"r","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"MintProof","type":"event"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"deadlines","type":"uint256[]"},{"internalType":"uint8[]","name":"vs","type":"uint8[]"},{"internalType":"bytes32[]","name":"rs","type":"bytes32[]"},{"internalType":"bytes32[]","name":"ss","type":"bytes32[]"}],"name":"addMintProof","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    }

    async connectWallet() {
        if (typeof window.ethereum != undefined) {
            this.web3 = new Web3(ethereum);
            this.ethereum = window.ethereum;
            this.account = (await ethereum.request({method: 'eth_requestAccounts'}))[0];
            return {success: true, account: this.account};
        } else {
            return {success: false, error: 'Cannot connect wallet'};
        }
    }

    async initialize(index=0) {
        await this._initializeContracts(index);
        await this._initializeParameters();
        await Promise.all([
            this._updateBalance(),
            // this._updatePosition(),
            this._updateStates(),
            this._updateOracle(),
            this._bindEvent()
        ]);
    }

    //================================================================================
    // Interfaces
    //================================================================================

    async getSpecification() {
        return {
            addresses: this.addresses,
            symbol: this.symbol,
            bSymbol: this.bSymbol,
            multiplier: this.multiplier.toString(),
            feeRatio: this.feeRatio.toString(),
            minPoolMarginRatio: this.minPoolMarginRatio.toString(),
            minInitialMarginRatio: this.minInitialMarginRatio.toString(),
            minMaintenanceMarginRatio: this.minMaintenanceMarginRatio.toString(),
            minAddLiquidity: this.minAddLiquidity.toString(),
            redemptionFeeRatio: this.redemptionFeeRatio.toString(),
            fundingRateCoefficient: this.fundingRateCoefficient.toString(),
            minLiquidationReward: this.minLiquidationReward.toString(),
            maxLiquidationReward: this.maxLiquidationReward.toString(),
            liquidationCutRatio: this.liquidationCutRatio.toString(),
            priceDelayAllowance: this.priceDelayAllowance.toString()
        }
    }

    async getPositionInfo() {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        return {
            volume: this.position.volume.toString(),
            averageEntryPrice: this._calculateEntryPrice(price).toString(),
            margin: this.position.margin.toString(),
            marginHeld: this._calculateMarginHeld(price).toString(),
            pnl: this._calculatePnl(price).toString(),
            liquidationPrice: this._calculateLiquidationPrice(price).toString()
        }
    }

    async getLiquidityInfo() {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        return {
            poolLiquidity: this.states.liquidity.toString(),
            shares: this.balance.ltoken.toString(),
            shareValue: this._calculateShareValue(price).toString(),
            maxRemovableShares: this._calculateMaxRemovableShares(price).toString()
        }
    }

    async getWalletBalance() {
        return this.balance.btoken.toString();
    }

    async isUnlocked() {
        let allowance = await this._call(this.bToken, 'allowance', [this.account, this.addresses.pool]);
        allowance = deri_natural(allowance);
        return allowance.gt(0);
    }

    async getEstimatedMargin(volume, leverage) {
        let price = deri_natural(this.oracle.price);
        return bg(volume).abs().times(price).times(this.multiplier).div(bg(leverage)).toString();
    }

    async getEstimatedFee(volume) {
        let price = deri_natural(this.oracle.price);
        return bg(volume).abs().times(price).times(this.multiplier).times(this.feeRatio).toString();
    }

    async unlock() {
        let res;
        try {
            let tx = await this._transact(this.bToken, 'approve', [this.addresses.pool, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff']);
            res = {success: true, transaction: tx};
        } catch (err) {
            res = {success: false, error: err};
        }
        return res;
    }

    async depositMargin(amount) {
        await this._updateOracle();
        let res;
        try {
            let tx = await this._transactPool(this.pool, 'depositMargin', [natural_deri(amount)]);
            res = {success: true, transaction: tx};
        } catch (err) {
            res = {success: false, error: err};
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }

    async withdrawMargin(amount) {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        let res;
        if (bg(amount).lte(this._calculateMaxWithdrawMargin(price))) {
            try {
                let tx = await this._transactPool(this.pool, 'withdrawMargin', [natural_deri(amount)]);
                res = {success: true, transaction: tx};
            } catch (err) {
                res = {success: false, error: err};
            }
        } else {
            res = {success: false, error: 'amount exceeds allowed'};
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }

    async addLiquidity(amount) {
        await this._updateOracle();
        console.log(amount)
        let res;
        try {
            let tx = await this._transactPool(this.pool, 'addLiquidity', [natural_deri(amount)]);
            res = {success: true, transaction: tx};
        } catch (err) {
            res = {success: false, error: err};
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updateStates()]);
        }
        return res;
    }

    async removeLiquidity(shares) {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        let res;
        if (bg(shares).lte(this.balance.ltoken)) {
            try {
                let tx = await this._transactPool(this.pool, 'removeLiquidity', [natural_deri(shares)]);
                res = {success: true, transaction: tx};
            } catch (err) {
                res = {success: false, error: err};
            }
        } else {
            res = {success: false, error: 'shares exceeds allowed'};
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updateStates()]);
        }
        return res;
    }

    async tradeWithMargin(volume, amount) {
        await this._updateOracle();
        let price = deri_natural(this.oracle.price);
        let res;
        let orderValidation = this._isOrderValid(price, bg(volume), bg(amount));
        if (orderValidation.success) {
            try {
                let tx = await this._transactPool(this.pool, 'tradeWithMargin', [natural_deri(volume), natural_deri(amount)]);
                res = {success: true, transaction: tx};
            } catch (err) {
                res = {success: false, error: err};
            }
        } else {
            res = {success: false, error: orderValidation.message};
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }

    async closePosition() {
        let volume = this.position.volume.negated();
        let res;
        if (!volume.eq(0)) {
            try {
                let tx = await this._transactPool(this.pool, 'tradeWithMargin', [natural_deri(volume), '0']);
                res = {success: true, transaction: tx};
            } catch (err) {
                res = {success: false, error: err};
            }
        } else {
            res = {success: false, error: 'no position to close'};
        }
        if (res.success) {
            await Promise.all([this._updateBalance(), this._updatePosition(), this._updateStates()]);
        }
        return res;
    }
    async getUnClaimed(){
        let amounts = await this.getClaimed()
        let beforAmount = amounts.amounts[amounts.amounts.length-1];
        let info = await this.getMintProof()
        let currentAmount = this.amount;
        let deadline = info.deadline;
        if(deadline > Date.now()/1000 && beforAmount != currentAmount){
            return currentAmount;
        }else{
            return 0;
        }
    }
    async getClaimed(){
        let amounts = [];
        let amount;
        let getClaimedContract = new this.web3.eth.Contract(this.dTokenAbi,this.deriAddress);
        let getClaimed = await getClaimedContract.getPastEvents("Transfer",{
            filter: {
                from: '0x0000000000000000000000000000000000000000',
                to: this.account,
            },
            fromBlock: 0
        }, function(err){
        }).then(res => {
            res.map(item => {
                item.returnValues.amount = item.returnValues.amount / (10**18)
                amounts.push(item.returnValues.amount)
            })
            amount = eval(amounts.join('+'))
        })
        return {
            amount: amount,
            amounts: amounts,
        };
    }
    async getMintProof(){
        let url = 'wss://kovan.infura.io/ws/v3/be8f2596352a4ea2986472ec46f5c6e1'
        let abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"v","type":"uint8"},{"indexed":false,"internalType":"bytes32","name":"r","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"MintProof","type":"event"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"deadlines","type":"uint256[]"},{"internalType":"uint8[]","name":"vs","type":"uint8[]"},{"internalType":"bytes32[]","name":"rs","type":"bytes32[]"},{"internalType":"bytes32[]","name":"ss","type":"bytes32[]"}],"name":"addMintProof","outputs":[],"stateMutability":"nonpayable","type":"function"}];
        let mintWeb3 = new Web3(url);
        let arrInfo;
        let accountWeb3 = mintWeb3.utils.toChecksumAddress(this.account)
        let mintContract = new mintWeb3.eth.Contract(abi,this.mintClaimAddress)
        let mintProof = await mintContract.getPastEvents('MintProof',{
            filter:{account: accountWeb3},
            fromBlock: 0,
        }).then(res => {
            arrInfo = res
        })
        let info = arrInfo[arrInfo.length-1]
        let account = this.account;
        let amount = info.returnValues.amount;
        this.amount = amount;
        this.amount = this.amount/(10**18)
        let deadline = info.returnValues.deadline;
        let r = info.returnValues.r;
        let s = info.returnValues.s;
        let v = info.returnValues.v;
        return {
            account: account,
            deadline: deadline,
            amount: amount,
            r: r,
            s: s,
            v: v,
        }
    }
    async mintDToken() {
        let info = await this.getMintProof();
        let account = this.account;
        let amount = info.amount;
        let deadline = info.deadline;
        let r = info.r;
        let s = info.s;
        let v = info.v;
        try {
            let gas = 0;
            for (let i = 0; i < 20; i++) {
                try {
                    gas = await this.dToken.methods.mint(account, amount, deadline, v, r, s).estimateGas({from: this.account});
                    gas = parseInt(gas * 1.25);
                    break;
                } catch (err) {
                    
                }
            }
            if (gas == 0) gas = 532731;
            let tx = await this.dToken.methods.mint(account, amount, deadline, v, r, s).send({from: this.account, gas: gas});
            return {success: true, transaction: tx};
        } catch (err) {
            console.log(err);
            return {success: false, error: err};
        }
    }



    //================================================================================
    // Internals
    //================================================================================

    async _bindEvent() {
        this.ethereum.on('accountsChanged', (accounts) => {
            window.location.reload();
        })
        this.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        })
    }

    async _call(contract, func, params=[]) {
        return await contract.methods[this.methods[func]](...params).call();
    }

    async _transact(contract, func, params=[]) {
        let gas = 0;
        for (let i = 0; i < 20; i++) {
            try {
                gas = await contract.methods[this.methods[func]](...params).estimateGas({'from': this.account});
                gas = parseInt(gas * 1.25);
                break;
            } catch (err) {

            }
        }
        if (gas == 0) gas = 532731;
        let tx = await contract.methods[this.methods[func]](...params).send({'from': this.account, 'gas': gas});
        return tx;
    }

    async _transactPool(contract, func, params=[]) {
        console.log(contract, func, params)
        
        let gas = 0;
        for (let i = 0; i < 20; i++) {
            try {
                gas = await contract.methods[this.methods[func]](...params).estimateGas({'from': this.account});
                gas = parseInt(gas * 1.25);
                break;
            } catch (err) {

            }
        }
        if (gas == 0) gas = 532731;
        let tx = await contract.methods[this.methods[func]](...params).send({'from': this.account, 'gas': gas});
        console.log(tx)
        return tx;
    }

    async _readjson(filename) {
        let response = await fetch(`preminingstatic/js/chain/config/${filename}`);
        return await response.json();
    }

    async _initializeContracts(index) {
        try {
            let config = await this._readjson('config.json');
            this.oracleUrl = config.oracleUrl;
            this.addresses = config.addresses[index];
            this.abifiles = config.abifiles;
            this.methods = config.methods;
            let [poolAbi, bTokenAbi, pTokenAbi, lTokenAbi, dTokenAbi] = await Promise.all([
                this._readjson(this.abifiles.pool),
                this._readjson(this.abifiles.bToken),
                this._readjson(this.abifiles.pToken),
                this._readjson(this.abifiles.lToken),
                this._readjson(this.abifiles.dToken)
            ]);
            this.dTokenAbi = dTokenAbi;
            this.pool = new this.web3.eth.Contract(poolAbi, this.addresses.pool);
            this.bToken = new this.web3.eth.Contract(bTokenAbi, this.addresses.bToken);
            this.pToken = new this.web3.eth.Contract(pTokenAbi, this.addresses.pToken);
            this.lToken = new this.web3.eth.Contract(lTokenAbi, this.addresses.lToken);
            this.dToken = new this.web3.eth.Contract(dTokenAbi, this.addresses.dToken);
        } catch (err) {
            console.log(`Chain: _initializeContracts() error: ${err}`);
        }
    }

    async _initializeParameters() {
        try {
            this.symbol = await this._call(this.pool, 'symbol');
            this.bSymbol = await this._call(this.bToken, 'symbol');
            this.bDecimals = await this._call(this.bToken, 'decimals');
            let p = await this._call(this.pool, 'getParameters');
            this.multiplier = deri_natural(p.multiplier);
            this.feeRatio = deri_natural(p.feeRatio);
            this.minPoolMarginRatio = deri_natural(p.minPoolMarginRatio);
            this.minInitialMarginRatio = deri_natural(p.minInitialMarginRatio);
            this.minMaintenanceMarginRatio = deri_natural(p.minMaintenanceMarginRatio);
            this.minAddLiquidity = deri_natural(p.minAddLiquidity);
            this.redemptionFeeRatio = deri_natural(p.redemptionFeeRatio);
            this.fundingRateCoefficient = deri_natural(p.fundingRateCoefficient);
            this.minLiquidationReward = deri_natural(p.minLiquidationReward);
            this.maxLiquidationReward = deri_natural(p.maxLiquidationReward);
            this.liquidationCutRatio = deri_natural(p.liquidationCutRatio);
            this.priceDelayAllowance = bg(p.priceDelayAllowance);
        } catch (err) {
            console.log(`Chain: _initializeParameters() error: ${err}`);
        }
    }


    //================================================================================
    // Updates
    //================================================================================

    async _updateBalance() {
        try {
            let [btoken, ltoken, ltotal, dtoken] = await Promise.all([
                this._call(this.bToken, 'balanceOf', [this.account]),
                this._call(this.lToken, 'balanceOf', [this.account]),
                this._call(this.lToken, 'totalSupply'),
                this._call(this.dToken, 'balanceOf', [this.account])
            ]);
            this.balance.btoken = bg(btoken, -this.bDecimals);
            this.balance.ltoken = deri_natural(ltoken);
            this.balance.ltotal = deri_natural(ltotal);
        } catch (err) {
            console.log(err);
        }
    }

    async _updatePosition() {
        try {
            let p = await this._call(this.pToken, 'getPosition', [this.account]);
            this.position.volume = deri_natural(p[0]);
            this.position.cost = deri_natural(p[1]);
            this.position.lastCumuFundingRate = deri_natural(p[2]);
            this.position.margin = deri_natural(p[3]);
            this.position.lastUpdateTimestamp = bg(p[4]);
        } catch (err) {
            console.log('Chain update position error, using default');
        }
    }

    async _updateStates() {
        try {
            let s = await this._call(this.pool, 'getStateValues');
            this.states.cumuFundingRate = deri_natural(s.cumuFundingRate);
            this.states.cumuFundingRateBlock = bg(s.cumuFundingRateBlock);
            this.states.liquidity = deri_natural(s);
            this.states.tradersNetVolume = deri_natural(s.tradersNetVolume);
            this.states.tradersNetCost = deri_natural(s.tradersNetCost);
        } catch (err) {
            console.log(err);
        }
    }

    async _updateOracle() {
        try {
            let res = await fetch(this.oracleUrl);
            this.oracle = await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    //================================================================================
    // Calculations
    //================================================================================

    _calculateShareValue(price) {
        return this.balance.ltotal.eq(0) ? bg(0) : this.states.liquidity.div(this.balance.ltotal);
    }

    _calculateMaxRemovableShares(price) {
        let shareValue = this._calculateShareValue();
        let value = this.states.tradersNetVolume.times(price).times(this.multiplier);
        let removable = this.states.liquidity.plus(this.states.tradersNetCost).minus(value).minus(value.abs().times(this.minPoolMarginRatio));
        let shares = max(min(this.balance.ltoken, removable.div(shareValue)), bg(0));
        return shares;
    }

    _calculateEntryPrice(price) {
        return this.position.volume.eq(0) ? bg(0) : this.position.cost.div(this.position.volume).div(this.multiplier);
    }

    _calculateMarginHeld(price) {
        return this.position.volume.abs().times(price).times(this.multiplier).times(this.minInitialMarginRatio);
    }

    _calculatePnl(price) {
        return this.position.volume.times(price).times(this.multiplier).minus(this.position.cost);
    }

    _calculateMaxWithdrawMargin(price) {
        if (this.position.volume.eq(0)) {
            return this.position.margin;
        } else {
            let held = this._calculateMarginHeld(price);
            let pnl = this._calculatePnl(price);
            let withdrawable = max(this.position.margin.plus(pnl).minus(held.times(1.02)), bg(0));
            return withdrawable;
        }
    }

    _calculateLiquidationPrice(price) {
        let tmp = this.position.cost.minus(this.position.margin).div(this.position.volume).div(this.multiplier);
        let res = this.position.volume.gt(0) ? tmp.div(bg(1).minus(this.minMaintenanceMarginRatio)) : tmp.div(bg(1).plus(this.minMaintenanceMarginRatio));
        res = max(res, bg(0));
        return res;
    }

    _isOrderValid(price, volume, amount) {
        let minMargin = this.position.volume.plus(volume).abs().times(price).times(this.multiplier).times(this.minInitialMarginRatio);
        let poolMaxVolume = this.states.liquidity.div(this.minPoolMarginRatio).div(price).div(this.multiplier);

        if (this.position.margin.plus(amount).gte(minMargin)) {
            if (volume.lte(poolMaxVolume.minus(this.states.tradersNetVolume)) &&
                volume.gte(poolMaxVolume.negated().minus(this.states.tradersNetVolume))) {
                return {success: true};
            } else {
                return {success: false, message: 'Pool insufficient liquidity'};
            }
        } else {
            return {success: false, message: 'Trader insufficient margin'};
        }
    }

}