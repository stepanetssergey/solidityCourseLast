//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./IERC20.sol";

contract Farming {
    struct pool {
        address lpAddress;
        address tokenAddress;
        uint256 tokensPerBlock;
        uint256 tokensPerLP;
        uint256 lastBlock;
    }

    struct user {
        uint amount;
        uint rewardDebt;
    }

    uint256 public poolId;
    mapping(uint256 => pool) public Pools;
    mapping(address => user) public Users;

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

    function updatePool(uint256 _poolId) public {
        pool storage _pool = Pools[_poolId];
        uint256 lpSupply = IERC20(_pool.lpAddress).balanceOf(address(this)); // get balance of this contract
        if (lpSupply == 0) {
            _pool.lastBlock = block.number;
        }
        uint multiplicator = block.number - _pool.lastBlock;
        uint totalTokenAmount = multiplicator * _pool.tokensPerBlock;
        _pool.tokensPerLP = _pool.tokensPerLP + (totalTokenAmount * 1e12 /lpSupply);
        _pool.lastBlock = block.number;
    }

    function deposit(uint256 _poolId, uint256 _lpAmount) public {
         pool storage _pool = Pools[_poolId];
         user storage _user = Users[msg.sender];
         updatePool(_poolId);
         uint pending = _user.amount * _pool.tokensPerLP/1e12 - _user.rewardDebt;
         if (pending != 0) {
            IERC20(_pool.tokenAddress).mint(msg.sender, pending);
         }
         IERC20(_pool.lpAddress).transferFrom(msg.sender, address(this), _lpAmount);
         _user.amount = _user.amount + _lpAmount;
         uint reward = (_user.amount * _pool.tokensPerLP)/1e12;
         _user.rewardDebt = reward;
         
    }

    function withdraw(uint256 _poolId, uint256 _lpAmount) public {
        pool storage _pool = Pools[_poolId];
        user storage _user = Users[msg.sender];
        require(_user.amount >= _lpAmount, "withdraw: not good");
        updatePool(_poolId);
        uint pending = _user.amount * _pool.tokensPerLP/1e12 - _user.rewardDebt;
        IERC20(_pool.tokenAddress).mint(msg.sender, pending);
        IERC20(_pool.lpAddress).transfer(msg.sender, _lpAmount);
        _user.amount = _user.amount - _lpAmount;
        _user.rewardDebt = _user.amount * _pool.tokensPerLP / 1e12;
    }

    function pendingRevenue(uint256 _poolId, address _address) public view returns(uint) {
       pool storage _pool = Pools[_poolId];
       user storage _user = Users[_address];
       uint lpSupply = IERC20(_pool.lpAddress).balanceOf(address(this));
       uint multiplicator = block.number - _pool.lastBlock;
       uint totalTokens = multiplicator * _pool.tokensPerBlock;
       uint tokensPerLP = _pool.tokensPerLP + (totalTokens * 1e12/lpSupply);
       return (_user.amount * tokensPerLP)/1e12 - _user.rewardDebt;
    }
}
