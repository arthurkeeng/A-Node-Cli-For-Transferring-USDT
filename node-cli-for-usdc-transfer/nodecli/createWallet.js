

const ethers = require('ethers');

// this creates the private key and the associative address;
const wallet = ethers.Wallet.createRandom();

console.log(`mnemonic phrase :${wallet.mnemonic.phrase}`);

console.log(`address: ${wallet.address}`);

