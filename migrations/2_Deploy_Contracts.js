const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");


module.exports = async function(deployer) {
    await deployer.deploy(Token);
    const token = await Token.deployed();

    await deployer.deploy(EthSwap, token.address);
    const ethswap = await EthSwap.deployed();

    await token.transfer(ethswap.address,'1000000000000000000000000')
};
