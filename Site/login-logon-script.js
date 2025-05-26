function mostrarLogin() {
    document.getElementById('formulario-login').style.display = "flex"
    document.getElementById('formulario-cadastro').style.display = "none"

}

function mostrarCadastro() {
    document.getElementById('formulario-cadastro').style.display = "flex"
    document.getElementById('formulario-login').style.display = "none"
}

function cadastrarUsuario() {
    let usuario = document.getElementById('usuario').value
    let email = document.getElementById('email-cadastro').value
    let senha = document.getElementById('senha-cadastro').value
    let telefone = document.getElementById('telefone').value

    if (usuario && email && senha && telefone) {
        alert(` Usuario: ${usuario}\n Email: ${email}\n Senha: ${senha}\n Telefone: ${telefone}\n`)
    } else {
        alert("Por favor, preencha todos os campos")
    }
}

function logar() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (email && senha) {
        alert(` Email: ${email}\n Senha: ${senha}\n`)
    } else {
        alert("Por favor, preencha todos os campos")
    }
}

// Login e Cadastro com os mesmos id's