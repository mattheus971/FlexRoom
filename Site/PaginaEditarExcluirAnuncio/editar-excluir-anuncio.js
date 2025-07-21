// document.addEventListener('DOMContentLoaded', () => {
//   // Recupera os dados do anúncio do localStorage
//   const anuncio = JSON.parse(localStorage.getItem('anuncioSelecionado')); // Recupera o objeto salvo
  
//   // Verifica se o anúncio existe
//   if (anuncio) {
//     // Preenche os campos da página com os dados do anúncio-----------------------------------------------
//     document.getElementById('inputEditTitulo').value = anuncio.titulo;
//     document.getElementById('precoEditAnuncio').value = anuncio.preco;
//     document.getElementById('inputEditDescricao').value = anuncio.descricao || 'Sem descrição disponível';
//     document.getElementById('inputEditArea').value = anuncio.area ? anuncio.area : 'Não especificado';
//     document.getElementById('inputEditQuartos').value = anuncio.quartos || 'Não especificado';
//     document.getElementById('inputEditBanheiros').value = anuncio.banheiros || 'Não especificado';
//     document.getElementById('inputEditGaragens').value = anuncio.garagem || 'Não especificado';
//     document.getElementById('inputEditDetalhes').value = anuncio.mobiliado ? 'Sim' : 'Não';
//     document.getElementById('inputEditEndereco').value = anuncio.endereco || 'Não especificado';
//     document.getElementById('inputEditTipo').value = anuncio.tipoImovel || 'Não especificado';
//     document.getElementById('inputEditCep').value = anuncio.cep || 'Não informado';

//     // Adiciona a imagem do anúncio (ou imagem padrão se não especificada)
//     const imagemAnuncio = document.getElementById('imagem-anuncio');
//     imagemAnuncio.src = anuncio.foto ? anuncio.foto : '../assets/imagem-padrao.jpg';
//     imagemAnuncio.alt = `Imagem do anúncio: ${anuncio.titulo}`;
//   } else {
//     // Exibe uma mensagem se o anúncio não for encontrado no localStorage
//     const containerConteudo = document.querySelector('.anuncio-detalhado');
//     containerConteudo.innerHTML = '<p>Anúncio não encontrado.</p>';
//   }

//   // Função para excluir o anúncio-------------------------------------------------------------
//   const excluirAnuncio = () => {
//     // Recupera o usuário logado
//     const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

//     if (usuarioLogado) {
//       // Remove o anúncio da lista de anúncios do usuário logado
//       usuarioLogado.anuncios = usuarioLogado.anuncios.filter(a => a.id !== anuncio.id);
      
//       // Atualiza o localStorage com o usuário modificado
//       localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
//     }

//     // Recupera todos os usuários
//     const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

//     // Remove o anúncio de cada usuário que tenha esse anúncio
//     for (let i = 0; i < usuarios.length; i++) {
//       usuarios[i].anuncios = usuarios[i].anuncios.filter(a => a.id !== anuncio.id);
//     }

//     // Atualiza o localStorage com a lista de usuários modificada
//     localStorage.setItem('usuarios', JSON.stringify(usuarios));

//     // Remove o anúncio do localStorage
//     localStorage.removeItem('anuncioSelecionado');
    
//     // Redireciona ou exibe mensagem de sucesso
//     window.location.href = "../PaginaMeusAnuncios/meus-anuncios.html"; // Pode redirecionar ou exibir mensagem
//   };

//   // Evento do botão excluir
//   const botaoExcluir = document.querySelector('.botao-excluir');
//   botaoExcluir.addEventListener('click', (event) => {
//     event.preventDefault(); // Impede o envio do formulário
//     if (confirm("Você tem certeza que deseja excluir este anúncio?")) {
//       excluirAnuncio();
//     }
//   });
// });






