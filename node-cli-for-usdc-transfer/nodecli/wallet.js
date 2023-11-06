//  this is to create a wallet object;

const ethers = require('ethers');

const mnemonic = 'police hidden success infant awful hotel door grain ride shallow calm bomb';

//  this creates the wallet we need from the given mnemonic;
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`mnemonic : ${wallet.mnemonic.phrase}`);
console.log(`address: ${wallet.address}`);


module.exports = wallet
