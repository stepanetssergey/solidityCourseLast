const { expect } = require("chai");
const { ethers } = require("hardhat");
const { before } = require("mocha");
const {
  abi: abiERC20,
} = require("../artifacts/contracts/UniswapV2ERC20.sol/UniswapV2ERC20.json");

describe("Uniswap", function () {
<<<<<<< HEAD
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
=======
  let uniswapV2Factory;
  let weth;
  let uniswapV2Router;
  let usdt;
  let usdc;
  let owner;
  let addr1;
  let addr2;
  let addrs;
  let prov;

  before(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const UniswapV2Factory = await ethers.getContractFactory(
      "UniswapV2Factory"
    );
    uniswapV2Factory = await UniswapV2Factory.deploy(owner.address);
    await uniswapV2Factory.deployed();
    console.log("Factory contract:", uniswapV2Factory.address);

    const WETH = await ethers.getContractFactory("WETH");
    weth = await WETH.deploy();
    await weth.deployed();
    console.log("WETH:", weth.address);

    const UniswapV2Router = await ethers.getContractFactory(
      "UniswapV2Router02"
    );
    uniswapV2Router = await UniswapV2Router.deploy(
      uniswapV2Factory.address,
      weth.address
    );
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

<<<<<<< Updated upstream
    prov = ethers.provider; // Provider for swapping real ETH
=======
    //prov = ethers.getDefaultProvider();
    prov = ethers.provider;
>>>>>>> Stashed changes
  });

  // it("Get hash from bytecode", async function () {
  //   const resultHashOfCode = await uniswapV2Factory.pairCodeHash();
  //   console.log(`Hash: ${resultHashOfCode}`)
  //   expect(resultHashOfCode).to.equal('0x3cbfc32c849afe4e535b057f794ebed9eaf51c9923dd8a7f871a30fa9ee03450');
  // });

  it("Token-Token => Add liquidity / Swap / Remove liquidity", async function () {
    const totalSupply = await usdt.totalSupply();
    const initBalanceAccount0USDT = await usdt.balanceOf(owner.address);
    expect(+totalSupply).to.equal(1000000 * 10 ** 18);
    expect(+initBalanceAccount0USDT).to.equal(1000000 * 10 ** 18);

    await usdt.approve(uniswapV2Router.address, (230 * 10 ** 18).toString());
    await usdc.approve(uniswapV2Router.address, (230 * 10 ** 18).toString());
    const pairAddressBefore = await uniswapV2Factory.getPair(
      usdt.address,
      usdc.address
    );
    expect(pairAddressBefore).to.equal(
      "0x0000000000000000000000000000000000000000"
    );

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

<<<<<<< Updated upstream
    const pairAddressAfter = await uniswapV2Factory.getPair(usdt.address, usdc.address);
    expect(pairAddressAfter).to.not.equal('0x0000000000000000000000000000000000000000'); // pairAddress created after addLiquidity

    // amountOut = amountIn * reservedOut / reservedIn + amountIn;      x = 10USDT * 100USDC / 100USDT + 10USDT = 9,09  (2.2 - 47:00)
    const getAmountsOut = await uniswapV2Router.getAmountsOut((10 * 10 ** 18).toString(), [usdt.address, usdc.address]);
=======
    const pairAddressAfter = await uniswapV2Factory.getPair(
      usdt.address,
      usdc.address
    );
    expect(pairAddressAfter).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    ); // different pairAddress after transaction

    // amountOut = amountIn * reservedOut / reservedIn + amountIn;      x = 10USDT * 100USDC / 100USDT + 10USDT = 9,09  (2.2 - 47:00)
    let getAmountsOut = await uniswapV2Router.getAmountsOut(
      (10 * 10 ** 18).toString(),
      [usdt.address, usdc.address]
    );
>>>>>>> Stashed changes
    const swapTx = await uniswapV2Router.swapExactTokensForTokens(
      getAmountsOut[0].toString(), // 10 * 10 ** 18
      getAmountsOut[1].toString(), // 9,06 * 10 ** 18
      [usdt.address, usdc.address],
      addr1.address,
      0
    );
    await swapTx.wait();
<<<<<<< Updated upstream
    const balanceAccount1USDC = await usdc.balanceOf(addr1.address);
    expect(balanceAccount1USDC.toString()).to.equal(getAmountsOut[1].toString());
=======
    let balanceAccount0USDT = await usdt.balanceOf(owner.address);
    let balanceAccount1USDC = await usdc.balanceOf(addr1.address);
    // expect(balanceAccount0USDT.toString()).to.equal((initBalanceAccount0USDT - 100 * 10 ** 18 - 10 * 10 ** 18).toString()); // AssertionError: expected '999890000000000000000000' to equal '9.9989e+23'
    expect(balanceAccount1USDC.toString()).to.equal(
      getAmountsOut[1].toString()
    );
>>>>>>> Stashed changes

    const contractLP = new ethers.Contract(pairAddressAfter, abiERC20, owner);
<<<<<<< Updated upstream
    const balanceAccount0LPBefore = await contractLP.balanceOf(owner.address);
    await contractLP.approve(uniswapV2Router.address, (230 * 10 ** 18).toString()); // Approve on Liquidity of pair (usdt-usdc)

    const removedLiquidity = (19 * 10 ** 18).toString();
    const removedLiquidityData = await uniswapV2Router.removeLiquidity(
=======
    let balanceAccount0LP = await contractLP.balanceOf(owner.address);
    // console.log(5555, balanceAccount0LP)
    await contractLP.approve(
      uniswapV2Router.address,
      (230 * 10 ** 18).toString()
    );

    const removedLiquidityData = await uniswapV2Router.removeLiquidity(
      // FAIL: reverted with reason string 'ds-math-sub-underflow'
>>>>>>> Stashed changes
      usdt.address,
      usdc.address,
      removedLiquidity,
      0,
      0,
      owner.address,
      0 // Comment UniswapV2Router02->ensure->require
    );
    await removedLiquidityData.wait();
    const balanceAccount0LP = await contractLP.balanceOf(owner.address);
    expect(balanceAccount0LP.toString()).to.equal(balanceAccount0LPBefore.sub(removedLiquidity).toString());
  });

  it("Test weth token", async function () {
    const deposit = await weth.deposit({
      value: ethers.utils.parseEther("100"),
    });
    const balanceOfWeth = await weth.balanceOf(owner.address);
    console.log(balanceOfWeth);
    console.log(await prov.getBalance(weth.address));
  });

  it("Token-ETH => Add liquidity / Swap / Remove liquidity", async function () {
    await usdt.approve(uniswapV2Router.address, (230 * 10 ** 18).toString());
<<<<<<< Updated upstream
=======
    // await weth.approve(uniswapV2Router.address, (230).toString());
    const balanceAccountTestBefore = await prov.getBalance(owner.address);
    console.log("Owner before:", balanceAccountTestBefore.toString());
>>>>>>> Stashed changes

    const liquidityData = await uniswapV2Router.connect(owner).addLiquidityETH(
      usdt.address,
      ethers.utils.parseEther("100.0"),
      0,
      0,
      owner.address,
      0, // Comment UniswapV2Router02->ensure->require
      { value: ethers.utils.parseEther("100.0") }
    );

    console.log("Ethers:", ethers.utils.parseEther("100.0").toString());
    await liquidityData.wait();
    const pairCountAfterAdding = await uniswapV2Factory.allPairsLength();
    expect(pairCountAfterAdding).to.equal(2);
<<<<<<< Updated upstream

    // const pairUSDTWETH = await uniswapV2Factory.getPair(usdt.address, weth.address);
    // let balanceAccountRouterWETH = await weth.balanceOf(pairUSDTWETH);
    // const balanceAccountUSDTWETH = await prov.getBalance(weth.address);
    // console.log(11111, balanceAccountRouterWETH, balanceAccountUSDTWETH)

    let getAmountsOut = await uniswapV2Router.getAmountsOut((10 * 10 ** 18).toString(), [usdt.address, weth.address]);
    const balanceAccount2WETHBefore = await prov.getBalance(addr2.address);
    const swapTx = await uniswapV2Router.swapExactTokensForETH(
      getAmountsOut[0].toString(), // 10 * 10 ** 18
      getAmountsOut[1].toString(), // 9,06 * 10 ** 18
=======
    const pairUSDTWETH = await uniswapV2Factory.getPair(
      usdt.address,
      weth.address
    );
    let balanceAccountRouterWETH = await weth.balanceOf(pairUSDTWETH);
    const balanceAccountUSDTWETH = await prov.getBalance(weth.address);
    const balanceAccountTest = await prov.getBalance(owner.address);
    console.log("Owner after:", balanceAccountTest.toString());

    console.log(
      "USDT WETH balance:",
      balanceAccountRouterWETH.toString(),
      "Balance WETH:",
      ethers.utils.formatEther(balanceAccountUSDTWETH)
    );

    const trx = {
      to: weth.address,
      value: ethers.utils.parseEther("100.0"),
    };

    const balanceAccountUSDTWETHAfter = await prov.getBalance(weth.address);
    console.log("balance transfer", balanceAccountUSDTWETHAfter);
    await usdt.approve(uniswapV2Router.address, (230 * 10 ** 18).toString());
    let getAmountsOut = await uniswapV2Router.getAmountsOut(
      (10 * 10 ** 18).toString(),
      [usdt.address, weth.address]
    );
    const balanceAccount2WETHBefore = await prov.getBalance(addr2.address);
    console.log("Get balance before addr2", balanceAccount2WETHBefore);
    const swapTx = await uniswapV2Router.swapExactTokensForETH(
      // FAIL: function selector was not recognized and there's no fallback function
      (10 * 10 ** 18).toString(),
      0, // 9,06 * 10 ** 18
>>>>>>> Stashed changes
      [usdt.address, weth.address],
      addr2.address,
      0
    );
    await swapTx.wait();
    const balanceAccount2WETH = await prov.getBalance(addr2.address);
    expect(balanceAccount2WETH.toString()).to.equal(balanceAccount2WETHBefore.add(getAmountsOut[1]).toString());

    const pairAddressAfter = await uniswapV2Factory.getPair(usdt.address, weth.address);
    const contractLP = new ethers.Contract(pairAddressAfter, abiERC20, owner);
    const balanceAccount0LPBefore = await contractLP.balanceOf(owner.address);
    await contractLP.approve(uniswapV2Router.address, (230 * 10 ** 18).toString()); // Approve on Liquidity of pair (usdt-weth)

<<<<<<< Updated upstream
    const removedLiquidity = (19 * 10 ** 18).toString();
    const removedLiquidityData = await uniswapV2Router.removeLiquidityETH( // FAIL: reverted with reason string 'ds-math-sub-underflow'
      usdt.address,
      removedLiquidity,
      0,
      0,
      owner.address,
      0 // Comment UniswapV2Router02->ensure->require
    );
    await removedLiquidityData.wait();
    const balanceAccount0LP = await contractLP.balanceOf(owner.address);
    expect(balanceAccount0LP.toString()).to.equal(balanceAccount0LPBefore.sub(removedLiquidity).toString());
=======
    console.log("Get balance after addr2", balanceAccount2WETH);
>>>>>>> Stashed changes
>>>>>>> nnikulin-homework-2
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

