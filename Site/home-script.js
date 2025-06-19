window.onload = function() {
    // Recupera o usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
      // Se não encontrar usuário logado, redireciona para login
      window.location.href = "cadastro-login.html";
      return;
    }
    atualizarAvatarInicial(usuarioLogado)
    
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