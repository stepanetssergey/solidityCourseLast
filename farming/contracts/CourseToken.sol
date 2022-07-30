//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract courseToken is ERC20 {

    mapping(address => bool) public isMinter;
    address public owner;
    constructor() ERC20("Course Token", "OCT") {
        owner = msg.sender;
   }

   modifier onlyMinter() {
    require(isMinter[msg.sender] == true, "Only minter");
    _;
   }

   modifier onlyOwner() {
    require(msg.sender == owner, "Only owner");
    _;
   }

    function addMinter(address _address) public {
        isMinter[_address] = true;
    }
    function mint(address _address, uint _amount) public onlyMinter {
            _mint(_address, _amount);
    }

}
