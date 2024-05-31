// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Test {
    uint public num;

    function changeNum(uint256 x) public {
        num = x;
    }
}
