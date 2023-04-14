function Enviar() {
    let nome = document.getElementsByName("nomeS")[0].value;
    let email = document.getElementsByName("emailS")[0].value;
    let idade = document.getElementsByName("idadeS")[0].value;
    Validar(nome, email, idade);
}
