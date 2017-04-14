$(document).ready(function () {
    /*GET----welcome text-------------------------------*/

    $.ajax({
        url: "../api/?/welcome_text",
        success: (result) => {
            console.log(result.texts[0].mytext);
            const txt = result.texts[0].mytext;
            $('#txt').html(txt);
        }
    });
    /*PUT----update welcome text-------------------------------*/

    $('#save-text').on('click', function () {
        var text = $('#txt').val();

        $.ajax({
            url: "../api/?/welcome_text/1",
            method: "PUT",
            data: {
                mytext: text,
            },
            success: () => {
                $('.alert-success').show().fadeOut(3000);
            }
        });
    });
    /*PUT---- delete welcome text-------------------------------*/

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
    getUsers();
    /*GET----users-------------------------------*/
    function getUsers() {
        $.get('../api/?/user')
            .then((response) => {
                console.log(response.users);
                var userinfo = response.users.map((user) => {
                    var info = `<div class='well users'>
                            <ul>
                            <li>${user.name}</li>
                            <li>${user.address}</li>
                            <li>${user.phone}</li>
                            <li>${user.email}</li>
                            </ul>

                            <input type='hidden' value='${user.id}'>
                            <button class='btn btn-info btn-sm edit'>ändra</button>
                            <button class='btn btn-danger btn-sm delete'>radera användare</button>

                            </div>`;

                    return info;
                });

                $('#admin-users').html(userinfo);
            });
    }

    /*POST----users-------------------------------*/
    $('#saveUser').on('click', () => {
        var users = {
            name: $('#fullName').val(),
            address: $('#address').val(),
            phone: $('#phone').val(),
            email: $('#email').val()
        };
        $.post('../api/?/user', users)
            .then(() => {
                getUsers();
            });
        var inputs = document.querySelectorAll('input[type=text]');
        Array.from(inputs).map(inp => inp.value = "");
    });


    /*DELETE----user------------------------------*/
    $('.container').on('click', '.delete', function () {

        var id = this.parentNode.childNodes[3].value;
        var wells = Array.from(document.querySelectorAll('.users'));
        console.log(id);
        $.ajax({
            url: "../api/?/user/" + id,
            method: "DELETE"
        }).then((response) => {

            var remainder = wells.filter((user) => {
                let userId = user.querySelector('input[type=hidden]').value;
                return userId !== id;
            });

            $('#admin-users').html(remainder);

        });
    });

    /*Edit window----edit user----------------------------*/
    $('.container').on('click', '.edit', function () {
        var id = this.parentNode.childNodes[3].value;
        var childs = [...this.parentNode.childNodes];
        var li = childs[1].children;

        var values = Array.prototype.map.call(li, (el) => {
            var val = el.innerHTML;
            return val;
        });

        values.push(id);

        console.log(values);
        window.location = '../includes/edit.php?edit=' + values;

    });

    /*PUT------edit user---------------------------------------*/
    $('#saveEdit').on('click', function () {

        var name = $('#editName').val();
        var address = $('#editAddress').val();
        var phone = $('#editPhone').val();
        var email = $('#editEmail').val();
        var id = this.parentNode.childNodes[11].value;
        $.ajax({
            url: "../api/?/user/" + id,
            method: "PUT",
            data: {
                name: name,
                address: address,
                phone: phone,
                email: email
            },
            success: () => {
                $('.alert-success').show().fadeOut(3000);
            }
        });
    });

    $('#goback').on('click', () => {
        window.location = '../admin/admin_index.php?page=users';
    });
});