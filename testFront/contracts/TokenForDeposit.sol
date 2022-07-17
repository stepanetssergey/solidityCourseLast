//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TokenForDeposit {
    struct user {
        uint deposit;
        uint id;
    }

    uint public userId;
    event AddDeposit(address _address, uint _current_amount, uint _total_amount);

    mapping(address => user) public Users;
    mapping(uint => address) public UserAddressById;

    function getUserDeposit(address _address) public view returns(uint){
        return Users[_address].deposit;
    }

    function addDeposit(uint _deposit) public {
        userId += 1;
        Users[msg.sender].deposit += _deposit;
        Users[msg.sender].id = userId;
        UserAddressById[userId] = msg.sender;
        emit AddDeposit(msg.sender, _deposit, Users[msg.sender].deposit);
    }
}
