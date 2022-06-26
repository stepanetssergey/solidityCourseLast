//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
// huge
import "./interfaces/IDeposits.sol";
import "./interfaces/IUserHistory.sol";

contract Greeter {
    string private greeting;
    address public depositAddress;
    address public userHistoryAddress;
    uint256 public deposit;

    constructor(string memory _greeting, address _depositAddress, address _userHistoryAddress) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        depositAddress = _depositAddress;
        userHistoryAddress = _userHistoryAddress;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
        // add 100 to Deposits contract
        IDep _deposit = IDep(depositAddress);
        IUserHistory _userAddress = IUserHistory(userHistoryAddress);
        _deposit.setDeposit(100);
        _userAddress.setData(msg.sender);
        deposit = _deposit.getDeposit();
    }

}
