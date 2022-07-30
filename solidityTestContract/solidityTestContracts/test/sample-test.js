const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  let erc20;
  let userHistory;
  let deposits;
  let greeter;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  before(async function () {
    const ERC20 = await ethers.getContractFactory("ERC20");
    erc20 = await ERC20.deploy("COURCE TOKEN", "SCT");
    await erc20.deployed();

    const UserHistory = await ethers.getContractFactory("UserHistory");
    userHistory = await UserHistory.deploy();
    await userHistory.deployed();

    const Deposits = await ethers.getContractFactory("Deposits");
    deposits = await Deposits.deploy();
    await deposits.deployed();

    const Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy(
      "Hello, world!",
      deposits.address,
      userHistory.address,
      erc20.address
    );
    await greeter.deployed();
  });

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
  });

  it("Should return the new greeting once it's changed", async function () {
    expect(await greeter.greet()).to.equal("Hello, world!");
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    await setGreetingTx.wait(); // wait until the transaction is mined
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("deposits", async function () {
    expect(await deposits.deposit()).to.equal(100);
  });

  it("userHistory", async function () {
    expect(await userHistory.userColumn(owner.address)).to.equal(1);
  });

  it("erc20", async function () {
    const totalSupply = await erc20.totalSupply();
    let balanceAccount0 = await erc20.balanceOf(owner.address);
    expect(totalSupply.toString()).to.equal((1000000 * 10 ** 6).toString());
    expect(balanceAccount0.toString()).to.equal((1000000 * 10 ** 6).toString());

    const transferTx = await erc20.transfer(addr1.address, 2 * 10 ** 6);
    await transferTx.wait();
    const balanceAccount1 = await erc20.balanceOf(addr1.address);
    expect(balanceAccount1.toString()).to.equal((2 * 10 ** 6).toString());

    const approveTx = await erc20.approve(owner.address, 3 * 10 ** 6);
    await approveTx.wait();
    const transferFromTx = await erc20.transferFrom(
      owner.address,
      addr2.address,
      3 * 10 ** 6
    );
    await transferFromTx.wait();

    // // OR
    // const getTokensTx = await greeter.getTokens(
    //   owner.address,
    //   addr2.address,
    //   3 * 10 ** 6
    // );
    // await getTokensTx.wait();

    balanceAccount0 = await erc20.balanceOf(owner.address);
    const balanceAccount2 = await erc20.balanceOf(addr2.address);
    expect(+balanceAccount2).to.equal(3 * 10 ** 6);
    expect(+balanceAccount0).to.equal(
      1000000 * 10 ** 6 - 2 * 10 ** 6 - 3 * 10 ** 6
    );
  });

  //approve -
  //getTokens
  //check balance of contract получил контракт токены или нет
  //уменьшение баланса на адресе с которого перечислились токены
});
