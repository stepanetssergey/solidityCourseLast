//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IDep {
    function setDeposit(uint256 _deposit) external;

    function getDeposit() external view returns (uint256);
}
