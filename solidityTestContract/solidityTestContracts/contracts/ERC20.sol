//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


contract ERC20 {
    string public name;
    string public symbol;
    uint8 public decimal;
    uint public totalSupply;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        decimal = 6;
        _mint(msg.sender, 1000000 * 10 ** 6);
    }

    mapping(address => uint) public balances;

    function _mint(address _address, uint _amount) internal {
          totalSupply += _amount;
          balances[_address] += _amount;  
    }

    function transfer(address _address, uint _amount) public {
        balances[msg.sender] = balances[msg.sender] - _amount;
        balances[_address] = balances[_address] + _amount;
    }

    function balanceOf(address _address) public view returns(uint) {
        return balances[_address];
    }


}