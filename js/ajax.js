$(document).ready(function () {

    $.get('./api/?/welcome_text/1')
        .then((response) => {
            console.log(response);
            $('#home').html(response.mytext);
        });

    $.get('./api/?/user')
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

            $('#users').html(userinfo);
        });
});