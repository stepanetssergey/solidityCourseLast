const hre = require("hardhat");

async function main() {
  const Deposits = await hre.ethers.getContractFactory("Deposits");
  const deposits = await Deposits.deploy();
  await deposits.deployed();

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!", deposits.address);

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
