function Enviar() {
    let nome = document.getElementsByName("nomeS")[0].value;
    let email = document.getElementsByName("emailS")[0].value;
    let idade = document.getElementsByName("idadeS")[0].value;
    Validar(nome, email, idade);
}

function Validar(nome, email, idade) {
    if (nome === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    else if (!/^[A-Za-z]+$/.test(nome)) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    else if (email === "") {
        alert("Por favor, insira seu email.");
        return;
