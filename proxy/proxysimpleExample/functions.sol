// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Functions {
    address public settingsAddress;

    constructor(address _address) {
        settingsAddress = _address;
    }

    function beforeAddClient(uint _id, uint _deposit, uint _amount) public returns(uint, uint, uint, string memory) {
        require(_id > 100, "Not correct id");
        uint calculateAmount = _deposit * 100 + amount;
        return (_id, _deposit, calculateAmount);
    }
}
