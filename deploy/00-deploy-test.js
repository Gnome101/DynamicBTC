const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");
module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  console.log("Your Chain ID:", chainId);

  log("------------------------------------------------------------");
  let args = [];

  const Manager = await deploy("Manager", {
    from: deployer,
    args: args,
    log: true,
    blockConfirmations: 2,
  });

  if (chainId != 31337) {
    log("Verifying...");
    await verify(Manager.address, args, "contracts/Manager:Manager.sol");
  }
};
module.exports.tags = ["Manager", "Need", "Local"];
