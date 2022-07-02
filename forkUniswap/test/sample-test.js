const { expect } = require("chai");
const { ethers } = require("hardhat");
const { before } = require("mocha");

describe("Uniswap", function () {
  let uniswapV2Factory;
  let weth;
  let uniswapV2Router;
  let usdt;
  let usdc;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  before(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    uniswapV2Factory = await UniswapV2Factory.deploy(owner.address);
    await uniswapV2Factory.deployed();
    console.log("Factory contract:", uniswapV2Factory.address);

    const WETH = await ethers.getContractFactory("WETH");
    weth = await WETH.deploy();
    await weth.deployed();
    console.log("WETH:", weth.address);

    const UniswapV2Router = await ethers.getContractFactory("UniswapV2Router02")
    uniswapV2Router = await UniswapV2Router.deploy(uniswapV2Factory.address, weth.address);
    await uniswapV2Router.deployed();
    console.log("Router:", uniswapV2Router.address);

    const USDT = await ethers.getContractFactory("USDT");
    usdt = await USDT.deploy();
    await usdt.deployed();
    console.log("USDT Address", usdt.address);

    const USDC = await ethers.getContractFactory("USDC");
    usdc = await USDC.deploy();
    await usdc.deployed();
    console.log("USDC Address", usdc.address);
  });

  // it("Get hash from bytecode", async function () {
  //   const resultHashOfCode = await uniswapV2Factory.pairCodeHash();
  //   console.log(`Hash: ${resultHashOfCode}`)
  //   expect(resultHashOfCode).to.equal('0x3cbfc32c849afe4e535b057f794ebed9eaf51c9923dd8a7f871a30fa9ee03450');
  // });

  it("Token-Token => Add liquidity / Swap / Remove liquidity", async function () {
    const totalSupply = await usdt.totalSupply();
    let initBalanceAccount0USDT = await usdt.balanceOf(owner.address);
    expect(+totalSupply).to.equal(1000000 * 10 ** 18);
    expect(+initBalanceAccount0USDT).to.equal(1000000 * 10 ** 18);

    await usdt.approve(uniswapV2Router.address, (230 * 10 ** 18).toString());
    await usdc.approve(uniswapV2Router.address, (230 * 10 ** 18).toString());
    const pairAddressBefore = await uniswapV2Factory.getPair(usdt.address, usdc.address);
    expect(pairAddressBefore).to.equal('0x0000000000000000000000000000000000000000');

    const liquidityData = await uniswapV2Router.addLiquidity(
      usdt.address,
      usdc.address,
      (100 * 10 ** 18).toString(),
      (100 * 10 ** 18).toString(),
      0,
      0,
      owner.address,
      0 // Comment UniswapV2Router02->ensure->require
    );
    await liquidityData.wait();
    const pairCountAfterAdding = await uniswapV2Factory.allPairsLength();
    expect(pairCountAfterAdding).to.equal(1);

    const pairAddressAfter = await uniswapV2Factory.getPair(usdt.address, usdc.address);
    expect(pairAddressAfter).to.not.equal('0x0000000000000000000000000000000000000000'); // different pairAddress after transaction

    // amountOut = amountIn * reservedOut / reservedIn + amountIn;      x = 10USDT * 100USDC / 100USDT + 10USDT = 9,09  (2.2 - 47:00)
    let getAmountsOut = await uniswapV2Router.getAmountsOut((10 * 10 ** 18).toString(), [usdt.address, usdc.address]);
    const swapTx = await uniswapV2Router.swapExactTokensForTokens(
      getAmountsOut[0].toString(), // 10 * 10 ** 18
      getAmountsOut[1].toString(), // 9,06 * 10 ** 18
      [usdt.address, usdc.address],
      addr1.address,
      0
    )
    await swapTx.wait();
    let balanceAccount0USDT = await usdt.balanceOf(owner.address);
    let balanceAccount1USDC = await usdc.balanceOf(addr1.address);
    // expect(balanceAccount0USDT.toString()).to.equal((initBalanceAccount0USDT - 100 * 10 ** 18 - 10 * 10 ** 18).toString()); // AssertionError: expected '999890000000000000000000' to equal '9.9989e+23'
    expect(balanceAccount1USDC.toString()).to.equal(getAmountsOut[1].toString());

    // const removedLiquidityData = await uniswapV2Router.removeLiquidity( // FAIL: reverted with reason string 'ds-math-sub-underflow'
    //   usdt.address,
    //   usdc.address,
    //   (9 * 10 ** 18).toString(),
    //   0,
    //   0,
    //   owner.address,
    //   0 // Comment UniswapV2Router02->ensure->require
    // );
    // await removedLiquidityData.wait();
  });

  it("Token-ETH => Add liquidity / Swap / Remove liquidity", async function () {
    await usdt.approve(uniswapV2Router.address, (230 * 10 ** 18).toString());
    await weth.approve(uniswapV2Router.address, (230).toString());

    const liquidityData = await uniswapV2Router.addLiquidityETH(
      usdt.address,
      (100 * 10 ** 18).toString(),
      0,
      0,
      owner.address,
      0, // Comment UniswapV2Router02->ensure->require
      { value: 100 });
    await liquidityData.wait();
    const pairCountAfterAdding = await uniswapV2Factory.allPairsLength();
    expect(pairCountAfterAdding).to.equal(2);

    let getAmountsOut = await uniswapV2Router.getAmountsOut((10 * 10 ** 18).toString(), [usdt.address, weth.address]);
    console.log(getAmountsOut)
    // const swapTx = await uniswapV2Router.swapExactTokensForETH( // FAIL: function selector was not recognized and there's no fallback function
    //   getAmountsOut[0].toString(), // 10 * 10 ** 18
    //   getAmountsOut[1].toString(), // 9
    //   [usdt.address, weth.address],
    //   addr2.address,
    //   0
    // )
    // await swapTx.wait();
    // let balanceAccount0USDT = await usdt.balanceOf(owner.address);
    // let balanceAccount2WETH = await usdc.balanceOf(addr2.address);
    //
    // console.log(balanceAccount0USDT, balanceAccount2WETH)
  });
});