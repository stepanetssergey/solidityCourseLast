// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./interfaces/IStorage.sol";
import "./interfaces/IFunctions.sol";

contract proxy {

    address public owner;
    address public storageAddress;
    address public functionsAddress;
    mapping(address => bool) public Admins;

    constructor(address _storage_address) {
        storageAddress = _storage_address;
        owner = msg.sender;
        }

    modifier onlyOwner() {
      require(msg.sender == owner, "Only owner");
      _;
    }

    modifier onlyAdmin() {
        require(msg.sender == owner || Admins[msg.sender] == true, "Only admin");
        _;
    }

    function setStorage(address _address) public onlyOwner {
        storageAddress = _address;
    }

    function setFunctionsContractAddress(address _address) public onlyOwner {
        functionsAddress = _address;
    }

    function setAdmin(address _address, bool _active) public onlyOwner {
         Admins[_address] = _active;
    }

    function editClient(address _address, uint _id, uint _deposit, uint _amount, string memory _name) public onlyAdmin {
        IStorage _storage = IStorage(storageAddress);
        IFunctions _functions = IFunctions(functionsAddress);
        (uint _new_id, uint _new_deposit, uint _new_amount) = _functions.beforeAddClient(_id, _deposit, _amount);
        _storage.editClient(_address, _new_id, _new_deposit, _new_amount, _name);
    }
}
