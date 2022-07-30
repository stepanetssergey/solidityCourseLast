const { expect } = require("chai");
const { ethers } = require("hardhat");
const { before } = require("mocha");

describe("Farming", function () {

  var accounts, courseToken, testLPToken, farming;
  
      before(async function () {
        accounts = await ethers.getSigners();
        const CourseToken = await ethers.getContractFactory("courseToken");
        courseToken = await CourseToken.deploy();
        await courseToken.deployed()

        const TestLPToken = await ethers.getContractFactory("testLPToken");
        testLPToken = await TestLPToken.deploy();
        await testLPToken.deployed()

        const Farming = await ethers.getContractFactory("Farming")
        farming = await Farming.deploy()
        await farming.deployed()
        // add pool 100 tokens per one block
        const addPoolTrx = await farming.addPool(testLPToken.address, courseToken.address, ethers.utils.parseEther("100.0"));
      
      })

      it("Check first pool", async () => {
        const pool = await farming.Pools(1)
        expect(ethers.utils.formatEther(pool.tokensPerBlock)).to.equal("100.0")
      })
});
