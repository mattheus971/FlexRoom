function inicializar() {
    document.getElementById('inputEmailLogin').focus()
    esconderTudo()
    mostrarLogin()
}

window.onload = function() {
    inicializar();
};

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

function cadastrarUsuario() {
    const nome = document.getElementById('inputNomeCadastro').value;
    const email = document.getElementById('inputEmailCadastro').value;
    const senha = document.getElementById('inputSenhaCadastro').value;

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Opcional: checar se o email já está cadastrado
    const existeUsuario = usuarios.some(u => u.email === email);
    if (existeUsuario) {
        alert("Este email já está cadastrado.");
        return;
    }

    const usuario = {
        id: Date.now(),  // Gera um ID único baseado no timestamp
        nome,
        email,
        senha,
        nascimento: '',
        telefone: '',
        anuncios: []
    };

    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert("Usuário cadastrado com sucesso!");
    mostrarLogin();

    // Limpar campos
    document.getElementById('inputNomeCadastro').value = "";
    document.getElementById('inputEmailCadastro').value = "";
    document.getElementById('inputSenhaCadastro').value = "";
}


function logar() {
    const emailLogin = document.getElementById('inputEmailLogin').value;
    const senhaLogin = document.getElementById('inputSenhaLogin').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(u => u.email === emailLogin && u.senha === senhaLogin);

    if (usuarioEncontrado) {
        // Salva o usuário logado no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        
        // Redireciona para a página home.html
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorreto");
    }
    document.getElementById('inputEmailLogin').value = "";
    document.getElementById('inputSenhaLogin').value = "";
}


