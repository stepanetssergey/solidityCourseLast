const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ERC20 = await ethers.getContractFactory("ERC20");
    const erc20 = await ERC20.deploy("COURCE TOKEN", "SCT");
    await erc20.deployed();

    const UserHistory = await ethers.getContractFactory("UserHistory");
    const userHistory = await UserHistory.deploy();
    await userHistory.deployed();

    const Deposits = await ethers.getContractFactory("Deposits");
    const deposits = await Deposits.deploy();
    await deposits.deployed();

    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy(
      "Hello, world!",
      deposits.address,
      userHistory.address
    );
    await greeter.deployed();

    const accounts = await ethers.getSigners();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
    expect(await deposits.deposit()).to.equal(100);
    expect(await userHistory.userColumn(accounts[0].address)).to.equal(1);
    const totalSupply = await erc20.totalSupply();
    const initialBalance = await erc20.balanceOf(accounts[0].address);
    expect(totalSupply.toString()).to.equal((1000000 * 10 ** 6).toString());
    expect(initialBalance.toString()).to.equal((1000000 * 10 ** 6).toString());
    const transferTrx = await erc20.transfer(accounts[1].address, 1000000);
    await transferTrx.wait();
    const balanceAccount1 = await erc20.balanceOf(accounts[1].address);
    expect(balanceAccount1.toString()).to.equal("1000000");

    //approve -
    //getTokens
    //check balance of contract получил контракт токены или нет
    //уменьшение баланса на адресе с которого перечислились токены
  });
});
