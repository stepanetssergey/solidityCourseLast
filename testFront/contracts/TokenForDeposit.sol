//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TokenForDeposit {
    struct user {
        uint256 deposit;
        uint256 id;
    }

    uint256 public userId;
    event AddDeposit(
        address _address,
        uint256 _current_amount,
        uint256 _total_amount
    );

    mapping(address => user) public Users;
    mapping(uint256 => address) public UserAddressById;

    function getUserDeposit(address _address) public view returns (uint256) {
        return Users[_address].deposit;
    }

    function addDeposit(uint256 _deposit) public {
        userId += 1;
        Users[msg.sender].deposit += _deposit;
        Users[msg.sender].id = userId;
        UserAddressById[userId] = msg.sender;
        emit AddDeposit(msg.sender, _deposit, Users[msg.sender].deposit);
    }
}
