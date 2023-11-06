

const ethers = require('ethers');



async function main(args){
    // this connect the wallet to an ethereum node;
    const account = wallet.connect(provider);

    // we need to get an instance of the usdc contract 

    const usdc = new ethers.Contract(address, abi,account);


    let to , value;


    try {
        to = ethers.getAddress(args[0]);

    } catch (error) {
        console.error('there was an error in the address given');
        process.exit(1);
        
    }

    try {
        value = ethers.utils.parseUnits(args[1], 6);
        if(value.isNegative)throw new Error();
    } catch (error) {
        console.error('there was an error in the address given');
        process.exit(1);
    }
    const balance = usdc.balanceOf(account.address);
    if( balance.lt(value)){
        console.log('not enough usdc to transfer')
        process.exit(1);
    } 
    // since this is an asyncronous action we need to await it 
    const transfer = await usdc.transfer(to,value);

    const receipt = transfer.wait();

    console.log( ` the transaction is found in block ${receipt.blockNumber}` );

    

}

main(process.argv.slice(2));