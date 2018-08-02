pragma solidity ^0.4.18;

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

    event Log(uint);

    constructor(string name_ , string description_ , string stock_symbol_ , string operator_) public payable {
        name = name_;
        description = description_;
        stock_symbol = stock_symbol_;
        operator = operator_;
        bet_admin = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == bet_admin);
        _;
    }

    function participate(string name_ , bool side_) public payable {
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

    function declareWinner(bool won) public restricted payable {
        uint total_amount = address(this).balance-address(this).balance/20;
        if (won){
            for (uint i=0; i<willOccurList.length; i++) {
              uint amount_won = (willOccur[willOccurList[i]]/willOccurAmount)*total_amount;
              Log(amount_won);
              willOccurList[i].send(amount_won);
            }
        }else{
            for (i=0; i<willOccurList.length; i++) {
              amount_won = (willNotOccur[willNotOccurList[i]]/willNotOccurAmount)*total_amount;
              willNotOccurList[i].send(amount_won);
            }
        }

    }

}
