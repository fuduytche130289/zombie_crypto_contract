// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.21;

contract StoreValue {
    uint256 public count = 0;
    uint256 public number = 1;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        require(count > 0, "Counter cannot be less than 0");
        count -= 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }
}
