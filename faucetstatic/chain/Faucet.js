$(function () {
    const contract = new Chain();
    var address;
    connectwallet();
    function connectwallet() {
        contract.connectWallet().then(res => {
            console.log(res);
            if (res.success) {
                load()
                address = contract.account
                let account = contract.account;
                account =
                    account.slice(0, 6) +
                    "***" +
                    account.slice(account.length - 4, account.length);
                $('#connect-wallet').hide();
                if (ethereum.networkVersion != '3') {
                    $('#wrong').text('(Wrong Network!)')
                }
                $(".id").text(account);
                $("#address").text(address)
            } else {
                alert(res.error)
            }
        }).catch(err => {
            console.log(err)
        })

    }
    async function load() {
        await contract._bindEvent()
    }
    $('#obtainU').on('click', addU);
    $('#obtainD').on('click', addD);
    $('#obtainB').on('click', addB);
    $('#obtainBn').on('click', addBn);
    $('#obtainH').on('click', addH);
    function addU() {
        let btn = $('#obtainU')
        disableButton(btn)
        let id = 0;
        if (address) {
            contract.initialize(id).then(() => {
                contract.mint(address, 10000).then(res => {
                    console.log(res)
                    if (!res.success) {
                        enableButton(btn)
                        return; 
                    }
                    enableButton(btn)
                    alert('You  get 10000 USDT')
                }).catch(err => {
                    enableButton(btn)
                    console.log(err)
                })
            });
        }


    }
    function addD() {
        let btn = $('#obtainD')
        disableButton(btn)
        let id = 1;
        if (address) {
                contract.initialize(id).then(() => {
                    contract.mint(address, 10000).then(res => {
                        console.log(res)
                        if (!res.success) {
                            enableButton(btn)
                            return;
                        }
                        enableButton(btn)
                        alert('You  get 10000 DAI')
                    }).catch(err => {
                        enableButton(btn)
                        console.log(err)
                    })
                });
            
        }

    }
    function addB() {
        let btn = $('#obtainB')
        disableButton(btn)
        let id = 2;
        if (address) {
            contract.initialize(id).then(() => {
                contract.mint(address, 10000).then(res => {
                    console.log(res)
                    if (!res.success) {
                        enableButton(btn)
                        return;
                    }
                    enableButton(btn)
                    alert('You  get 10000 BAC')
                }).catch(err => {
                    enableButton(btn)
                    console.log(err)
                })
            });
        }

    }
    function addBn() {
        let btn = $('#obtainBn')
        disableButton(btn)
        let id = 3;
        if (address) {
            contract.initialize(id).then(() => {
                contract.mint(address, 10000).then(res => {
                    console.log(res)
                    if (!res.success) {
                        enableButton(btn)
                        return;
                    }
                    enableButton(btn)
                    alert('You  get 10000 BUSD')
                }).catch(err => {
                    enableButton(btn)
                    console.log(err)
                })
            });
        }

    }
    function addH() {
        let btn = $('#obtainH')
        disableButton(btn)
        let id = 4;
        if (address) {
            contract.initialize(id).then(() => {
                contract.mint(address, 10000).then(res => {
                    console.log(res)
                    if (!res.success) {
                        enableButton(btn)
                        return;
                    }
                    enableButton(btn)
                    alert('You  get 10000 HUSD')
                }).catch(err => {
                    enableButton(btn)
                    console.log(err)
                })
            });
        }

    }

})