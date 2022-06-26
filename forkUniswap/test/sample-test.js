const { expect } = require("chai");
const { ethers } = require("hardhat");
const { beforeEach } = require("mocha");

describe("Uniswap", function () {
  beforeEach("", async function () {
    const accounts = await ethers.getSigners();
    const UniswapV2Factory = await ethers.ContractFactory("UniswapV2Factory");
    const uniswapV2Factory = await UniswapV2Factory.deploy(accounts[0].address);
    await uniswapV2Factory.deployed();
    console.log("Factory contracrt:", uniswapV2Factory.address);
    const WETH = await ethers.ContractFactory("WETH");
    const weth = await WETH.deploy()
    await weth.deployed();
    console.log("WETH:", weth.address)
    const UniswapV2Router = await ethers.ContractFactory("UniswapV2Router02")
    const uniswapV2Router = await UniswapV2Router.deploy(uniswapV2Factory.address, weth.address);
    await uniswapV2Factory.deployed();
    console.log("Router:", uniswapV2Router.address)
    const USDT = await ethers.ContractFactory("USDT")
    const usdt = await USDT.deploy()
    await usdt.deployed()
    const USDC = await ethers.ContractFactory("USDC")
    const usdc = USDC.deploy()
    await usdc.deployed()
    console.log("USDC Address", usdc.address)
    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
