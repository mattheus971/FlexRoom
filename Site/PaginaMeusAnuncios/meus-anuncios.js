// Função para mostrar a inicial do nome do usuário no avatar
function atualizarAvatarInicial(usuarioLogado) {
    if (usuarioLogado && usuarioLogado.nome) {
        const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
        const avatarDiv = document.getElementById('avatar-inicial-usuario');
        
        if (avatarDiv) {
            avatarDiv.textContent = primeiraLetra;
        }
    }
}

// Função para exibir os anúncios do usuário
function exibirAnuncios() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "../cadastro-login.html"; // Redireciona para a página de login
        return;
    }

    const anuncios = usuarioLogado.anuncios || [];
    const listaAnuncios = document.getElementById('anuncios-lista');
    
    // Limpa a lista antes de adicionar os anúncios
    listaAnuncios.innerHTML = '';

    if (anuncios.length === 0) {
        listaAnuncios.innerHTML = '<p>Você não tem anúncios cadastrados.</p>';
        return;
    }

    anuncios.forEach(anuncio => {
        const cardAnuncio = document.createElement('div');
        cardAnuncio.classList.add('anuncio-card');

        cardAnuncio.innerHTML = `
            <img src="${anuncio.foto}" alt="Imagem do imóvel">
            <h3>${anuncio.titulo}</h3>
            <p>${anuncio.endereco}</p>
            <p class="valor">R$ ${anuncio.preco.toFixed(2)}</p>
        `;
        
        listaAnuncios.appendChild(cardAnuncio);
    });
}

function atualizarAvatarInicial(usuarioLogado) {
  if (usuarioLogado && usuarioLogado.nome) {
    const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
    const avatarDiv = document.getElementById('avatar-inicial-usuario');

    if (avatarDiv) {
      avatarDiv.textContent = primeiraLetra;
    }
  }
}

function verificarCadastroUsuario() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  
    if (!usuarioLogado) {
      alert("Você precisa estar logado para anunciar.");
      window.location.href = "cadastro-login.html";
      return;
    }
  
    if (!usuarioLogado.nascimento || !usuarioLogado.telefone) {
      alert("Por favor, adicione sua data de nascimento e telefone antes de anunciar.");
      window.location.href = "informacoes-usuario.html";
      return;
    }
  
    // Tudo certo, redireciona para a página de cadastro do anúncio
    window.location.href = "../PaginaCadastrarAnuncio/cadastrar-anuncio.html";
  }

// Quando a página carregar
window.onload = function () {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado) {
        atualizarAvatarInicial(usuarioLogado);
        exibirAnuncios();
    } else {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "../cadastro-login.html";
    }
};













