pragma solidity ^0.4.20;
import "github.com/oraclize/ethereum-api/oraclizeAPI.sol";

contract WagerFactory {
    mapping(address=>address[]) public adminToWagers;
    address[] public deployedWagers;

    function createWager(string description_) public returns (address){
        address tempWager = new Wager("json(https://api.pro.coinbase.com/products/BTC-USD/ticker).price",60,description_,"BTC","<",msg.sender);
        adminToWagers[msg.sender].push(tempWager);
        deployedWagers.push(tempWager);
        return tempWager;
    }

    function getLatestWagerOfUser(address admin_address) public returns (address){
        return adminToWagers[admin_address][adminToWagers[admin_address].length-1];
    }

    function getAllCampaigns() public returns (address[]){
        return deployedWagers;
    }
}

contract Wager is usingOraclize {
    string public json_query;
    uint public afterSeconds;
    uint public final_value;
    uint public bet_value;
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

    bool public ended;

    event Log(uint);
    event OraclizeQueryExecuted(string);

    constructor(string json_query_, uint after_, string description_ , string stock_symbol_ , string operator_, address bet_admin_) public payable {
        json_query = json_query_;
        afterSeconds = after_;
        description = description_;
        stock_symbol = stock_symbol_;
        operator = operator_;
        bet_admin = bet_admin_;
        ended = false;
    }

    modifier restricted() {
        require(msg.sender == bet_admin);
        _;
    }

    function __callback(bytes32 myid, string result) {
        if (msg.sender != oraclize_cbAddress()) throw;
        OraclizeQueryExecuted('result got');
        final_value = parseInt(result);
        if (operator == ">"){
            if (final_value >= bet_value){
                declareWinner(true);
            }else{
                declareWinner(false);
            }
        }else {
            if (final_value <= bet_value){
                declareWinner(true);
            }else{
                declareWinner(false);
            }
        }
            
    }
    
    function fetchData() public payable {
        oraclize_query(afterSeconds,"URL", json_query);
    }
    
    function getDetails() public returns (string, address, uint, address[], address[],bool){
        return (
                description,
                bet_admin,
                this.balance,
                willOccurList,
                willNotOccurList,
                ended
            );
    }

    function participate(bool side_) public payable {
        if (side_){
            if (willOccur[msg.sender] == 0 ){
                willOccurList.push(msg.sender);
            }
            willOccur[msg.sender] += msg.value;
            willOccurAmount += msg.value;
        }else{
            if (willNotOccur[msg.sender] == 0 ){
                willNotOccurList.push(msg.sender);
            }
            willNotOccur[msg.sender] += msg.value;
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
              uint amount_won = (willOccur[willOccurList[i]]*total_amount)/willOccurAmount;
              Log(amount_won);
              willOccurList[i].transfer(amount_won);
            }
        }else if(!notEnoughPlayers && !won ){
            for (i=0; i<willOccurList.length; i++) {
              amount_won = (willNotOccur[willNotOccurList[i]]*total_amount)/willNotOccurAmount;
              willNotOccurList[i].transfer(amount_won);
            }
        }
        bet_admin.transfer(address(this).balance);
        ended = true;
    }

}
