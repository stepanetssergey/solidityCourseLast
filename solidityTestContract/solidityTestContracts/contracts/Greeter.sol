//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
// huge
import "./interfaces/IDeposits.sol";
import "./interfaces/IUserHistory.sol";
import "./interfaces/IERC20.sol";

contract Greeter {
    string private greeting;
    address public depositAddress;
    address public userHistoryAddress;
    address public ercAddress;
    uint256 public deposit;

    constructor(string memory _greeting, address _depositAddress, address _userHistoryAddress, address _ercAddress) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        depositAddress = _depositAddress;
        userHistoryAddress = _userHistoryAddress;
        ercAddress = _ercAddress;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;

        console.log("add 100 to Deposits contract '%s'", depositAddress);
        // add 100 to Deposits contract
        IDep _deposit = IDep(depositAddress);

        IUserHistory _userHistory = IUserHistory(userHistoryAddress);
        _deposit.setDeposit(100);
        _userHistory.setData(msg.sender);
        deposit = _deposit.getDeposit();
    }

    function getTokens(address _from, address _to, uint _amount) public {
        IERC20 _erc20 = IERC20(ercAddress);
        _erc20.approve(msg.sender, _amount);
        _erc20.transferFrom(msg.sender, _to, _amount);
    }
}
