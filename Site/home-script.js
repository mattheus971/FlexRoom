window.onload = function() {
    // Recupera o usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
        // Se não encontrar usuário logado, redireciona para login
        window.location.href = "cadastro-login.html";
        return;
    }

    // Atualiza o avatar do usuário logado
    atualizarAvatarInicial(usuarioLogado);

}

// Função para atualizar o avatar do usuário
function atualizarAvatarInicial(usuarioLogado) {
    if (usuarioLogado && usuarioLogado.nome) {
        const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
        const avatarDiv = document.getElementById('avatar-inicial-usuario');

        if (avatarDiv) {
            avatarDiv.textContent = primeiraLetra;
        }
    }
}

// Função para verificar cadastro antes de anunciar
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
    window.location.href = "./PaginaCadastrarAnuncio/cadastrar-anuncio.html";
}


// Função para exibir os anúncios na home de todos os usuários
function exibirAnuncios() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Recupera todos os usuários
  const container = document.querySelector('.container-anuncios');

  let anuncios = [];
  usuarios.forEach(usuario => {
      if (usuario.anuncios) {
          anuncios = anuncios.concat(usuario.anuncios); // Adiciona os anúncios de cada usuário
      }
  });

  // Verifica se há anúncios
  if (anuncios.length === 0) {
      container.innerHTML = '<p>Nenhum anúncio disponível.</p>';
      return;
  }

  // Adiciona os anúncios à página
  anuncios.forEach(anuncio => {
      const anuncioElement = document.createElement('div');
      anuncioElement.classList.add('anuncio');
      anuncioElement.innerHTML = `
          <div>Imagem anuncio</div>
          <h2>${anuncio.titulo}</h2>
          <p>${anuncio.descricao}</p>
          <p>Preço: R$ ${anuncio.preco}</p>
          <button onclick="verAnuncio(${anuncio.id})">Ver mais</button>
      `;
      container.appendChild(anuncioElement);
  });
}

// Função para exibir detalhes do anúncio
function verAnuncio(id) {
  // Aqui você pode redirecionar para uma página de detalhes ou abrir um modal com mais informações.
  console.log(`Ver detalhes do anúncio com ID: ${id}`);
}

// Chama a função para exibir os anúncios
window.onload = function() {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuarioLogado) {
      window.location.href = "cadastro-login.html";
      return;
  }

  atualizarAvatarInicial(usuarioLogado);
  exibirAnuncios();  // Exibe os anúncios de todos os usuários
};
