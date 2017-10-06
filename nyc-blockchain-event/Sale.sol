pragma solidity ^0.4.17;

contract Sales
{
    mapping(string => uint) items;
    mapping (string => string) itemHash;
    uint public totalItems = 0;
    uint public currentItemsCount =0;


    function Sales(uint totalItemCount) public{
        totalItems = totalItemCount;
        currentItemsCount = 0;
    }
    
    function AddItem(string name, uint allowedQuantity,string hash) public {
        if (currentItemsCount < totalItems ){
            if(items[name] == 0 ){
                items[name] = allowedQuantity;
                itemHash[name] = hash;
                currentItemsCount++;
            }
        }
    }

    function DecreaseItemCount(string name, uint qty) public {
         uint currentQty = items[name];
         if(currentQty >= qty){
              items[name] =  currentQty - qty;
         } 
         
    }
    
    function GetItemQty(string name) constant public returns (uint) {
        
            return items[name];
            
        }
    
    function GetItemHash(string name) constant public returns (string){
        
            return itemHash[name];
        
    }
    
}
