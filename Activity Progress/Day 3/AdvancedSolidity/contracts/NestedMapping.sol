// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract NestedMappings{
    // Mapping from address =>(mappping from uint to bool)
    mapping(address => mapping (uint => bool)) public nestedMap;

    function get(address _addr1, uint _i) public view returns(bool){
        //You can get values from a nested mapping
        // even when it is not initialized
        // default value of bool  = false

        return nestedMap[_addr1][_i];
    
    }

    function set(
        address _addr1,
        uint _i,
        bool _boo
    ) public {
        nestedMap[_addr1][_i] = _boo;
    }

    function remove(address _addr1, uint _i) public{
        delete nestedMap[_addr1][_i];
    }
}