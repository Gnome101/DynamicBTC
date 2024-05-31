const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");
module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  console.log("Your Chain ID:", chainId);

  log("------------------------------------------------------------");
  let args = [];

  const Test = await deploy("Test", {
    from: deployer,
    args: args,
    log: true,
    blockConfirmations: 2,
  });

  if (chainId != 31337) {
    log("Verifying...");
    await verify(Test.address, args, "contracts/Test:Test.sol");
  }
};
module.exports.tags = ["Test", "Need", "Local"];
