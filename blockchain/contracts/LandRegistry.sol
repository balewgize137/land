// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint256 id;
        string owner;
        string location;
        uint256 area;
    }
    
    Land[] public lands;
    
    function registerLand(
        uint256 _id, 
        string memory _owner,
        string memory _location,
        uint256 _area
    ) public {
        lands.push(Land(_id, _owner, _location, _area));
    }
}