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
  window.location.href = "cadastrar-anuncio.html";
}
