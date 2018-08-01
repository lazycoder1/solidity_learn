pragma solidity ^0.4.18;

contract Wager {
    string public name;
    string public description;
    string public stock_symbol;
    string public operator;
    address public bet_admin;
    struct Participant {
        string name;
        uint value;
        address recipient;
        bool side;
    }
    address[] public willOccur;
    address[] public willNotOccur;
    Participant[] public participants;

    constructor(string name_ , string description_ , string stock_symbol_ , string operator_) public {
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
        Participant memory newParticipant = Participant({
           name: name_,
           value: msg.value,
           recipient: msg.sender,
           side: side_
        });

        if (side_){
            willOccur.push(msg.sender);
        }else{
            willNotOccur.push(msg.sender);
        }

        participants.push(newParticipant);
    }

    function getWinningAmount() public returns(uint){
        return address(this).balance;
    }

}
