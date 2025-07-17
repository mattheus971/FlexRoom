const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const titulo = document.getElementById("tituloCadAnuncio").value.trim();
  const tipoImovel = document.getElementById("tipoCadAnuncio").value;
  const descricao = document.getElementById("descricaoCadAnuncio").value.trim();
  const quartos = document.getElementById("quartosCadAnuncio").value;
  const banheiros = document.getElementById("banheirosCadAnuncio").value;
  const area = Number(document.getElementById("areaCadAnuncio").value);
  const garagem = document.getElementById("garagemCadAnuncio").value;
  const detalheImovel = document.getElementById("detalhesCadAnuncio").value;
  // const detalheCondominio = document.getElementById("condominioCadAnuncio").value;
  const preco = Number(document.getElementById("precoCadAnuncio").value);
  const endereco = document.getElementById("enderecoCadAnuncio").value.trim();
  const cep = document.getElementById("cepCadAnuncio").value.trim();

  // Verifica campos obrigatórios
  if (!titulo || !preco || !endereco || !cep) {
    alert("Por favor, preencha os campos obrigatórios: Título, Preço, Endereço e CEP.");
    return;
  }

  // Captura a foto carregada
  const fotoInput = document.getElementById("fotoCadAnuncio");
  const arquivo = fotoInput.files[0];

  if (!arquivo) {
    alert("Por favor, selecione uma imagem para o anúncio.");
    return;
  }

  // Cria um caminho relativo para a foto (necessita que a foto exista na pasta /assets/)
  const foto = `/assets/${arquivo.name}`;

  // Verifica usuário logado
  let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuarioLogado) {
    alert("Nenhum usuário logado. Faça login antes de cadastrar anúncios.");
    window.location.href = "login.html"; // Redireciona para o login
    return;
  }

  if (!usuarioLogado.anuncios) {
    usuarioLogado.anuncios = [];
  }

  // Cria o objeto do novo anúncio
  const novoAnuncio = {
    id: Date.now(), // ID único baseado no timestamp
    titulo,
    tipoImovel,
    descricao,
    quartos,
    banheiros,
    area,
    garagem,
    detalheImovel,
    // detalheCondominio,
    preco,
    endereco,
    cep,
    foto, // Caminho único para a imagem
  };

  // Salva o anúncio no localStorage
  usuarioLogado.anuncios.push(novoAnuncio);

  // Atualiza os dados no localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios = usuarios.map((u) =>
    u.email === usuarioLogado.email ? usuarioLogado : u
  );

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

  alert("Anúncio cadastrado com sucesso!");
  form.reset();
  window.location.href = "../home.html"; // Redireciona para a página principal
});

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


// ANUNCIOS SEM FOTO
// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const titulo = document.getElementById('tituloCadAnuncio').value.trim();
//   const tipoImovel = document.getElementById('tipoCadAnuncio').value;
//   const descricao = document.getElementById('descricaoCadAnuncio').value.trim();
//   const quartos = document.getElementById('quartosCadAnuncio').value;
//   const banheiros = document.getElementById('banheirosCadAnuncio').value;
//   const area = Number(document.getElementById('areaCadAnuncio').value);
//   const garagem = document.getElementById('garagemCadAnuncio').value;
//   const detalheImovel = document.getElementById('detalhesCadAnuncio').value;
//   const detalheCondominio = document.getElementById('condominioCadAnuncio').value;
//   const preco = Number(document.getElementById('precoCadAnuncio').value);
//   const endereco = document.getElementById('enderecoCadAnuncio').value.trim();
//   const cep = document.getElementById('cepCadAnuncio').value.trim();

//   if (!titulo || !preco || !endereco || !cep) {
//     alert('Por favor, preencha os campos obrigatórios: Título, Preço, Endereço e CEP.');
//     return;
//   }

//   let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
//   if (!usuarioLogado) {
//     alert('Nenhum usuário logado. Faça login antes de cadastrar anúncios.');
//     window.location.href = 'login.html'; // ou sua página de login
//     return;
//   }

//   if (!usuarioLogado.anuncios) {
//     usuarioLogado.anuncios = [];
//   }

//   const novoAnuncio = {
//     id: Date.now(), // id simples
//     titulo,
//     tipoImovel,
//     descricao,
//     quartos,
//     banheiros,
//     area,
//     garagem,
//     detalheImovel,
//     detalheCondominio,
//     preco,
//     endereco,
//     cep,
//     foto
//   };

//   usuarioLogado.anuncios.push(novoAnuncio);

//   let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
//   usuarios = usuarios.map(u => u.email === usuarioLogado.email ? usuarioLogado : u);

//   localStorage.setItem('usuarios', JSON.stringify(usuarios));
//   localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

