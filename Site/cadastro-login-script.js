function inicializar() {
    document.getElementById('inputEmailLogin').focus()
}
inicializar()


function esconderTudo() {
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

const usuarios = []
function cadastrarUsuario() {
    const nome = document.getElementById('inputNomeCadastro').value
    const email = document.getElementById('inputEmailCadastro').value
    const senha = document.getElementById('inputSenhaCadastro').value

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    } else {
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };
        usuarios.push(usuario);
        alert("Usuário cadastrado com sucesso!");
        mostrarLogin()
    }
    document.getElementById('inputNomeCadastro').value = "";
    document.getElementById('inputEmailCadastro').value = "";
    document.getElementById('inputSenhaCadastro').value = "";
}

function logar() {
    const emailLogin = document.getElementById('inputEmailLogin').value;
    const senhaLogin = document.getElementById('inputSenhaLogin').value;

    const usuarioEncontrado = usuarios.find(u => u.email === emailLogin && u.senha === senhaLogin);

    if (usuarioEncontrado) {
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorreto");
    }
    document.getElementById('inputEmailLogin').value = "";
    document.getElementById('inputSenhaLogin').value = "";
}


