const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const titulo = document.getElementById('tituloCadAnuncio').value.trim();
  const tipoImovel = document.getElementById('tipoCadAnuncio').value;
  const descricao = document.getElementById('descricaoCadAnuncio').value.trim();
  const quartos = document.getElementById('quartosCadAnuncio').value;
  const banheiros = document.getElementById('banheirosCadAnuncio').value;
  const area = Number(document.getElementById('areaCadAnuncio').value);
  const garagem = document.getElementById('garagemCadAnuncio').value;
  const iptu = Number(document.getElementById('iptuCadAnuncio').value);
  const detalheImovel = document.getElementById('detalhesCadAnuncio').value;
  const detalheCondominio = document.getElementById('condominioCadAnuncio').value;
  const preco = Number(document.getElementById('precoCadAnuncio').value);
  const endereco = document.getElementById('enderecoCadAnuncio').value.trim();
  const cep = document.getElementById('cepCadAnuncio').value.trim();

  if (!titulo || !preco || !endereco || !cep) {
    alert('Por favor, preencha os campos obrigatórios: Título, Preço, Endereço e CEP.');
    return;
  }

  let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (!usuarioLogado) {
    alert('Nenhum usuário logado. Faça login antes de cadastrar anúncios.');
    window.location.href = 'login.html'; // ou sua página de login
    return;
  }

  if (!usuarioLogado.anuncios) {
    usuarioLogado.anuncios = [];
  }

  const novoAnuncio = {
    id: Date.now(), // id simples
    titulo,
    tipoImovel,
    descricao,
    quartos,
    banheiros,
    area,
    garagem,
    iptu,
    detalheImovel,
    detalheCondominio,
    preco,
    endereco,
    cep,
    fotos: [] // fotos para implementar depois
  };

  usuarioLogado.anuncios.push(novoAnuncio);

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios = usuarios.map(u => u.email === usuarioLogado.email ? usuarioLogado : u);

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

  alert('Anúncio cadastrado com sucesso!');
  form.reset();
});
