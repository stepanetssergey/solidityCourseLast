//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Deposits {
    uint256 public deposit;

    function setDeposit(uint256 _deposit) public {
        deposit = _deposit;
    }

    function getDeposit() public view returns (uint256) {
        return deposit;
    }
}
