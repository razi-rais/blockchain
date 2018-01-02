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

    mapping (string => uint) request_ids;
    function WikiChangeTracker() public {}
   
    function UpdateArticleHistory(uint id,
        string request_id, 
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
            if (request_ids[request_id] == 0 ){
                    request_ids[request_id] = id;
                    articleUpdateEvent(msg.sender,id,title,url,revision_new,revision_old,timestamp,change_type,user,comment);
            }
        }
    
}