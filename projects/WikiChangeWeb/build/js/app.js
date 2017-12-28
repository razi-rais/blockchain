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

    // call wikipedia to get ID for the article
    // https://stackoverflow.com/questions/6168020/what-is-wikipedia-pageid-how-to-change-it-into-real-page-url
    // 

    // query by title of article, get ID out

    // (remove ID from HTML page)

    $.ajax({
        url: apiUrl + '/SaveArticle',
        data: JSON.stringify({
            "UserID": "12",
            "Articles":

            [{
                "ID": "1",
                "Url": "ASD",
                "Title": "ASD is Great"
            },
            {
                "ID": "5",
                "Url": "Mustard",
                "Title": "Mustard is bad"
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
