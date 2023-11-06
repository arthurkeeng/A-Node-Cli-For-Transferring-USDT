

const ethers = require('ethers');

const wallet = require('./wallet');
const provider = require('./provider');
const { address, abi } = require('./config');


async function main(){
    // this connect the wallet to an ethereum node;
    const account = wallet.connect(provider);

    // we need to get an instance of the usdc contract 

    const usdc = new ethers.Contract(address, abi,account);

    const accountBalance = usdc.balanceOf(account.address);

    // this is an unformatted balance of the account;

    console.log(` usdc balance : ${ethers.utils.formatUnits(accountBalance)}`);

}

main();