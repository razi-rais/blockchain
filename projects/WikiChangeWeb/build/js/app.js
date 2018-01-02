﻿$(document).ready(function () {
    //var web3 = require("web3");

    //contractId = "0x551db3f1ee78e4e35b337fd10589719bb2f14df4"
    //abi = [{ "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "title", "type": "string" }, { "name": "url", "type": "string" }, { "name": "revision_old", "type": "uint256" }, { "name": "revision_new", "type": "uint256" }, { "name": "timestamp", "type": "uint256" }, { "name": "change_type", "type": "string" }, { "name": "user", "type": "string" }, { "name": "comment", "type": "string" }], "name": "UpdateArticleHistory", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "", "type": "address" }, { "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "title", "type": "string" }, { "indexed": false, "name": "url", "type": "string" }, { "indexed": false, "name": "revision_old", "type": "uint256" }, { "indexed": false, "name": "revision_new", "type": "uint256" }, { "indexed": false, "name": "timestamp", "type": "uint256" }, { "indexed": false, "name": "change_type", "type": "string" }, { "indexed": false, "name": "user", "type": "string" }, { "indexed": false, "name": "comment", "type": "string" }], "name": "articleUpdateEvent", "type": "event" }]
    //httpProvider = "http://localhost:8545";

    //web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));
    //contractInstance = web3.eth.contract(newAbi).at(contractId);

    ////Web3 = require('web3');
    ////web3 = new Web3(provider);
    ////var contract = new web3.eth.Contract(abi, contract_address)

    //web3.eth.getAccounts().then((accounts) => { console.log('accounts', accounts); });
    //contractInstance.getPastEvents('articleUpdateEvent', { fromBlock: 0, toBlock: 'latest' }).then(function (events) { console.log(events) }); 
});



$('#get-button').click(function () {

    var id = $('#article-id').val();

    $.ajax({
        url: apiUrl + '/api/Articles?userID=' + id,
        dataType: 'json',
        type: 'GET'
    }).done(function (data) {
        $('#div-response').text(data.message);
    }).fail(function () {
        $('#info').html('<p>An error has occurred</p>');
    });
});

$('#save-button').click(function () {
    var userId = $('#userId').val().toString();
    var title = $('#wiki-title-1').val().toString();

    var urlTitle = title.replace(/ /g, "_");
    var url = "https://en.wikipedia.org/wiki/" + urlTitle;

    var linkAPI = "https://en.wikipedia.org/w/api.php?action=query&prop=pageprops&ppprop=wikibase_item&format=json&titles=" + title + "&callback=?"
    $.getJSON(linkAPI, function (json) {
        id = Object.keys(json.query.pages)[0];

        $.ajax({
            url: apiUrl + '/api/Articles',
            data: JSON.stringify({
                "UserID": userId,
                "Articles":
                [{
                    "ID": id,
                    "Url": url,
                    "Title": title
                }]
            }),
            contentType: 'application/json',
            type: 'POST'
        }).done(function (data) {
            $('#div-response').text(data.message);
        }).fail(function (error) {
            $('#info').html('<p>An error has occurred</p>');
        });
    });
});
