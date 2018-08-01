const path = require('path');
const fs = require('fs');
const solc = require('solc');

const oraclePath = path.resolve(__dirname, 'contracts', 'oracle.sol');
const source = {'github.com/oraclize/ethereum-api/oraclizeAPI.sol':fs.readFileSync(oraclePath, 'utf8')}
// const input = fs.readFileSync('Coin.sol');

// const output = solc.compile(source, 1);
// const bytecode = output.contracts[':oracle'].bytecode;
//
// const abi = JSON.parse(output.contracts[':oracle'].interface);
module.exports = solc.compile(source, 1).contracts[':ExampleContract'];
