document.addEventListener('DOMContentLoaded', () => {
  // Recupera os dados do anúncio e do usuário (anunciante) do localStorage
  const anuncio = JSON.parse(localStorage.getItem('anuncioSelecionado'));
  const usuarioAnunciante = JSON.parse(localStorage.getItem('usuarioAnunciante'));

  if (anuncio && usuarioAnunciante) {
    // Preenche os campos da página com os dados do anúncio
    document.getElementById('title').textContent = anuncio.titulo;
    document.getElementById('house-image').src = anuncio.imagemUrl;
    document.getElementById('price').textContent = `R$ ${anuncio.preco}`;
    document.getElementById('description').textContent = anuncio.descricao || 'Sem descrição disponível';
    document.getElementById('area').textContent = anuncio.area || 'Não especificado';
    document.getElementById('quartos').textContent = anuncio.quartos || 'Não especificado';
    document.getElementById('banheiros').textContent = anuncio.banheiros || 'Não especificado';
    document.getElementById('garagem').textContent = anuncio.garagem || 'Não especificado';
    document.getElementById('mobiliado').textContent = anuncio.mobiliado ? 'Sim' : 'Não';
    document.getElementById('endereco').textContent = anuncio.endereco || 'Não especificado';
    document.getElementById('cep').textContent = anuncio.cep || 'Não informado';

    // Preenche os dados do anunciante (usuário)
    document.getElementById('nome-anunciante').textContent = usuarioAnunciante.nome || 'Não informado';
    document.getElementById('email-anunciante').textContent = usuarioAnunciante.email || 'Não informado';
    document.getElementById('telefone-anunciante').textContent = usuarioAnunciante.telefone || 'Não informado';
  } else {
    // Se os dados não forem encontrados, exibe uma mensagem
    document.querySelector('.container-conteudo').innerHTML = '<p>Anúncio não encontrado.</p>';
  }
});
