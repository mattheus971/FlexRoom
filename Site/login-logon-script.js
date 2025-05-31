function esconderTudo(){
    document.getElementById('formulario-cadastro').style.display = "none"
    document.getElementById('formulario-login').style.display = "none"
}

function mostrarLogin() {
    esconderTudo()
    document.getElementById('formulario-login').style.display = "flex"
}

function mostrarCadastro() {
    esconderTudo()
    document.getElementById('formulario-cadastro').style.display = "flex"
}

function cadastrarUsuario() {

}

function logar() {

}

// Login e Cadastro com os mesmos id's