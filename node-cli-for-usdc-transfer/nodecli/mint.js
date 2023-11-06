

const ethers = require('ethers');

const wallet = require('./wallet');
const provider = require('./provider');
const { address, abi } = require('./config');


async function main(){
    // this connect the wallet to an ethereum node;
    const account = wallet.connect(provider);

    // we need to get an instance of the usdc contract 

    const usdc = new ethers.Contract(address, abi,account);


    // you could indicate the amount of gas you want spent on this transaction;

    const mintedCoin = await usdc.gimmeSome({gasPrice:20e9});

// since this is an asynchronous action we need to await it 
    const transaction = await mintedCoin.wait();

    // let's display the block numbe to the console

    console.log(`the transaction could be found in the block
        with number ${transaction.blockNumber}`);
    // 

}

main();