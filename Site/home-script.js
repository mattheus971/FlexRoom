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


// Função para exibir os anúncios na home de todos os usuários SEM FOTO
// function exibirAnuncios() {
//   const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Recupera todos os usuários
//   const container = document.querySelector('.container-anuncios');

//   let anuncios = [];
//   usuarios.forEach(usuario => {
//     if (usuario.anuncios) {
//       anuncios = anuncios.concat(usuario.anuncios); // Adiciona os anúncios de cada usuário
//     }
//   });

//   // Verifica se há anúncios
//   if (anuncios.length === 0) {
//     container.innerHTML = '<p>Nenhum anúncio disponível.</p>';
//     return;
//   }

//   // Adiciona os anúncios à página
//   anuncios.forEach(anuncio => {
//     const anuncioElement = document.createElement('div');
//     anuncioElement.classList.add('anuncio');
//     anuncioElement.innerHTML = `
//   <div class="imagem-anuncio">
//     <img src="../assets/Captura de tela 2025-07-15 143226.png" alt="imagem-placeholder">
//   </div>
//   <div class="informacoes-anuncio">
//     <h3>${anuncio.titulo}</h3>
//     <h3>R$ ${anuncio.preco}</h3>
//     <p><i class="fas fa-map-marker-alt"></i>${anuncio.endereco}</p>
//   </div>
// `;


//     // Encontra o usuário que postou o anúncio
//     const usuarioAnunciante = usuarios.find(usuario => usuario.anuncios && usuario.anuncios.includes(anuncio));

//     // Adiciona evento de clique para redirecionar para a página de detalhes
//     anuncioElement.addEventListener('click', () => {
//       // Salva os dados do anúncio e do usuário no localStorage
//       localStorage.setItem('anuncioSelecionado', JSON.stringify(anuncio));
//       localStorage.setItem('usuarioAnunciante', JSON.stringify(usuarioAnunciante));

//       // Redireciona para a página de detalhes
//       window.location.href = './PaginaDetalhesAnuncio/detalhes-anuncio.html';
//     });

//     container.appendChild(anuncioElement);
//   });
// }

// Função para exibir os anúncios na home de todos os usuários COM FOTO
function exibirAnuncios() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Recupera todos os usuários
  const container = document.querySelector('.container-anuncios');

  let anuncios = [];
  usuarios.forEach(usuario => {
    if (usuario.anuncios) {
      anuncios = anuncios.concat(usuario.anuncios);
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

    // Usa a imagem do anúncio ou uma imagem padrão caso nenhum caminho tenha sido cadastrado
    const imagemAnuncio = anuncio.foto ? anuncio.foto : './assets/imagem-padrao.jpg'; // Caminho da imagem padrão na ausência de foto cadastrada

    anuncioElement.innerHTML = `
      <div class="imagem-anuncio">
        <img src="${imagemAnuncio}" alt="${anuncio.titulo}">
      </div>
      <div class="informacoes-anuncio">
        <h3>${anuncio.titulo}</h3>
        <h3>R\$ ${anuncio.preco.toFixed(2)}</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${anuncio.endereco}</p>
      </div>
    `;

    // Encontra o usuário que postou o anúncio
    const usuarioAnunciante = usuarios.find(usuario => usuario.anuncios && usuario.anuncios.includes(anuncio));

    // Adiciona evento de clique para redirecionar para a página de detalhes
    anuncioElement.addEventListener('click', () => {
      // Salva os dados do anúncio e do usuário no localStorage
      localStorage.setItem('anuncioSelecionado', JSON.stringify(anuncio));
      localStorage.setItem('usuarioAnunciante', JSON.stringify(usuarioAnunciante));

      // Redireciona para a página de detalhes
      window.location.href = './PaginaDetalhesAnuncio/detalhes-anuncio.html';
    });

    container.appendChild(anuncioElement);
  });
}



// Função para exibir detalhes do anúncio
function verAnuncio(id) {
  // Aqui redireciona para página de detalhes.
  console.log(`Ver detalhes do anúncio com ID: ${id}`);
}

// Chama a função para exibir os anúncios
window.onload = function () {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuarioLogado) {
    window.location.href = "cadastro-login.html";
    return;
  }

  atualizarAvatarInicial(usuarioLogado);
  exibirAnuncios();  // Exibe os anúncios de todos os usuários

  document.querySelector('.botao-pesquisar').addEventListener('click', buscarAnuncios);

  document.querySelector('.input-pesquisa').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      buscarAnuncios();
    }
  });
};



//==================================================================
// function buscarAnuncios() {
//   const termo = document.querySelector('.input-pesquisa').value.trim().toLowerCase();
//   const container = document.querySelector('.container-anuncios');

//   // Limpa o container antes de tudo
//   container.innerHTML = '';

//   // Se o campo estiver vazio, exibe todos os anúncios
//   if (termo === '') {
//     exibirAnuncios();
//     return;
//   }

//   const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

