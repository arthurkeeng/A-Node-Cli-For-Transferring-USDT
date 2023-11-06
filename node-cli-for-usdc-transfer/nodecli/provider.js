

// this is to create the connection to the blockchain;

const ethers = require('ethers');


// we get a link to an infura node as we cant create an etherium node 

const provider = ethers.getDefaultProvider("ropsten",
{
    infura:''
}
)

module.exports = provider;
