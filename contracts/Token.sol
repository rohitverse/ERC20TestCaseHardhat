// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token{
    string public name="RohitSah";
    string public symbol="RHT";
    uint public totalSupply=1000;
    address public owner;
    mapping (address => uint) balances;
    constructor(){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }  
    function transfer(address to, uint amount)external{
        require(balances[msg.sender]>=amount,"Not Enough Tokens");
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }
    function balanceOf(address account) external view returns(uint){
        return balances[account];
    }
    // function transferFrom()
}