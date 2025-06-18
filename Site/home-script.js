window.onload = function() {
    // Recupera o usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (!usuarioLogado) {
      // Se não encontrar usuário logado, redireciona para login
      window.location.href = "cadastro-login.html";
      return;
    }
    console.log('Email do usuário logado:', usuarioLogado.nome);
}
