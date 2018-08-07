const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/WagerFactory.json');

const provider = new HDWalletProvider(
	'sweet jazz visit ginger arrow detect matrix material urge rail remain north',
	'https://rinkeby.infura.io/d7e5swDuBvhF53dyzUvx'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account',accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: '0x' + compiledFactory.bytecode })
		.send({value: 1000000000, gas: '1000000000', from: accounts[0] });

	console.log(compiledFactory.interface);
	console.log('Contract deployed to', result.options.address);
};
deploy();
