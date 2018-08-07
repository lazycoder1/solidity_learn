const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/WagerFactory.json');
const compiledCampaign = require('../ethereum/build//Wage.json');

let accounts;
let factory;
let wagerAddress;
let wager;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface));
});
