$('#get-button').click(function () {

    id = 33;

    $.ajax({
        url: apiUrl + '/GetArticlesByUserID?userID=' + id,
        data: {
            format: 'json'
        },
        error: function () {
            $('#info').html('<p>An error has occurred</p>');
        },
        dataType: 'json',
        success: function (data) {
            window.alert('it worked we saved article #' + id);
        },
        type: 'GET'
     });
});