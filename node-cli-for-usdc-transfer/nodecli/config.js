
// this file contains the address of usdc and the abi declarations

const config = {
    address:'0x68ec573C119826db2eaEA1Efbfc2970cDaC869c4',
    abi:[
        'function gimmesome() external',
        'function balanceOf(address _owner) public view returns (uint256 balance)' ,
        'function transfer(address _to , uint256 value) public returns (bool success)'

    ]
}


module.exports = config;