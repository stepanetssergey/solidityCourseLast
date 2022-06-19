const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {

    const UserHistory = await ethers.getContractFactory("UserHistory");
    const userHistory = await UserHistory.deploy();
    await userHistory.deployed();

    const Deposits = await ethers.getContractFactory("Deposits");
    const deposits = await Deposits.deploy();
    await deposits.deployed();

    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!", deposits.address, userHistory.address);
    await greeter.deployed();

    const accounts = await ethers.getSigners();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
    expect(await deposits.deposit()).to.equal(100);
    expect(await userHistory.userColumn(accounts[0].address)).to.equal(1);
  });
});