//   let anuncios = [];
//   usuarios.forEach(usuario => {
//     if (usuario.anuncios) {
//       anuncios = anuncios.concat(usuario.anuncios);
//     }
//   });

//   const anunciosFiltrados = anuncios.filter(anuncio => {
//     const precoStr = anuncio.preco.toString().toLowerCase();
//     return (
//       anuncio.titulo.toLowerCase().includes(termo) ||
//       precoStr.includes(termo) ||
//       (anuncio.descricao && anuncio.descricao.toLowerCase().includes(termo)) ||
//       (anuncio.endereco && anuncio.endereco.toLowerCase().includes(termo))
//     );
//   });

//   if (anunciosFiltrados.length === 0) {
//     container.innerHTML = '<p>Nenhum anúncio encontrado.</p>';
//     return;
//   }

//   anunciosFiltrados.forEach(anuncio => {
//     const anuncioElement = document.createElement('div');
//     anuncioElement.classList.add('anuncio');
//     anuncioElement.innerHTML = `
//       <div class="imagem-anuncio">
//         <img src="../assets/Captura de tela 2025-07-15 143226.png" alt="imagem-placeholder">
//       </div>
//       <div class="informacoes-anuncio">
//         <h3>${anuncio.titulo}</h3>
//         <h3>R$ ${anuncio.preco}</h3>
//         <p>${anuncio.endereco}</p>
//       </div>
//     `;

//     const usuarioAnunciante = usuarios.find(usuario => usuario.anuncios && usuario.anuncios.includes(anuncio));

//     anuncioElement.addEventListener('click', () => {
//       localStorage.setItem('anuncioSelecionado', JSON.stringify(anuncio));
//       localStorage.setItem('usuarioAnunciante', JSON.stringify(usuarioAnunciante));
//       window.location.href = './PaginaDetalhesAnuncio/detalhes-anuncio.html';
//     });

//     container.appendChild(anuncioElement);
//   });
// }

function buscarAnuncios() {
  const termo = document.querySelector('.input-pesquisa').value.trim().toLowerCase();
  const container = document.querySelector('.container-anuncios');

  // Limpa o container antes de tudo
  container.innerHTML = '';

  // Se o campo estiver vazio, exibe todos os anúncios
  if (termo === '') {
    exibirAnuncios();
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  let anuncios = [];
  usuarios.forEach(usuario => {
    if (usuario.anuncios) {
      anuncios = anuncios.concat(usuario.anuncios); // Adiciona os anúncios de cada usuário
    }
  });

  // Filtra os anúncios com base no termo digitado
  const anunciosFiltrados = anuncios.filter(anuncio => {
    const precoStr = anuncio.preco.toString().toLowerCase();
    return (
      anuncio.titulo.toLowerCase().includes(termo) ||
      precoStr.includes(termo) ||
      (anuncio.descricao && anuncio.descricao.toLowerCase().includes(termo)) ||
      (anuncio.endereco && anuncio.endereco.toLowerCase().includes(termo))
    );
  });

  // Exibe mensagem caso nenhum anúncio seja encontrado
  if (anunciosFiltrados.length === 0) {
    container.innerHTML = '<p>Nenhum anúncio encontrado.</p>';
    return;
  }

  // Renderiza os anúncios filtrados
  anunciosFiltrados.forEach(anuncio => {
    const anuncioElement = document.createElement('div');
    anuncioElement.classList.add('anuncio');

    // Obtém a imagem do anúncio ou uma imagem padrão caso a foto esteja ausente
    const imagemAnuncio = anuncio.foto ? anuncio.foto : '../assets/imagem-padrao.jpg'; // Agora usamos `foto` em vez de `fotos`

    anuncioElement.innerHTML = `
      <div class="imagem-anuncio">
        <img src="${imagemAnuncio}" alt="${anuncio.titulo}">
      </div>
      <div class="informacoes-anuncio">
        <h3>${anuncio.titulo}</h3>
        <h3>R\$ ${anuncio.preco.toFixed(2)}</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${anuncio.endereco}</p>
      </div>
    `;

    // Localiza o usuário que postou o anúncio
    const usuarioAnunciante = usuarios.find(usuario => usuario.anuncios && usuario.anuncios.includes(anuncio));

    // Adiciona o evento de clique para redirecionar à página de detalhes
    anuncioElement.addEventListener('click', () => {
      // Salva o anúncio selecionado no localStorage
      localStorage.setItem('anuncioSelecionado', JSON.stringify(anuncio));

      // Salva o anunciante correspondente no localStorage (usuário que criou o anúncio)
      const usuarioAnunciante = usuarios.find(usuario => usuario.anuncios && usuario.anuncios.includes(anuncio));
      localStorage.setItem('usuarioAnunciante', JSON.stringify(usuarioAnunciante));


      // Redireciona para a página de detalhes
      window.location.href = './PaginaDetalhesAnuncio/detalhes-anuncio.html';
    });

    // Adiciona o anúncio ao container
    container.appendChild(anuncioElement);
  });
}
