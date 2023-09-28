function login() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "admin" && password == "admin") {
        open("to-do.html", "_self")
    } else {
        alert('Usuário ou senha incorretos');
    }
}