pragma solidity ^0.4.18;

contract WagerFactory {
    mapping(address=>address) public wagerToAdmin;
    mapping(address=>address[]) public adminToWagers;

    function createWager() public returns (address){
        address tempWager = new Wager("BTC Wager","Will fall below $6k by 10 days","BTC","<");
        adminToWagers[msg.sender].push(tempWager);
        wagerToAdmin[tempWager] = msg.sender;
        return tempWager;
    }

    function getLatestWagerOfUser(address admin_address) public returns (address){
        return adminToWagers[admin_address][adminToWagers[admin_address].length-1];
    }
}

contract Wager {
    string public name;
    string public description;
    string public stock_symbol;
    string public operator;
    address public bet_admin;
    
    mapping(address => uint) willOccur;
    mapping(address => uint) willNotOccur;
    address[] public willOccurList;
    address[] public willNotOccurList;
    uint willOccurAmount;
    uint willNotOccurAmount;
    
    bool ended;
    
    event Log(uint);

    constructor(string name_ , string description_ , string stock_symbol_ , string operator_) public payable {
        name = name_;
        description = description_;
        stock_symbol = stock_symbol_;
        operator = operator_;
        bet_admin = msg.sender;
        ended = false;
    }

    modifier restricted() {
        require(msg.sender == bet_admin);
        _;
    }

    function participate(bool side_) public payable {
        if (side_){
            willOccur[msg.sender] += msg.value;
            willOccurList.push(msg.sender);
            willOccurAmount += msg.value;
        }else{
            willNotOccur[msg.sender] += msg.value;
            willNotOccurList.push(msg.sender);
            willNotOccurAmount += msg.value;
        }
    }

    function getWinningAmount() public view returns(uint){
        return address(this).balance;
    }
    
    function declareWinner(bool won) public payable restricted {
        uint total_amount = address(this).balance-address(this).balance/20;
        bool notEnoughPlayers = false;
        
        if (willOccurList.length == 0 ){   // This returns the bet amounts if no one has placed bet on the other side
            for (uint i=0;i<willNotOccurList.length;i++){
                willNotOccurList[i].transfer(willNotOccur[willNotOccurList[i]]);
            }
            notEnoughPlayers = true;
        }else if( willNotOccurList.length == 0){
            for (i=0;i<willOccurList.length;i++){
                willOccurList[i].transfer(willOccur[willOccurList[i]]);
            }
            notEnoughPlayers = true;
        }
        
        
        if (!notEnoughPlayers && won ){   // There are bets on both the sides
            for (i=0; i<willOccurList.length; i++) {
              uint amount_won = (willOccur[willOccurList[i]]/willOccurAmount)*total_amount;
              Log(amount_won);
              willOccurList[i].transfer(amount_won);
            }
        }else if(!notEnoughPlayers && !won ){
            for (i=0; i<willOccurList.length; i++) {
              amount_won = (willNotOccur[willNotOccurList[i]]/willNotOccurAmount)*total_amount;
              willNotOccurList[i].transfer(amount_won);
            }
        }
        bet_admin.transfer(address(this).balance);
        
    }

}
