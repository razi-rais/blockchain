pragma solidity ^0.4.4;

contract Sale
{
    mapping(string => uint) items;
    uint public totalItems = 0;
    uint public itemsCount =0;

    function Sale(uint totalItemCount){
        totalItems = totalItemCount;
    }
    
    function AddItem(string name, uint allowedQuantity){
        if (itemsCount < totalItems ){
            if(items[name] == 0 ){
                items[name] = allowedQuantity;
                itemsCount++;
            }
        }
    }
    
        
    function DecreaseItemCount(string name, uint qty){
         uint currentQty = items[name];
         if(currentQty >= qty){
              items[name] =  currentQty - qty;
         } 
    }
    
    function GetItemQty(string name) constant returns (uint){
        
            return items[name];
            
        }
}