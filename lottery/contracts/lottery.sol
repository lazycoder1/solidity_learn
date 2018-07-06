pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() public {
         manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > .01 ether );
        
        players.push(msg.sender);
    }
    
    function random() private view returns (uint256){
        uint random_number = uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
        
        return random_number;
    }
    
    function pickWinner() public restricted {
        
        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
        players = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
            return players;
    }
    
}