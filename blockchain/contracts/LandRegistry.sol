// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint256 id;
        string owner;
        string location;
        uint256 area;
        bool hasBuilding;
        string buildingApproval;
    }

    Land[] public lands;

    // Event logs (for frontend tracking)
    event LandRegistered(uint256 id, string owner, string location);
    event OwnershipTransferred(uint256 id, string oldOwner, string newOwner);
    event BuildingApproved(uint256 id, string approvalDetails);

    // 1. Register New Land
    function registerLand(
        uint256 _id,
        string memory _owner,
        string memory _location,
        uint256 _area
    ) public {
        lands.push(Land(_id, _owner, _location, _area, false, ""));
        emit LandRegistered(_id, _owner, _location);
    }

    // 2. Transfer Land Ownership
    function transferLandOwnership(
        uint256 _id,
        string memory _newOwner
    ) public {
        require(_id < lands.length, "Land does not exist");
        string memory oldOwner = lands[_id].owner;
        lands[_id].owner = _newOwner;
        emit OwnershipTransferred(_id, oldOwner, _newOwner);
    }

    // 3. Approve New Building on Land
    function approveBuilding(
        uint256 _id,
        string memory _approvalDetails
    ) public {
        require(_id < lands.length, "Land does not exist");
        require(!lands[_id].hasBuilding, "Building already exists");
        
        lands[_id].hasBuilding = true;
        lands[_id].buildingApproval = _approvalDetails;
        emit BuildingApproved(_id, _approvalDetails);
    }

    // Get Land Details
    function getLand(uint256 _id) public view returns (
        string memory owner,
        string memory location,
        uint256 area,
        bool hasBuilding,
        string memory buildingApproval
    ) {
        require(_id < lands.length, "Land does not exist");
        Land memory land = lands[_id];
        return (
            land.owner,
            land.location,
            land.area,
            land.hasBuilding,
            land.buildingApproval
        );
    }
}