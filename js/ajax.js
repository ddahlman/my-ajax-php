$(document).ready(function () {

    $.get('./api/?/welcome_text/1')
        .then((response) => {
            console.log(response);
            $('#home').html(response.mytext);
        });
});