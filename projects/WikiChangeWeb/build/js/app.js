$('#get-button').click(function () {

    var id = $('#article-id').val();

    $.ajax({
        url: apiUrl + '/GetArticlesByUserID?userID=' + id,
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
            url: apiUrl + '/SaveArticle',
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
