// Variáveis globais para armazenar o campo que foi clicado e o modal
var modal = document.getElementById("editModal");
var currentField = '';

// Função para abrir o modal e preencher o campo correto
function openModal(field) {
  currentField = field;
  var fieldElement = document.getElementById('campo-' + field);
  var value = fieldElement.querySelector('h3').textContent;

  // Preenche o modal com a informação do campo
  document.getElementById('editInputNome').value = (field === 'nome') ? value : '';
  document.getElementById('editInputEmail').value = (field === 'email') ? value : '';
  document.getElementById('editInputSenha').value = (field === 'senha') ? value : '';
  document.getElementById('editInputNascimento').value = (field === 'nascimento') ? value : '';
  document.getElementById('editInputTelefone').value = (field === 'telefone') ? value : '';

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
