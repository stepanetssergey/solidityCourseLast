//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract courseToken is ERC20 {
    constructor() ERC20("Course Token", "OCT") {
        _mint(msg.sender, 1000000 ether);
    }
}
