function login() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "admin" && password == "admin") {
        open("to-do.html", "_self")
    } else {
        alert('Usuário ou senha incorretos');
    }
}

function calc() {
    
    var altura = (document.getElementById('altura').value) / 100;
    var peso = document.getElementById('peso').value;
    var imc = document.getElementById('imc');
    var resultado = document.getElementById('resultado');
    var show = document.getElementById('show');

    if (altura == '' || peso == '') {
        alert('Informe os valores necessários.');
    } else {
        show.classList.remove('hidden');
        res = (peso / (altura * altura)).toFixed(2);
        imc.innerText = res;
        if (res < 18.5) {
            resultado.innerHTML = "Você está abaixo do peso.";
        } else if (res < 24.9) {
            resultado.innerHTML = "Você está com o peso normal. Parabéns!";
        } else if (res < 29.9) {
            resultado.innerHTML = "Você está com sobrepeso.";
        } else if (res < 34.9) {
            resultado.innerHTML = "Você está com obesidade Grau I.";
        } else if (res < 39.9) {
            resultado.innerHTML = "Você está com obesidade Grau II.";
        } else {
            resultado.innerHTML = "Você está com obesidade Grau III.";
        }
    }
}