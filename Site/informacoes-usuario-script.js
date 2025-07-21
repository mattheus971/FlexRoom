var modal = document.getElementById("editModal");
var currentField = '';

function openModal(field) {
  currentField = field;

  const camposModal = document.querySelectorAll('.modal-field');

  camposModal.forEach(campo => {
    const input = campo.querySelector('input');
    if (!input) return;

    if (input.id.toLowerCase().includes(field)) {
      campo.style.display = 'flex';
    } else {
      campo.style.display = 'none';
    }
  });

  var value = document.getElementById('informacao-' + field + '-usuario').textContent;

  switch(field) {
    case 'nome':
      document.getElementById('editInputNome').value = value;
      break;
    case 'email':
      document.getElementById('editInputEmail').value = value;
      break;
    case 'senha':
      document.getElementById('editInputSenha').value = value;
      break;
    case 'nascimento':
      document.getElementById('editInputNascimento').value = value;
      break;
    case 'telefone':
      document.getElementById('editInputTelefone').value = value;
      break;
  }

  modal.style.display = "block";
}
function fecharModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    fecharModal();
  }
}

// window.onload = function() {
//   const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

//   if (!usuarioLogado) {
//     window.location.href = 'cadastro-login.html';
//     return;
//   }

//   // Atualiza a saudação e as informações do usuário
//   atualizarAvatarInicial(usuarioLogado);

//   document.getElementById('saudacao-usuario').innerText = "Olá " + (usuarioLogado.nome || '');
//   document.getElementById('informacao-nome-usuario').innerText = usuarioLogado.nome || '';
//   document.getElementById('informacao-email-usuario').innerText = usuarioLogado.email || '';
//   document.getElementById('informacao-senha-usuario').innerText = usuarioLogado.senha || '';
//   document.getElementById('informacao-nascimento-usuario').innerText = usuarioLogado.nascimento || '';
//   document.getElementById('informacao-telefone-usuario').innerText = usuarioLogado.telefone || '';
// }

window.onload = function () {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuarioLogado) {
    window.location.href = 'cadastro-login.html';
    return;
  }

  // Atualiza a saudação e as informações do usuário
  atualizarAvatarInicial(usuarioLogado);

  document.getElementById('saudacao-usuario').innerText = "Olá " + (usuarioLogado.nome || '');
  document.getElementById('informacao-nome-usuario').innerText = usuarioLogado.nome || '';
  document.getElementById('informacao-email-usuario').innerText = usuarioLogado.email || '';
  document.getElementById('informacao-senha-usuario').innerText = usuarioLogado.senha || '';

  // Formata a data para DD-MM-AAAA
  if (usuarioLogado.nascimento) {
    const data = new Date(usuarioLogado.nascimento);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const ano = data.getFullYear();
    const nascimentoFormatado = `${dia}-${mes}-${ano}`;
    document.getElementById('informacao-nascimento-usuario').innerText = nascimentoFormatado;
  } else {
    document.getElementById('informacao-nascimento-usuario').innerText = '';
  }

  document.getElementById('informacao-telefone-usuario').innerText = usuarioLogado.telefone || '';
}



function salvarMudancas() {
  var newValue = '';

  switch(currentField) {
    case 'nome':
      newValue = document.getElementById('editInputNome').value;
      break;
    case 'email':
      newValue = document.getElementById('editInputEmail').value;
      break;
    case 'senha':
      newValue = document.getElementById('editInputSenha').value;
      break;
    case 'nascimento':
      newValue = document.getElementById('editInputNascimento').value;
      break;
    case 'telefone':
      newValue = document.getElementById('editInputTelefone').value;
      break;
  }

  if (!newValue) {
    alert("Por favor, preencha o campo.");
    return;
  }

  // Atualizando o campo na página
  document.getElementById('informacao-' + currentField + '-usuario').innerText = newValue;
  document.getElementById('campo-' + currentField).querySelector('h3').textContent = newValue;

  let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  usuarioLogado[currentField] = newValue;
  
  // Atualiza o usuário logado no localStorage
  localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

  // Atualiza a lista de usuários no localStorage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const index = usuarios.findIndex(u => u.id === usuarioLogado.id); // Busca o usuario pelo ID

  if (index !== -1) {
    usuarios[index] = usuarioLogado;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  fecharModal();
  atualizarAvatarInicial(usuarioLogado);
  document.getElementById('saudacao-usuario').innerText = "Olá " + (usuarioLogado.nome || '');
}

// JavaScript
function atualizarAvatarInicial(usuarioLogado) {
  if (usuarioLogado && usuarioLogado.nome) {
    const primeiraLetra = usuarioLogado.nome.trim().charAt(0).toUpperCase();
    const avatarDiv = document.getElementById('avatar-inicial-usuario');

    if (avatarDiv) {
      avatarDiv.textContent = primeiraLetra;
    }
  }
}

function logout() {
  const confirmarLogout = confirm("Tem certeza que deseja sair?");
  
  if (confirmarLogout) {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'cadastro-login.html';
  } else {
    // O usuário cancelou a operação, nenhuma ação será tomada
    console.log("Logout cancelado pelo usuário.");
  }
}

function excluirUsuario() {
    // Obtém os dados dos usuários atualmente no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    const cofirmacao=confirm('Tem certeza que deseja excluir sua conta?')

    if(!cofirmacao){
      return
    }
    
    // Verifica se há um usuário logado
    if (!usuarioLogado || !usuarioLogado.id) {
        alert('Nenhum usuário logado ou ID inválido!');
        return;
    }

    const usuarioId = usuarioLogado.id;

    // Filtra os usuários, removendo aquele com o ID correspondente
    const usuariosAtualizados = usuarios.filter(usuario => usuario.id !== usuarioId);

    // Atualiza o localStorage com a lista de usuários excluindo o usuário removido
    localStorage.setItem('usuarios', JSON.stringify(usuariosAtualizados));

    // Remove também o usuário logado
    localStorage.removeItem('usuarioLogado');

    alert('Usuário excluído com sucesso!');
    
    // Redireciona o usuário para a página inicial ou faz outra ação necessária
    window.location.href = '/home.html'; // Altere para o link desejado
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
      return;
  }

  // Tudo certo, redireciona para a página de cadastro do anúncio
  window.location.href = "./PaginaCadastrarAnuncio/cadastrar-anuncio.html";
}