$(document).ready(function () {

    $.ajax({
        url: "../api/?/welcome_text/1",
        success: (result) => {
            console.log(result.mytext);
            $('#txt').html(result.mytext);
        }
    });

    $('#save-text').on('click', function () {
        var text = $('#txt').val();
        $.ajax({
            url: "../api/?/welcome_text/1",
            method: "PUT",
            data: {
                mytext: text
            },
            success: (result) => {
                console.log(result.mytext);
            }
        });
    });
});