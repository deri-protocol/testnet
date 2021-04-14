
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

        this.symbol = null;
        this.bSymbol = null;
        this.bDecimals = null;

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
            this._updatePosition(),
            this._updateStates(),
            this._updateOracle(),
            this._bindEvent()
        ]);
    }
    format(bigNumber) {
        return bigNumber.toFormat().replaceAll(",", "").toString();
    }
    async mint(account, amount) {
        console.log(account)
        let BONE = 10 ** this.bDecimals
        amount = this.format(new BigNumber(amount).multipliedBy(BONE));
        console.log("amount", amount);
        let res;
        try {
            let tx = await this._transact(this.bToken, 'mint', [account, amount])
            res = {success: true, transaction: tx};
        } catch (error) {
            res = {success: false, error: error};
        }
        return res
    }

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
        console.log(params)
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
        let signed = [this.oracle.timestamp, this.oracle.price, this.oracle.v, this.oracle.r, this.oracle.s];
        let gas = 0;
        console.log(signed,params)
        for (let i = 0; i < 20; i++) {
            try {
                gas = await contract.methods[this.methods[func]](...params, ...signed).estimateGas({'from': this.account});
                gas = parseInt(gas * 1.25);
                break;
            } catch (err) {

            }
        }
        if (gas == 0) gas = 532731;
        let tx = await contract.methods[this.methods[func]](...params, ...signed).send({'from': this.account, 'gas': gas});
        return tx;
    }

    async _readjson(filename) {
        let response = await fetch(`faucetstatic/chain/config/${filename}`);
        return await response.json();
    }

    async _initializeContracts(index) {
        console.log(index)
        try {
            let config = await this._readjson('config.json');
            this.oracleUrl = config.oracleUrl;
            this.addresses = config.addresses[index];
            this.abifiles = config.abifiles;
            this.methods = config.methods;
            let [poolAbi, bTokenAbi, pTokenAbi, lTokenAbi] = await Promise.all([
                this._readjson(this.abifiles.pool),
                this._readjson(this.abifiles.bToken),
                this._readjson(this.abifiles.pToken),
                this._readjson(this.abifiles.lToken)
            ]);
            this.pool = new this.web3.eth.Contract(poolAbi, this.addresses.pool);
            this.bToken = new this.web3.eth.Contract(bTokenAbi, this.addresses.bToken);
            this.pToken = new this.web3.eth.Contract(pTokenAbi, this.addresses.pToken);
            this.lToken = new this.web3.eth.Contract(lTokenAbi, this.addresses.lToken);
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
            let [btoken, ltoken, ltotal] = await Promise.all([
                this._call(this.bToken, 'balanceOf', [this.account]),
                this._call(this.lToken, 'balanceOf', [this.account]),
                this._call(this.lToken, 'totalSupply')
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
            this.position.volume = deri_natural(p[1]);
            this.position.cost = deri_natural(p[2]);
            this.position.lastCumuFundingRate = deri_natural(p[3]);
            this.position.margin = deri_natural(p[4]);
            this.position.lastUpdateTimestamp = bg(p[5]);
        } catch (err) {
            console.log(err);
        }
    }

    async _updateStates() {
        try {
            let s = await this._call(this.pool, 'getStateValues');
            this.states.cumuFundingRate = deri_natural(s.cumuFundingRate);
            this.states.cumuFundingRateBlock = bg(s.cumuFundingRateBlock);
            this.states.liquidity = deri_natural(s.liquidity);
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
        return (this.position.margin.plus(amount).gte(minMargin) &&
                volume.lte(poolMaxVolume.minus(this.states.tradersNetVolume)) &&
                volume.gte(poolMaxVolume.negated().minus(this.states.tradersNetVolume)));
    }

}


