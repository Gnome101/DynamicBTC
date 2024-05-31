const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");
const addresses = require("../Addresses");
describe("Pool", function () {
  let Test;
  beforeEach(async () => {
    accounts = await ethers.getSigners(); // could also do with getNamedAccounts
    deployer = accounts[0];
    user = accounts[1];

    await deployments.fixture(["Local"]);
    const testContract = await deployments.get("Test");
    Test = await ethers.getContractAt("Test", testContract.address);
  });
  it("ahahhaha", async () => {
    console.log("lets start");
    const tx = await Test.changeNum(10);
    await tx.wait();

    const num = await Test.num();
    // console.log(`The num is ${num}`);
    // console.log(addresses[31].V3Factory);
  });
  it("can create a pool", async () => {});
});
