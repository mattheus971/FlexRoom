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

window.onload = function() {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuarioLogado) {
    window.location.href = 'cadastro-login.html';
    return;
  }

  atualizarAvatarInicial(usuarioLogado);

  document.getElementById('saudacao-usuario').innerText = "Olá " + (usuarioLogado.nome || '');
  document.getElementById('informacao-nome-usuario').innerText = usuarioLogado.nome || '';
  document.getElementById('informacao-email-usuario').innerText = usuarioLogado.email || '';
  document.getElementById('informacao-senha-usuario').innerText = usuarioLogado.senha || '';
  document.getElementById('informacao-nascimento-usuario').innerText = usuarioLogado.nascimento || '';
  document.getElementById('informacao-telefone-usuario').innerText = usuarioLogado.telefone || '';
}

function salvarMudancas() {
  var newValue = '';

  switch(currentField) {
    case 'nome':
      newValue = document.getElementById('editInputNome').value
      break;
    case 'email':
      newValue = document.getElementById('editInputEmail').value
      break;
    case 'senha':
      newValue = document.getElementById('editInputSenha').value
      break;
    case 'nascimento':
      newValue = document.getElementById('editInputNascimento').value
      break;
    case 'telefone':
      newValue = document.getElementById('editInputTelefone').value
      break;
  }

  if (!newValue) {
    alert("Por favor, preencha o campo.");
    return;
  }

  document.getElementById('informacao-' + currentField + '-usuario').innerText = newValue;

  document.getElementById('campo-' + currentField).querySelector('h3').textContent = newValue;

  let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  usuarioLogado[currentField] = newValue;

  localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const index = usuarios.findIndex(u => u.email === usuarioLogado.email);

  if (index !== -1) {
    usuarios[index] = usuarioLogado; 
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  fecharModal();
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
  localStorage.removeItem('usuarioLogado');
  window.location.href = 'cadastro-login.html';
}