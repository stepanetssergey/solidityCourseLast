const { expect } = require("chai");
const { ethers } = require("hardhat");
const { beforeEach } = require("mocha");

describe("Uniswap", function () {
    var accounts, weth, usdt, usdc, uniswapV2Router;
    let uniswapV2Factory;
  before(async function () {
    accounts = await ethers.getSigners();
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    uniswapV2Factory = await UniswapV2Factory.deploy(accounts[0].address);
    await uniswapV2Factory.deployed();
    console.log("Factory contracrt:", uniswapV2Factory.address);
    const WETH = await ethers.getContractFactory("WETH");
    weth = await WETH.deploy()
    await weth.deployed();
    console.log("WETH:", weth.address)
    const UniswapV2Router = await ethers.getContractFactory("UniswapV2Router02")
    uniswapV2Router = await UniswapV2Router.deploy(uniswapV2Factory.address, weth.address);
    await uniswapV2Router.deployed();
    console.log("Router:", uniswapV2Router.address)
    const USDT = await ethers.getContractFactory("USDT")
    usdt = await USDT.deploy()
    await usdt.deployed()
    const USDC = await ethers.getContractFactory("USDC")
    usdc = await USDC.deploy()
    await usdc.deployed()
    console.log("USDC Address", usdc.address)
    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
  it("Get hash from bitecode", async () => {
     const resultHashOfCode = await uniswapV2Factory.pairCodeHash();
     console.log("Hash:", resultHashOfCode)
     expect(resultHashOfCode).to.equal("0x3cbfc32c849afe4e535b057f794ebed9eaf51c9923dd8a7f871a30fa9ee03450");
  })
  it("Add liquidity to router2", async () => {
    await usdt.approve(uniswapV2Router.address, (10 * 10 ** 18).toString())
    await usdc.approve(uniswapV2Router.address, (10 * 10 ** 18).toString())
  const pairAddressBefore = await uniswapV2Factory.getPair(usdt.address, usdc.address)
  expect(pairAddressBefore).to.equal("0x0000000000000000000000000000000000000000")
  const liquidityData = await uniswapV2Router.addLiquidity(usdt.address, 
                                                            usdc.address, 
                                                            (10 * 10 ** 18).toString(),
                                                            (10 * 10 ** 18).toString(),
                                                            0,
                                                            0,
                                                            accounts[0].address, 0); 
                                                            await liquidityData.wait();

    const pairContAfterAdding = await uniswapV2Factory.allPairsLength()
    expect(pairContAfterAdding).to.equal(1)
    const pairAddressAfter = await uniswapV2Factory.getPair(usdt.address, usdc.address)
    expect(pairAddressAfter).to.not.equal("0x0000000000000000000000000000000000000000")
   })

   // swap for tokens to tokens, swap for tokens to ether {value: 1 ether}
   // amountOut - 
   // add liquidity
   // remove liquidity


   

});
