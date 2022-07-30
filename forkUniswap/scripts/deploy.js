// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();
  const UniswapV2Factory = await hre.ethers.ContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy(accounts[0].address);
  await uniswapV2Factory.deployed();
  console.log("Factory contracrt:", uniswapV2Factory.address);
  const WETH = await hre.ethers.ContractFactory("WETH");
  const weth = await WETH.deploy()
  await weth.deployed();
  console.log("WETH:", weth.address)
  const UniswapV2Router = await hre.ethers.ContractFactory("UniswapV2Router02")
  const uniswapV2Router = await UniswapV2Router.deploy(uniswapV2Factory.address, weth.address);
  await uniswapV2Factory.deployed();
  console.log("Router:", uniswapV2Router.address)

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