document.addEventListener('DOMContentLoaded', () => {
  // Recupera os dados do anúncio do localStorage
  const anuncio = JSON.parse(localStorage.getItem('anuncioSelecionado')); // Recupera o objeto salvo

  if (anuncio) {
    // Preenche os campos da página com os dados do anúncio
    document.getElementById('inputEditTitulo').value = anuncio.titulo;
    document.getElementById('precoEditAnuncio').value = anuncio.preco;
    document.getElementById('inputEditDescricao').value = anuncio.descricao || 'Sem descrição disponível';
    document.getElementById('inputEditArea').value = anuncio.area ? anuncio.area : 'Não especificado';
    document.getElementById('inputEditQuartos').value = anuncio.quartos || 'Não especificado';
    document.getElementById('inputEditBanheiros').value = anuncio.banheiros || 'Não especificado';
    document.getElementById('inputEditGaragens').value = anuncio.garagem || 'Não especificado';
    document.getElementById('inputEditDetalhes').value = anuncio.detalheImovel || 'Não especificado';
    document.getElementById('inputEditEndereco').value = anuncio.endereco || 'Não especificado';
    document.getElementById('inputEditTipo').value = anuncio.tipoImovel || 'Não especificado';
    document.getElementById('inputEditCep').value = anuncio.cep || 'Não informado';
    const imagemAnuncio = document.getElementById('imagem-anuncio');
    imagemAnuncio.src = anuncio.foto ? anuncio.foto : '../assets/imagem-padrao.jpg';
    imagemAnuncio.alt = `Imagem do anúncio: ${anuncio.titulo}`;
  } else {
    const containerConteudo = document.querySelector('.anuncio-detalhado');
    containerConteudo.innerHTML = '<p>Anúncio não encontrado.</p>';
  }

  // Função para excluir o anúncio
  const excluirAnuncio = () => {
    // Recupera o usuário logado
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
      // Remove o anúncio da lista de anúncios do usuário logado
      usuarioLogado.anuncios = usuarioLogado.anuncios.filter(a => a.id !== anuncio.id);
      
      // Atualiza o localStorage com o usuário modificado
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
    }

    // Recupera todos os usuários
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Remove o anúncio de cada usuário que tenha esse anúncio
    for (let i = 0; i < usuarios.length; i++) {
      usuarios[i].anuncios = usuarios[i].anuncios.filter(a => a.id !== anuncio.id);
    }

    // Atualiza o localStorage com a lista de usuários modificada
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Remove o anúncio do localStorage
    localStorage.removeItem('anuncioSelecionado');
    
    // Redireciona ou exibe mensagem de sucesso
    window.location.href = "../PaginaMeusAnuncios/meus-anuncios.html"; // Pode redirecionar ou exibir mensagem
  };

  // Função para atualizar o anúncio
  const atualizarAnuncio = () => {
    // Recupera o input de arquivo
    const fotoInput = document.getElementById('inputEditFoto');
    const arquivo = fotoInput.files[0];

    // Caminho da foto (se houver um novo arquivo selecionado, atualiza; senão, mantém o original)
    let foto = anuncio.foto;  // Mantém a foto original como padrão
    if (arquivo) {
      const extensoesPermitidas = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

      // Valida extensão
      if (!extensoesPermitidas.includes(arquivo.type)) {
        alert("Por favor, selecione uma imagem");
        return;
      }

      // Gera o caminho relativo da nova foto
      foto = `/assets/${arquivo.name}`;
      
    }

    // Coleta os novos dados do formulário
    const novoAnuncio = {
      id: anuncio.id, // mantém o mesmo ID para identificar o anúncio
      titulo: document.getElementById('inputEditTitulo').value,
      preco: parseFloat(document.getElementById('precoEditAnuncio').value),
      descricao: document.getElementById('inputEditDescricao').value,
      area: parseFloat(document.getElementById('inputEditArea').value),
      quartos: parseInt(document.getElementById('inputEditQuartos').value),
      banheiros: parseInt(document.getElementById('inputEditBanheiros').value),
      garagem: parseInt(document.getElementById('inputEditGaragens').value),
      detalheImovel: document.getElementById('inputEditDetalhes').value,
      endereco: document.getElementById('inputEditEndereco').value,
      tipoImovel: document.getElementById('inputEditTipo').value,
      cep: document.getElementById('inputEditCep').value,
      foto: foto // Atualiza o campo foto
    };

    // Atualiza o anúncio no localStorage (usuarioLogado)
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado) {
      usuarioLogado.anuncios = usuarioLogado.anuncios.map(a => a.id === anuncio.id ? novoAnuncio : a);
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
    }

    // Atualiza o anúncio na lista de usuários
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    for (let i = 0; i < usuarios.length; i++) {
      usuarios[i].anuncios = usuarios[i].anuncios.map(a => a.id === anuncio.id ? novoAnuncio : a);
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Atualiza o anúncio selecionado no localStorage
    localStorage.setItem('anuncioSelecionado', JSON.stringify(novoAnuncio));

    // Redireciona ou exibe mensagem de sucesso
    window.location.href = "../PaginaMeusAnuncios/meus-anuncios.html"; // Redireciona para a página de anúncios
  };

  // Evento para salvar o anúncio
  const botaoSalvar = document.querySelector('.botao-salvar');
  botaoSalvar.addEventListener('click', (event) => {
    event.preventDefault();  // Impede o envio do formulário
    if (confirm("Você tem certeza que deseja salvar as alterações?")) {
      atualizarAnuncio();
    }
  });

  // Evento do botão excluir
  const botaoExcluir = document.querySelector('.botao-excluir');
  botaoExcluir.addEventListener('click', (event) => {
    event.preventDefault();
    if (confirm("Você tem certeza que deseja excluir este anúncio?")) {
      excluirAnuncio();
    }
  });
});

function atualizarAvatarInicial(usuarioLogado) {
  if (usuarioLogado && usuarioLogado.nome) {
    const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
    const avatarDiv = document.getElementById('avatar-inicial-usuario');
    
    if (avatarDiv) {
      avatarDiv.textContent = primeiraLetra;
    }
  }
}

// Quando a página carregar
window.onload = function () {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  
  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "../cadastro-login.html";
    return;
  }

  atualizarAvatarInicial(usuarioLogado);
}


