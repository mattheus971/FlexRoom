// Variáveis globais para armazenar o campo que foi clicado e o modal
var modal = document.getElementById("editModal");
var currentField = '';

// Função para abrir o modal e preencher o campo correto
function openModal(field) {
  currentField = field;

  // Pega todos os blocos modal-field
  const camposModal = document.querySelectorAll('.modal-field');

  camposModal.forEach(campo => {
    const input = campo.querySelector('input');
    if (!input) return;

    // Verifica se o id do input corresponde ao campo que deve ser editado
    if (input.id.toLowerCase().includes(field)) {
      campo.style.display = 'block';
    } else {
      campo.style.display = 'none';
    }
  });

  // Pega o valor atual do campo na página para preencher o input
  var value = document.getElementById('informacao-' + field + '-usuario').textContent;

  // Preenche o input correspondente com o valor atual
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

  // Exibe o modal
  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = "none";
}

// Função para salvar as alterações feitas no modal
function saveChanges() {
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

  // Atualiza o campo correspondente com o novo valor
  document.getElementById('campo-' + currentField).querySelector('h3').textContent = newValue;

  // Fecha o modal
  closeModal();
}

// Quando o usuário clicar fora do modal, ele também será fechado
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

window.onload = function() {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuarioLogado) {
    window.location.href = 'cadastro-login.html';
    return;
  }

  // Atualiza os campos com os dados do usuário
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

  // Atualiza o campo no HTML
  document.getElementById('informacao-' + currentField + '-usuario').innerText = newValue;

  // Atualiza o campo correspondente na tela principal também (se houver)
  document.getElementById('campo-' + currentField).querySelector('h3').textContent = newValue;

  // Recupera o usuário logado do localStorage
  let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

  // Atualiza a propriedade modificada do usuário logado
  usuarioLogado[currentField] = newValue;

  // Salva novamente o usuário logado no localStorage
  localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

  // Atualiza o array geral de usuários
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Encontra o índice do usuário logado no array (usando o email original, ou outro identificador)
  const index = usuarios.findIndex(u => u.email === usuarioLogado.email);

  if (index !== -1) {
    usuarios[index] = usuarioLogado;  // substitui pelo usuário atualizado
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  alert("Informações atualizadas com sucesso!");

  // Fecha o modal
  closeModal();
}