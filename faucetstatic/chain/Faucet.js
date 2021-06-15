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
    $('#obtainBE').on('click', addBE);
    $('#obtainBUV').on('click',addBUV2);
    $('#obtainAU').on('click',addAU);
    $('#obtainU').on('click', addU);
    $('#obtainMATICU').on('click', addMATICU);
    // $('#obtainB').on('click', addB);
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
    
    // function addB() {
    //     let btn = $('#obtainB')
    //     disableButton(btn)
    //     let id = 1;
    //     if (address) {
    //         contract.initialize(id).then(() => {
    //             contract.mint(address, 10000).then(res => {
    //                 console.log(res)
    //                 if (!res.success) {
    //                     enableButton(btn)
    //                     return;
    //                 }
    //                 enableButton(btn)
    //                 alert('You  get 10000 BUSD')
    //             }).catch(err => {
    //                 enableButton(btn)
    //                 console.log(err)
    //             })
    //         });
    //     }

    // }
    
    function addH() {
        let btn = $('#obtainH')
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
                    alert('You  get 10000 USDT')
                }).catch(err => {
                    enableButton(btn)
                    console.log(err)
                })
            });
        }

    }
    function addBE(){
        let btn = $('#obtainBE')
        disableButton(btn)
        let id = 4;
        if (address) {
            contract.initialize(id).then(() => {
                contract.mint(address, 1000).then(res => {
                    console.log(res)
                    if (!res.success) {
                        enableButton(btn)
                        return;
                    }
                    enableButton(btn)
                    alert('You  get 1000 CAKE')
                }).catch(err => {
                    enableButton(btn)
                    console.log(err)
                })
            });
        }
    }
    function addBUV2(){
        let btn = $('#obtainBUV')
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
    function addAU(){
        let btn = $('#obtainAU')
        disableButton(btn)
        let id = 5;
        if (address) {
            contract.initialize(id).then(() => {
                contract.mint(address, 1000).then(res => {
                    console.log(res)
                    if (!res.success) {
                        enableButton(btn)
                        return;
                    }
                    enableButton(btn)
                    alert('You  get 1000 AUTO')
                }).catch(err => {
                    enableButton(btn)
                    console.log(err)
                })
            });
        }
    }
    function addMATICU(){
        let btn = $('#obtainMATICU')
        disableButton(btn)
        let id = 6;
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

})