// // Função para carregar os dados do anúncio para edição
// function carregarAnuncioParaEdicao() {
//     const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
//     const params = new URLSearchParams(window.location.search);
//     const anuncioId = Number(params.get('id')); // Pega o id da URL

//     if (!usuarioLogado || !anuncioId) {
//         alert("Anúncio não encontrado.");
//         window.location.href = "meus-anuncios.html";
//         return;
//     }

//     const anuncio = usuarioLogado.anuncios.find(a => a.id === anuncioId);
//     if (!anuncio) {
//         alert("Anúncio não encontrado.");
//         window.location.href = "meus-anuncios.html";
//         return;
//     }

//     // Preenche os campos com os dados do anúncio
//     document.getElementById('inputEditTitulo').value = anuncio.titulo;
//     document.getElementById('inputEditTipo').value = anuncio.tipoImovel;
//     document.getElementById('inputEditdescricao').value = anuncio.descricao;
//     document.getElementById('inputEditQuartos').value = anuncio.quartos;
//     document.getElementById('inputEditBanheiros').value = anuncio.banheiros;
//     document.getElementById('inputEditArea').value = anuncio.area;
//     document.getElementById('inputEditGaragem').value = anuncio.garagem;
//     document.getElementById('inputEditMobilia').value = anuncio.detalheImovel;
//     document.getElementById('inputEditCondominio').value = anuncio.detalheCondominio;
//     document.getElementById('precoCadPreco').value = anuncio.preco;
//     document.getElementById('inputEditEndereco').value = anuncio.endereco;
//     document.getElementById('inputEditCep').value = anuncio.cep;
// }

// // Função para salvar as alterações
// function salvarAlteracoes() {
//     const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
//     const params = new URLSearchParams(window.location.search);
//     const anuncioId = Number(params.get('id')); // Pega o id da URL

//     if (!usuarioLogado || !anuncioId) {
//         alert("Anúncio não encontrado.");
//         return;
//     }

//     const anuncioIndex = usuarioLogado.anuncios.findIndex(a => a.id === anuncioId);
//     if (anuncioIndex === -1) {
//         alert("Anúncio não encontrado.");
//         return;
//     }

//     const anuncioEditado = {
//         ...usuarioLogado.anuncios[anuncioIndex],
//         titulo: document.getElementById('inputEditTitulo').value,
//         tipoImovel: document.getElementById('inputEditTipo').value,
//         descricao: document.getElementById('inputEditdescricao').value,
//         quartos: document.getElementById('inputEditQuartos').value,
//         banheiros: document.getElementById('inputEditBanheiros').value,
//         area: document.getElementById('inputEditArea').value,
//         garagem: document.getElementById('inputEditGaragem').value,
//         detalheImovel: document.getElementById('inputEditMobilia').value,
//         detalheCondominio: document.getElementById('inputEditCondominio').value,
//         preco: document.getElementById('precoCadPreco').value,
//         endereco: document.getElementById('inputEditEndereco').value,
//         cep: document.getElementById('inputEditCep').value,
//         foto: document.getElementById('inputEditFoto').files[0] ? `/assets/${document.getElementById('inputEditFoto').files[0].name}` : usuarioLogado.anuncios[anuncioIndex].foto
//     };

//     usuarioLogado.anuncios[anuncioIndex] = anuncioEditado;

//     localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
//     alert("Anúncio editado com sucesso!");
//     window.location.href = "../PaginaMeusAnuncios/meus-anuncios.html";
// }

// // Função para excluir o anúncio
// function excluirAnuncio() {
//     const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
//     const params = new URLSearchParams(window.location.search);
//     const anuncioId = Number(params.get('id'));

//     if (!usuarioLogado || !anuncioId) {
//         alert("Anúncio não encontrado.");
//         return;
//     }

//     usuarioLogado.anuncios = usuarioLogado.anuncios.filter(anuncio => anuncio.id !== anuncioId);
//     localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
//     alert("Anúncio excluído com sucesso!");
//     window.location.href = "meus-anuncios.html";
// }

// // Quando a página carregar
// window.onload = function () {
//     // carregarAnuncioParaEdicao();
    
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         salvarAlteracoes();
//     });
// };






document.addEventListener('DOMContentLoaded', () => {
  // Recupera os dados do anúncio do localStorage
  const anuncio = JSON.parse(localStorage.getItem('anuncioSelecionado')); // Recupera o objeto salvo
  
  // Verifica se o anúncio existe
  if (anuncio) {
    // Preenche os campos da página com os dados do anúncio
    document.getElementById('inputEditTitulo').value = anuncio.titulo;
    document.getElementById('precoEditAnuncio').value = anuncio.preco;
    document.getElementById('inputEditDescricao').value = anuncio.descricao || 'Sem descrição disponível';
    document.getElementById('inputEditArea').value = anuncio.area ? anuncio.area: 'Não especificado';
    document.getElementById('inputEditQuartos').value = anuncio.quartos || 'Não especificado';
    document.getElementById('inputEditBanheiros').value = anuncio.banheiros || 'Não especificado';
    document.getElementById('inputEditGaragens').value = anuncio.garagem || 'Não especificado';
    document.getElementById('inputEditDetalhes').value = anuncio.mobiliado ? 'Sim' : 'Não';
    document.getElementById('inputEditEndereco').value = anuncio.endereco || 'Não especificado';
    document.getElementById('inputEditTipo').value = anuncio.tipoImovel || 'Não especificado';
    document.getElementById('inputEditCep').value = anuncio.cep || 'Não informado';


    
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