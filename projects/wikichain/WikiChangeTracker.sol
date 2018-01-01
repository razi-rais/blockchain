pragma solidity ^0.4.17;
 
contract WikiChangeTracker
{
    event articleUpdateEvent(address, 
        uint id,
        string title,
        string url,
        uint revision_old,
        uint revision_new,
        uint timestamp,
        string change_type,
        string user,
        string comment);
    
    function WikiChangeTracker() public {}
   
    function UpdateArticleHistory(uint id,
        string title,
        string url,
        uint revision_old,
        uint revision_new,
        uint timestamp,
        string change_type,
        string user,
        string comment) 
        public 
        {
            articleUpdateEvent(msg.sender,id,title,url,revision_new,revision_old,timestamp,change_type,user,comment);
        }
    
}