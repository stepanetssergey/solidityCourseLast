// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./interfaces/ISettings.sol";

contract Storage {

    address public settingsAddress;

    constructor(address _setting_address) {
      settingsAddress = _setting_address;
    }

    struct client {
        uint id;
        uint deposit;
        uint amount;
        string name;
    }

    mapping(address => client) public Clients;

    modifier onlyContract(address _address) {
        ISettings _settings = ISettings(settingsAddress);
        require(_settings.checkContract(_address) == true, "Only contract");
        _;
    }

    function editClient(address _address, uint _id, uint _deposit, uint _amount, string memory _name) public onlyContract(msg.sender) {
        
        Clients[_address].id = _id;
        Clients[_address].deposit = _deposit;
        Clients[_address].amount = _amount;
        Clients[_address].name = _name;
    }
}
