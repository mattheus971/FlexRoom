function cadastrarUsuario() {
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;

    if (usuario && senha && email && telefone) {
        alert(`Cadastro realizado! Bem-vindo, ${usuario}`)
        alert(usuario + "\n" + senha + "\n" + email + "\n" + telefone + "\n")
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
}
