function inicializar(){
    document.getElementById('inputEmailLogin').focus()
}
inicializar()

function esconderTudo(){
    document.getElementById('formulario-cadastro').style.display = "none"
    document.getElementById('formulario-login').style.display = "none"
}

function mostrarLogin() {
    esconderTudo()
    document.getElementById('formulario-login').style.display = "flex"
    document.getElementById('inputEmailLogin').focus()
}

function mostrarCadastro() {
    esconderTudo()
    document.getElementById('formulario-cadastro').style.display = "flex"
    document.getElementById('inputNomeCadastro').focus()
}

// function cadastrarUsuario() {
// }

// function logar() {
// }


