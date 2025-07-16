// document.addEventListener('DOMContentLoaded', () => {
//   // Recupera os dados do anúncio e do usuário (anunciante) do localStorage
//   const anuncio = JSON.parse(localStorage.getItem('anuncioSelecionado'));
//   const usuarioAnunciante = JSON.parse(localStorage.getItem('usuarioAnunciante'));

//   if (anuncio && usuarioAnunciante) {
//     // Preenche os campos da página com os dados do anúncio
//     document.getElementById('title').textContent = anuncio.titulo;
//     document.getElementById('price').textContent = `R$ ${anuncio.preco}`;
//     document.getElementById('description').textContent = anuncio.descricao || 'Sem descrição disponível';
//     document.getElementById('area').textContent = anuncio.area +"m²" || 'Não especificado';
//     document.getElementById('quartos').textContent = anuncio.quartos || 'Não especificado';
//     document.getElementById('banheiros').textContent = anuncio.banheiros || 'Não especificado';
//     document.getElementById('garagem').textContent = anuncio.garagem || 'Não especificado';
//     document.getElementById('mobiliado').textContent = anuncio.mobiliado ? 'Sim' : 'Não';
//     document.getElementById('endereco').textContent = anuncio.endereco || 'Não especificado';
//     document.getElementById('cep').textContent = anuncio.cep || 'Não informado';

//     // Preenche os dados do anunciante (usuário)
//     document.getElementById('nome-anunciante').textContent = usuarioAnunciante.nome || 'Não informado';
//     document.getElementById('email-anunciante').textContent = usuarioAnunciante.email || 'Não informado';
//     document.getElementById('telefone-anunciante').textContent = usuarioAnunciante.telefone || 'Não informado';
//   } else {
//     // Se os dados não forem encontrados, exibe uma mensagem
//     document.querySelector('.container-conteudo').innerHTML = '<p>Anúncio não encontrado.</p>';
//   }
// });

// function atualizarAvatarInicial(usuarioLogado) {
//   if (usuarioLogado && usuarioLogado.nome) {
//     const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
//     const avatarDiv = document.getElementById('avatar-inicial-usuario');

//     if (avatarDiv) {
//       avatarDiv.textContent = primeiraLetra;
//     }
//   }
// }

// window.onload = function () {
//   const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

//   if (!usuarioLogado) {
//     window.location.href = "cadastro-login.html";
//     return;
//   }

//   atualizarAvatarInicial(usuarioLogado);
// };

// function verificarCadastroUsuario() {
//   const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

//   if (!usuarioLogado) {
//     alert("Você precisa estar logado para anunciar.");
//     window.location.href = "cadastro-login.html";
//     return;
//   }

//   if (!usuarioLogado.nascimento || !usuarioLogado.telefone) {
//     alert("Por favor, adicione sua data de nascimento e telefone antes de anunciar.");
//     window.location.href = "informacoes-usuario.html";
//     return;
//   }

//   // Tudo certo, redireciona para a página de cadastro do anúncio
//   window.location.href = "/PaginaCadastrarAnuncio/cadastrar-anuncio.html";
// }


document.addEventListener('DOMContentLoaded', () => {
  // Recupera os dados do anúncio do localStorage
  const anuncio = JSON.parse(localStorage.getItem('anuncioSelecionado')); // Recupera o objeto salvo
  const usuarioAnunciante = JSON.parse(localStorage.getItem('usuarioAnunciante'));
  
  // Verifica se o anúncio existe
  if (anuncio) {
    // Preenche os campos da página com os dados do anúncio
    document.getElementById('title').textContent = anuncio.titulo;
    document.getElementById('price').textContent = `R\$ ${Number(anuncio.preco).toFixed(2)}`;
    document.getElementById('description').textContent = anuncio.descricao || 'Sem descrição disponível';
    document.getElementById('area').textContent = anuncio.area ? `${anuncio.area} m²` : 'Não especificado';
    document.getElementById('quartos').textContent = anuncio.quartos || 'Não especificado';
    document.getElementById('banheiros').textContent = anuncio.banheiros || 'Não especificado';
    document.getElementById('garagem').textContent = anuncio.garagem || 'Não especificado';
    document.getElementById('mobiliado').textContent = anuncio.mobiliado ? 'Sim' : 'Não';
    document.getElementById('endereco').textContent = anuncio.endereco || 'Não especificado';
    document.getElementById('cep').textContent = anuncio.cep || 'Não informado';

    document.getElementById('nome-anunciante').textContent = usuarioAnunciante.nome || 'Não informado';
    document.getElementById('email-anunciante').textContent = usuarioAnunciante.email || 'Não informado';
    document.getElementById('telefone-anunciante').textContent = usuarioAnunciante.telefone || 'Não informado';

    // Adiciona a imagem do anúncio (ou imagem padrão se não especificada)
    const imagemAnuncio = document.getElementById('imagem-anuncio');
    imagemAnuncio.src = anuncio.foto ? anuncio.foto : '../assets/imagem-padrao.jpg';
    imagemAnuncio.alt = `Imagem do anúncio: ${anuncio.titulo}`;
  } else {
    // Exibe uma mensagem se o anúncio não for encontrado no localStorage
    const containerConteudo = document.querySelector('.anuncio-detalhado');
    containerConteudo.innerHTML = '<p>Anúncio não encontrado.</p>';
  }
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

// Carregar informações do usuário logado no avatar
window.onload = function () {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuarioLogado) {
    window.location.href = "cadastro-login.html";
    return;
  }

  atualizarAvatarInicial(usuarioLogado);
};

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
  window.location.href = "/PaginaCadastrarAnuncio/cadastrar-anuncio.html";
}