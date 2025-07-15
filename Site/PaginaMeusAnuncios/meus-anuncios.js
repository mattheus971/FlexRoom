// window.onload = function () {
//     const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

//     // Se não houver usuário logado, redireciona para a página de login
//     if (!usuarioLogado) {
//         alert("Você precisa estar logado para ver seus anúncios.");
//         window.location.href = "cadastro-login.html";
//         return;
//     }

//     // Se o usuário não tiver anúncios, exibe uma mensagem
//     if (!usuarioLogado.anuncios || usuarioLogado.anuncios.length === 0) {
//         document.querySelector('.container-anuncios').innerHTML = "<p>Você ainda não tem anúncios cadastrados.</p>";
//         return;
//     }

//     // Cria os cards dos anúncios
//     const container = document.querySelector('.container-anuncios');
//     usuarioLogado.anuncios.forEach(anuncio => {
//         const anuncioElement = document.createElement('div');
//         anuncioElement.classList.add('anuncio');
//         anuncioElement.setAttribute('data-id', anuncio.id);

//         anuncioElement.innerHTML = `
        
//             <div class="anuncio">
//     <div class="imagem-anuncio">
//         <img src="${anuncio.imagemUrl || 'default-image.jpg'}" alt="${anuncio.titulo}" />
//     </div>
//     <div class="informacoes-anuncio">
//         <h2>${anuncio.titulo}</h2>
//         <h2>R$ ${anuncio.preco}</h2>
//     </div>
//     <div class="icone-excluir">
//         <button onclick="deletarAnuncio(${anuncio.id})">
//             <i class="fa fa-trash"></i> <!-- Ícone de lixeira -->
//         </button>
//     </div>
// </div>
//         `;

//         container.appendChild(anuncioElement);
//     });
// };

// // Função para editar o anúncio
// function editarAnuncio(id) {
//     // Redireciona para uma página de edição de anúncio, passando o id como parâmetro (implementação futura)
//     window.location.href = `editar-anuncio.html?id=${id}`;
// }

// // Função para excluir um anúncio
// function deletarAnuncio(id) {
//     const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

//     // Remove o anúncio com o id especificado
//     usuarioLogado.anuncios = usuarioLogado.anuncios.filter(anuncio => anuncio.id !== id);

//     // Atualiza os dados do usuário no localStorage
//     let usuarios = JSON.parse(localStorage.getItem('usuarios'));
//     usuarios = usuarios.map(u => u.email === usuarioLogado.email ? usuarioLogado : u);
//     localStorage.setItem('usuarios', JSON.stringify(usuarios));

//     // Encontra o card do anúncio a ser removido
//     const anuncioElement = document.querySelector(`[data-id="${id}"]`);
//     if (anuncioElement) {
//         anuncioElement.remove();  // Remove o card do DOM
//     }

//     // Atualiza os dados no localStorage
//     alert('Anúncio excluído com sucesso!');
// }

window.onload = function () {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    // Se não houver usuário logado, redireciona para a página de login
    if (!usuarioLogado) {
        alert("Você precisa estar logado para ver seus anúncios.");
        window.location.href = "cadastro-login.html";
        return;
    }

    // Se o usuário não tiver anúncios, exibe uma mensagem
    if (!usuarioLogado.anuncios || usuarioLogado.anuncios.length === 0) {
        document.querySelector('.container-anuncios').innerHTML = "<p>Você ainda não tem anúncios cadastrados.</p>";
        return;
    }

    // Cria os cards dos anúncios
    const container = document.querySelector('.container-anuncios');
    usuarioLogado.anuncios.forEach(anuncio => {
        const anuncioElement = document.createElement('div');
        anuncioElement.classList.add('anuncio');
        anuncioElement.setAttribute('data-id', anuncio.id);

        anuncioElement.innerHTML = `
            <div class="imagem-anuncio">
                <img src="../assets/imagem-casa-placeholder.png" alt="imagem-placeholder">
            </div>
            <div class="informacoes-anuncio">
                <h3>${anuncio.titulo}</h3>
                <h3>R$ ${anuncio.preco}</h3>
            </div>
            <div class="icone-excluir">
                <button onclick="deletarAnuncio(${anuncio.id})">
                    <i class="fa fa-trash"></i> <!-- Ícone de lixeira -->
                </button>
            </div>
        `;

        container.appendChild(anuncioElement);
    });
};

// Função para editar o anúncio
function editarAnuncio(id) {
    // Redireciona para uma página de edição de anúncio, passando o id como parâmetro (implementação futura)
    window.location.href = `editar-anuncio.html?id=${id}`;
}

// Função para excluir um anúncio
function deletarAnuncio(id) {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    // Remove o anúncio com o id especificado
    usuarioLogado.anuncios = usuarioLogado.anuncios.filter(anuncio => anuncio.id !== id);

    // Atualiza os dados do usuário no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios = usuarios.map(u => u.email === usuarioLogado.email ? usuarioLogado : u);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Encontra o card do anúncio a ser removido
    const anuncioElement = document.querySelector(`[data-id="${id}"]`);
    if (anuncioElement) {
        anuncioElement.remove();  // Remove o card do DOM
    }

    // Atualiza os dados no localStorage
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));  // Atualiza o usuário logado após a exclusão

    alert('Anúncio excluído com sucesso!');
}

