// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ViewAndPure {
    // Declare a state variable
    uint public x = 1;
    
    // Promise not to modify the state (but can read state)
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }
    
    // Promise not to modify or read from state
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}


/**
 * Getter functions (those which return values) can be declared either view or pure.
    View: Functions which do not change any state values
    Pure: Functions which do not change any state values, but also don't read any state values
 * 
 */