$(document).ready(function () {
    /*GET text from db-----------------------------------------*/
    $.ajax({
        url: "../api/?/welcome_text",
        success: (result) => {
            console.log(result.texts[0].mytext);
            const txt = result.texts[0].mytext;
            $('#txt').html(txt);
        }
    });
    /*PUT update text-------------------------------------------*/
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
    /*PUT------------with delete text--------------*/
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
    /*GET users----------------------------------------*/
    $.get('../api/?/user')
        .then((response) => {
            console.log(response.users);
            var userinfo = response.users.map((user) => {
                var info = `<div class='well'>
                            <ul>
                            <li>${user.name}</li>
                            <li>${user.address}</li>
                            <li>${user.phone}</li>
                            <li>${user.email}</li>
                            </ul>
                            </div>`;

                return info;
            });

            $('#admin-users').html(userinfo);
        });
    $('#save-user').on('click', function () {
        var jsonarr = [];
        var info = {
            name: $('#name').val(),
            address: $('#adress').val(),
            phone: $('#phone').val(),
            email: $('#email').val()
        };
        jsonarr.push(info);
        $.post('../api/?/user', {
                data: JSON.stringify(jsonarr)
            })
            .then((response) => {
                console.log(response.users);
            });
    });

});