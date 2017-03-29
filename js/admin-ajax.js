$(document).ready(function () {
    var text = $('#txt').val();

    $('#save-text').on('click', function () {
        $.ajax({
            url: "http://localhost/my-ajax-php/api/?/welcome_text/1",
            type: "PUT",
            data: {
                text: text
            },
            success: function (response) {
                console.log(response);
                $('#txt').html(response);
            }

        });
    });

});