$(document).ready(function () {

    $.ajax({
        url: "../api/?/welcome_text",
        success: (result) => {
            console.log(result.texts[0].mytext);
            const txt = result.texts[0].mytext;
            $('#txt').html(txt);
        }
    });

    $('#save-text').on('click', function () {
        var text = $('#txt').val();

        $.ajax({
            url: "../api/?/welcome_text/1",
            method: "PUT",
            data: {
                mytext: text,
            },
            success: (result) => {
                console.log(result.mytext);
            }
        });
    });

    $('#delete-text').on('click', function () {
        var text = '';
        $.ajax({
            url: "../api/?/welcome_text/1",
            method: "PUT",
            data: {
                mytext: text,
            },
            success: (result) => {
                console.log(result.mytext);
                $('#txt').html(result.mytext);
            }
        });
    });
});