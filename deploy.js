const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'dolphin fragile river mansion blouse kit fence sauce leg photo senior legal',
    'https://rinkeby.infura.io/v3/77d54bcfab3145cfb2656ea682415f81'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there!']
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        });
    console.log(result.options.address);
};

deploy();