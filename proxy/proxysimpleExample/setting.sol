// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract settings {

    address public owner;

    mapping(address => bool) public AccessContracts;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function addContract(address _contract_address, bool _active) public {
        AccessContracts[_contract_address] = _active;
    }

    function checkContract(address _contract_address) public view returns(bool) {
        return AccessContracts[_contract_address];
    }
}
