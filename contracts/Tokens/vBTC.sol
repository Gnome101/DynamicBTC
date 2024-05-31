// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VBTC is ERC20 {
    constructor(string memory name, string memory sybmol) ERC20(name, sybmol) {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }

    function mint() public {
        _mint(msg.sender, 1000 * 10 ** 18);
    }

    function mintAmount(uint256 amount) public {
        _mint(msg.sender, amount * 10 ** 18);
    }
}