//   alert('Anúncio cadastrado com sucesso!');
//   form.reset();
//   window.location.href = '../home.html';
// });

//   // Função para mostrar a inicial do nome do usuário no avatar
//   function atualizarAvatarInicial(usuarioLogado) {
//     if (usuarioLogado && usuarioLogado.nome) {
//       const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
//       const avatarDiv = document.getElementById('avatar-inicial-usuario');
      
//       if (avatarDiv) {
//         avatarDiv.textContent = primeiraLetra;
//       }
//     }
//   }

//   // Quando a página carregar
//   window.onload = function () {
//     const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
//     if (!usuarioLogado) {
//       alert("Você precisa estar logado para acessar esta página.");
//       window.location.href = "../cadastro-login.html";
//       return;
//     }

//     atualizarAvatarInicial(usuarioLogado);
//   }



// ANUNCIO COM FOTOS BASE64
// const form = document.querySelector('form');
// //Função de cadastrar anuncio COM FOTO
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const titulo = document.getElementById('tituloCadAnuncio').value.trim();
//   const tipoImovel = document.getElementById('tipoCadAnuncio').value;
//   const descricao = document.getElementById('descricaoCadAnuncio').value.trim();
//   const quartos = document.getElementById('quartosCadAnuncio').value;
//   const banheiros = document.getElementById('banheirosCadAnuncio').value;
//   const area = Number(document.getElementById('areaCadAnuncio').value);
//   const garagem = document.getElementById('garagemCadAnuncio').value;
//   const detalheImovel = document.getElementById('detalhesCadAnuncio').value;
//   const detalheCondominio = document.getElementById('condominioCadAnuncio').value;
//   const preco = Number(document.getElementById('precoCadAnuncio').value);
//   const endereco = document.getElementById('enderecoCadAnuncio').value.trim();
//   const cep = document.getElementById('cepCadAnuncio').value.trim();

//   if (!titulo || !preco || !endereco || !cep) {
//     alert('Por favor, preencha os campos obrigatórios: Título, Preço, Endereço e CEP.');
//     return;
//   }

//   let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
//   if (!usuarioLogado) {
//     alert('Nenhum usuário logado. Faça login antes de cadastrar anúncios.');
//     window.location.href = 'login.html'; // ou sua página de login
//     return;
//   }

//   if (!usuarioLogado.anuncios) {
//     usuarioLogado.anuncios = [];
//   }

//   // Captura as fotos selecionadas
//   const fotosInput = document.getElementById('fotosCadAnuncio');
//   const fotos = fotosInput.files; // Pega todos os arquivos selecionados

//   let fotosArray = [];
//   if (fotos.length > 0) {
//     // Converte as fotos para um array de URLs temporárias (base64 ou FileReader)
//     Array.from(fotos).forEach(foto => {
//       const reader = new FileReader();

//       reader.onloadend = function() {
//         fotosArray.push(reader.result); // Adiciona a foto no array

//         if (fotosArray.length === fotos.length) { // Quando todas as imagens forem carregadas
//           const novoAnuncio = {
//             id: Date.now(), // id simples
//             titulo,
//             tipoImovel,
//             descricao,
//             quartos,
//             banheiros,
//             area,
//             garagem,
//             detalheImovel,
//             detalheCondominio,
//             preco,
//             endereco,
//             cep,
//             fotos: fotosArray // Armazena as fotos aqui
//           };

//           usuarioLogado.anuncios.push(novoAnuncio);

//           let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
//           usuarios = usuarios.map(u => u.email === usuarioLogado.email ? usuarioLogado : u);

//           localStorage.setItem('usuarios', JSON.stringify(usuarios));
//           localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

//           alert('Anúncio cadastrado com sucesso!');
//           form.reset();
//           window.location.href = '../home.html';
//         }
//       };

//       reader.readAsDataURL(foto); // Converte a imagem para base64
//     });
//   } else {
//     alert('Por favor, adicione pelo menos uma foto.');
//   }
// });

// // Função para mostrar a inicial do nome do usuário no avatar
// function atualizarAvatarInicial(usuarioLogado) {
//   if (usuarioLogado && usuarioLogado.nome) {
//     const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
//     const avatarDiv = document.getElementById('avatar-inicial-usuario');
    
//     if (avatarDiv) {
//       avatarDiv.textContent = primeiraLetra;
//     }
//   }
// }

// // Quando a página carregar
// window.onload = function () {
//   const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  
//   if (!usuarioLogado) {
//     alert("Você precisa estar logado para acessar esta página.");
//     window.location.href = "../cadastro-login.html";
//     return;
//   }

//   atualizarAvatarInicial(usuarioLogado);
// }
