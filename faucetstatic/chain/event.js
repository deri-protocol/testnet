const web3 = new Web3(window.ethereum)
const POOL_ABI=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"lShares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"DepositMargin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"migrationTimestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"source","type":"address"},{"indexed":false,"internalType":"address","name":"target","type":"address"}],"name":"ExecuteMigration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"int256","name":"volume","type":"int256"},{"indexed":false,"internalType":"int256","name":"cost","type":"int256"},{"indexed":false,"internalType":"uint256","name":"margin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Liquidate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"migrationTimestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"source","type":"address"},{"indexed":false,"internalType":"address","name":"target","type":"address"}],"name":"PrepareMigration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"lShares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"int256","name":"tradeVolume","type":"int256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Trade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"WithdrawMargin","type":"event"},{"inputs":[{"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveMigration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"depositMargin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"depositMargin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"source","type":"address"}],"name":"executeMigration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddresses","outputs":[{"internalType":"address","name":"bToken","type":"address"},{"internalType":"address","name":"pToken","type":"address"},{"internalType":"address","name":"lToken","type":"address"},{"internalType":"address","name":"oracle","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getParameters","outputs":[{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"uint256","name":"feeRatio","type":"uint256"},{"internalType":"uint256","name":"minPoolMarginRatio","type":"uint256"},{"internalType":"uint256","name":"minInitialMarginRatio","type":"uint256"},{"internalType":"uint256","name":"minMaintenanceMarginRatio","type":"uint256"},{"internalType":"uint256","name":"minAddLiquidity","type":"uint256"},{"internalType":"uint256","name":"redemptionFeeRatio","type":"uint256"},{"internalType":"uint256","name":"fundingRateCoefficient","type":"uint256"},{"internalType":"uint256","name":"minLiquidationReward","type":"uint256"},{"internalType":"uint256","name":"maxLiquidationReward","type":"uint256"},{"internalType":"uint256","name":"liquidationCutRatio","type":"uint256"},{"internalType":"uint256","name":"priceDelayAllowance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStateValues","outputs":[{"internalType":"int256","name":"cumuFundingRate","type":"int256"},{"internalType":"uint256","name":"cumuFundingRateBlock","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"int256","name":"tradersNetVolume","type":"int256"},{"internalType":"int256","name":"tradersNetCost","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"address[4]","name":"addresses_","type":"address[4]"},{"internalType":"uint256[12]","name":"parameters_","type":"uint256[12]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"liquidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrationDestination","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrationTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newPool","type":"address"},{"internalType":"uint256","name":"graceDays","type":"uint256"}],"name":"prepareMigration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lShares","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lShares","type":"uint256"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newController","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int256","name":"tradeVolume","type":"int256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"trade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"tradeVolume","type":"int256"}],"name":"trade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"tradeVolume","type":"int256"},{"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"tradeWithMargin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"tradeVolume","type":"int256"},{"internalType":"uint256","name":"bAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"tradeWithMargin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bAmount","type":"uint256"}],"name":"withdrawMargin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"withdrawMargin","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const CONTRACT_ABI=[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"int256","name":"volume","type":"int256"},{"indexed":false,"internalType":"int256","name":"cost","type":"int256"},{"indexed":false,"internalType":"int256","name":"lastCumuFundingRate","type":"int256"},{"indexed":false,"internalType":"uint256","name":"margin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastUpdateTimestamp","type":"uint256"}],"name":"Update","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getPosition","outputs":[{"internalType":"int256","name":"volume","type":"int256"},{"internalType":"int256","name":"cost","type":"int256"},{"internalType":"int256","name":"lastCumuFundingRate","type":"int256"},{"internalType":"uint256","name":"margin","type":"uint256"},{"internalType":"uint256","name":"lastUpdateTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPosition","outputs":[{"internalType":"int256","name":"volume","type":"int256"},{"internalType":"int256","name":"cost","type":"int256"},{"internalType":"int256","name":"lastCumuFundingRate","type":"int256"},{"internalType":"uint256","name":"margin","type":"uint256"},{"internalType":"uint256","name":"lastUpdateTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"margin","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPool","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"int256","name":"volume","type":"int256"},{"internalType":"int256","name":"cost","type":"int256"},{"internalType":"int256","name":"lastCumuFundingRate","type":"int256"},{"internalType":"uint256","name":"margin","type":"uint256"},{"internalType":"uint256","name":"lastUpdateTimestamp","type":"uint256"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]
let pool = new web3.eth.Contract(POOL_ABI,"0x919F97417857781f754e00CCCD9100f78B759818");
let pToken = new web3.eth.Contract(CONTRACT_ABI,"0x29Be63E854727BB3Fef77eB107B8d1c33081f989")

async function even(fromBlock = 7470000){
    let events = Array();
    let  toBlock = await web3.eth.getBlock('latest')
    console.log(toBlock)
    toBlock = toBlock.number
    while (fromBlock <= toBlock) {
        let es = await pool.getPastEvents('Trade', {
            // filter: {owner: '0x2bAa211D7E62593bA379dF362F23e7B813d760Ad'},
            fromBlock: fromBlock,
            toBlock: fromBlock + 4999
        });
        for (let e of es) {
            events.push(e);
        }
        fromBlock += 5000;
        console.log(events)
    }
    return events;
}
async function getevent (){
    // let info = await even()
    // console.log(info)
   
}
async function position(address){
    let info = await pool.methods['getPosition(address)'](address).call();
    return info
}
// async function getSumPosition(arr){
//     let arr_info = []
//     arr.map(item=>{
//         let obj = {};
//         let info = await position(item.address);
//         obj.volume = deri_natural(info[0])
//         obj.address = item.address;
//         arr_info.push(obj)
//     })
//     return arr_info
// }
let arr = [
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "99337443000000000000", tradeVolume: "1000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "99231670000000000000", tradeVolume: "-3000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "99074268000000000000", tradeVolume: "2000000000000000000"},
{address: "0x5b984a638506797d1e6e50B4e310d8ab377D3F49", price: "99428940000000000000", tradeVolume: "1000000000000000000"},
{address: "0x5b984a638506797d1e6e50B4e310d8ab377D3F49", price: "99206918000000000000", tradeVolume: "-2000000000000000000"},
{address: "0x5b984a638506797d1e6e50B4e310d8ab377D3F49", price: "99206276000000000000", tradeVolume: "1000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "100301610000000000000", tradeVolume: "2000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "100166931000000000000", tradeVolume: "-4000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "100228057000000000000", tradeVolume: "2000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "99713483000000000000", tradeVolume: "1000000000000000000"},
{address: "0x318252d0b49768D1F1c54a99306Add52d2d97920", price: "99662831000000000000", tradeVolume: "-9000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "99776916000000000000", tradeVolume: "-2000000000000000000"},
{address: "0x18386181bCD9F939B15c1aCF4a5525a82e398c3e", price: "99515223000000000000", tradeVolume: "-30000000000000000000"},
{address: "0x318252d0b49768D1F1c54a99306Add52d2d97920", price: "98754707000000000000", tradeVolume: "9000000000000000000"},
{address: "0x5b984a638506797d1e6e50B4e310d8ab377D3F49", price: "97191166000000000000", tradeVolume: "5000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "97785884000000000000", tradeVolume: "1000000000000000000"},
{address: "0x18386181bCD9F939B15c1aCF4a5525a82e398c3e", price: "96836111000000000000", tradeVolume: "30000000000000000000"},
{address: "0x5b984a638506797d1e6e50B4e310d8ab377D3F49", price: "100657496000000000000", tradeVolume: "4000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "100341937000000000000", tradeVolume: "-2000000000000000000"},
{address: "0x318252d0b49768D1F1c54a99306Add52d2d97920", price: "100195395000000000000", tradeVolume: "-10000000000000000000"},
{address: "0x8ea3374E8dDFE21C07967fDAa4400733a1E60371", price: "99626923000000000000", tradeVolume: "1000000000000000000"},
{address: "0x318252d0b49768D1F1c54a99306Add52d2d97920", price: "99439303000000000000", tradeVolume: "10000000000000000000"},
{address: "0x318252d0b49768D1F1c54a99306Add52d2d97920", price: "100006151000000000000", tradeVolume: "-11000000000000000000"},
{address: "0xA8d27ad7ef49d5b76E6858f3bCAf2B207a2BD7C5", price: "104082828000000000000", tradeVolume: "21000000000000000000"},
{address: "0x8ea3374E8dDFE21C07967fDAa4400733a1E60371", price: "104743479000000000000", tradeVolume: "-1000000000000000000"},
{address: "0x8ea3374E8dDFE21C07967fDAa4400733a1E60371", price: "104739845000000000000", tradeVolume: "2000000000000000000"},
{address: "0x8ea3374E8dDFE21C07967fDAa4400733a1E60371", price: "105499704000000000000", tradeVolume: "-2000000000000000000"},
{address: "0x8ea3374E8dDFE21C07967fDAa4400733a1E60371", price: "95838757000000000000", tradeVolume: "1000000000000000000"},
{address: "0x8ea3374E8dDFE21C07967fDAa4400733a1E60371", price: "100021011000000000000", tradeVolume: "-1000000000000000000"},
{address: "0x5b984a638506797d1e6e50B4e310d8ab377D3F49", price: "96904999000000000000", tradeVolume: "-4000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "81502639000000000000", tradeVolume: "-8000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "82013477000000000000", tradeVolume: "3000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "82149508000000000000", tradeVolume: "5000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "74677669000000000000", tradeVolume: "2000000000000000000"},
{address: "0xdcB57eb18E59495Abd6B0F787F6B4E8ee53027E4", price: "69150248000000000000", tradeVolume: "42000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "71965229000000000000", tradeVolume: "8000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "72101431000000000000", tradeVolume: "20000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "72307709000000000000", tradeVolume: "-5000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "72445459000000000000", tradeVolume: "-15000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "73621993000000000000", tradeVolume: "30000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "73833680000000000000", tradeVolume: "-8000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "74694218000000000000", tradeVolume: "-16000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "75083360000000000000", tradeVolume: "-14000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "75529324000000000000", tradeVolume: "5000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "74937232000000000000", tradeVolume: "3000000000000000000"},
{address: "0xFefC938c543751babc46cc1D662B982bd1636721", price: "72283058000000000000", tradeVolume: "-8000000000000000000"},
{address: "0x2bAa211D7E62593bA379dF362F23e7B813d760Ad", price: "71007015000000000000", tradeVolume: "9000000000000000000"},
{address: "0x8ea3374E8dDFE21C07967fDAa4400733a1E60371", price: "71490750000000000000", tradeVolume: "2000000000000000000"},
{address: "0xE8B6408dC44B6Bd6b4b8068d44c3080Ff5D330a1", price: "72141000000000000000", tradeVolume: "-2000000000000000000"},
{address: "0xE8B6408dC44B6Bd6b4b8068d44c3080Ff5D330a1", price: "71839845000000000000", tradeVolume: "2000000000000000000"},
{address: "0xdcB57eb18E59495Abd6B0F787F6B4E8ee53027E4", price: "63664018000000000000", tradeVolume: "100000000000000000000"},
{address: "0xdcB57eb18E59495Abd6B0F787F6B4E8ee53027E4", price: "66147468000000000000", tradeVolume: "-142000000000000000000"},
{address: "0xdcB57eb18E59495Abd6B0F787F6B4E8ee53027E4", price: "65477865000000000000", tradeVolume: "-279000000000000000000"},
{address: "0xdcB57eb18E59495Abd6B0F787F6B4E8ee53027E4", price: "65383034000000000000", tradeVolume: "279000000000000000000"},
{address: "0x061094610aB161fD9f83b18748890d727f1CDaB1", price: "65835412000000000000", tradeVolume: "-300000000000000000000"},
{address: "0x061094610aB161fD9f83b18748890d727f1CDaB1", price: "66595543000000000000", tradeVolume: "300000000000000000000"},
{address: "0xdcB57eb18E59495Abd6B0F787F6B4E8ee53027E4", price: "64581900000000000000", tradeVolume: "-285000000000000000000"},
{address: "0x18386181bCD9F939B15c1aCF4a5525a82e398c3e", price: "64707465000000000000", tradeVolume: "-100000000000000000000"},
]
let arr_add = []
arr.map(item=>{
    item.price = deri_natural(+item.price).toString()
    item.tradeVolume = deri_natural(+item.tradeVolume).toString()
    arr_add.push(item.address)
})

arr_add = [... new Set(arr_add)]
let arr_num = [];
for (let index = 0; index < arr_add.length; index++) {
    let obj = {};
    obj = arr.filter(c=>c.address == arr_add[index])
    arr_num.push(obj)
}
let arr_cost = [];
console.log(arr_num)
for (let index = 0; index < arr_num.length; index++) {
    arr_num[index].map(item=>{
        let obj = {};
        let num = item.price * item.tradeVolume * 1
        obj.sum = num
        obj.address = item.address;
        arr_cost.push(obj)
    })
    
}
console.log(arr_cost)
let arr_sum_cost1 = [];
for (let index = 0; index < arr_add.length; index++) {
    let obj = {};
    obj = arr_cost.filter(c=>c.address == arr_add[index])
    arr_sum_cost1.push(obj)
}
console.log(arr_sum_cost1)
let arr_sum_cost2 = [];
for (let index = 0; index < arr_sum_cost1.length; index++) {
    let num  = 0;
    let obj = {};
    arr_sum_cost1[index].map(item=>{
        num +=item.sum 
    })
    obj.sum = num;
    obj.address = arr_sum_cost1[index][0].address
    arr_sum_cost2.push(obj)
}
console.log(arr_sum_cost2)
// let volume =  getSumPosition(arr_sum_cost2)
// console.log(volume)
// getevent()
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
