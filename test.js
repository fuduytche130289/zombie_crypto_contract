const {Web3} = require("web3")


// set a provider in the sepolia testnet using node rpc url
const web3 = new Web3("HTTP://127.0.0.1:8545");
const abi =
    [
        {
            "inputs": [],
            "name": "count",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "number",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "increment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decrement",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_number",
                    "type": "uint256"
                }
            ],
            "name": "setNumber",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        }
    ];
const address = "0x016098E16b5B19bD009b0816883D93D42cE7853c";
// create a new contract object, providing the ABI and address
const cryptoZombies = new web3.eth.Contract(abi, address);
const account = web3.eth.accounts.privateKeyToAccount('0xec3ce0b5435bbe8428c69d7655693ba0df1330454e3d2580af3d931adc1eb5cf');

cryptoZombies.methods.setNumber(5)
    .send({from: account.address, gas: 3000000})
    .on("receipt", function (receipt) {
        console.log("Successfully set number!");
        // After the setNumber transaction has been mined, call getNumber
        cryptoZombies.methods.getNumber()
            .call()
            .then(function (res) {
                console.log("The number is now: " + res);
            });
    })
    .on("error", function (error) {
        console.log(error);
    });
