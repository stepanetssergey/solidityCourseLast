//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Farming {
    struct pool {
        address lpAddress;
        address tokenAddress;
        uint256 tokensPerBlock;
        uint256 tokensPerLP;
        uint256 lastBlock;
    }

    uint256 public poolId;
    mapping(uint256 => pool) public Pools;

    function addPool(
        address _lpAddress,
        address _tokenAddress,
        uint256 _tokensPerBlock
    ) public {
        poolId += 1;
        Pools[poolId].lpAddress = _lpAddress;
        Pools[poolId].tokenAddress = _tokenAddress;
        Pools[poolId].tokensPerBlock = _tokensPerBlock;
    }
}
