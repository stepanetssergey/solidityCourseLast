//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract testLPToken is ERC20 {
    constructor() ERC20("ether-usdt-token", "EUT") {
        _mint(msg.sender, 1000000 ether);
    }
}
