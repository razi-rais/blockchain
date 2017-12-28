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

    var id = $('#article-id').val();

    $.ajax({
        url: apiUrl + '/GetArticlesByUserID?userID=' + id,
        data: {
            "UserID": "10",
            "Articles":

            [{
                "ID": "1",
                "Url": "ketchup",
                "Title": "Ketchup is Great"
            },
            {
                "ID": "5",
                "Url": "Mustard",
                "Title": "Mustard is bad"
            }]
        },
        dataType: 'json',
        type: 'POST'
    }).done(function (data) {
        $('#div-response').text(data.message);
    }).fail(function () {
        $('#info').html('<p>An error has occurred</p>');
    });
});
