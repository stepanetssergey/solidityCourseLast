//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract UserHistory {

    mapping (address=>uint) public userColumn;

    function setData(address _address) public {
        userColumn[_address] += 1;
    }
}