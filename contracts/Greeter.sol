//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
// huge
import "./interfaces/IDeposits.sol";

contract Greeter {
    string private greeting;
    address public depositAddress;
    uint256 public deposit;

    constructor(string memory _greeting, address _depositAddress) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        depositAddress = _depositAddress;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
        // add 100 to Deposits contract
        IDep _deposit = IDep(depositAddress);
        _deposit.setDeposit(100);
        deposit = _deposit.getDeposit();
    }
}
