//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ERC20 {
    string public name;
    string public symbol;
    uint8 public decimal;
    uint public totalSupply;

    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowed;

    event Transfer(address _from, address _to, uint _amount);
    event Approval(address _owner, address _spender, uint _amount);

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        decimal = 6;

        _mint(msg.sender, 1000000 * 10 ** decimal);
    }

    function _mint(address _address, uint _amount) internal {
        totalSupply += _amount;
        balances[_address] += _amount;
    }

    function transfer(address _address, uint _amount) public returns (bool success) {
        require(balances[msg.sender] >= _amount, "Not enough tokens.");

        balances[msg.sender] -= _amount;
        balances[_address] += _amount;
        emit Transfer(msg.sender, _address, _amount);

        return true;
    }

    function balanceOf(address _address) public view returns (uint balance) {
        return balances[_address];
    }

    function transferFrom(address _from, address _to, uint _amount) public returns (bool success) {
        console.log("_from='%s', msg.sender='%s', allowed[_from][msg.sender]='%s'", _from, msg.sender, allowed[_from][msg.sender]);
        require(allowed[_from][msg.sender] >= _amount, "No allowed tokens.");

        allowed[_from][msg.sender] -= _amount;
        balances[_from] -= _amount;
        balances[_to] += _amount;
        emit Transfer(_from, _to, _amount);

        return true;
    }

    function approve(address _spender, uint _amount) public returns (bool success) {
        allowed[msg.sender][_spender] = _amount;
        emit Approval(msg.sender, _spender, _amount);
        console.log("Approved from '%s' amount '%s' of total balance '%s'", _spender, _amount, balanceOf(_spender));

        return true;
    }
}