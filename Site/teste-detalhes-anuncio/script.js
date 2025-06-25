const anuncio = {
    imagem: "https://images.unsplash.com/photo-1560184897-2bc90d4765e2?auto=format&fit=crop&w=640&q=80",
    titulo: "Casa espaçosa para alugar no bairro Jardim das Flores",
    valorAluguel: 2500,
    descricao: "Linda casa com amplo jardim, sala integrada, cozinha americana, área de serviço e varanda. Próxima a escolas e mercados.",
    tamanho: 120,
    quartos: 3,
    banheiros: 2,
    garagens: 2,
    mobiliado: true,
    endereco: "Rua das Acácias, 123, Jardim das Flores, São Paulo - SP",
    cep: "04567-890",
    contato: {
      nome: "Carlos Silva",
      email: "carlos.silva@email.com",
      telefone: "(11) 98765-4321"
    }
  };
  
  function preencherAnuncio(data) {
    document.getElementById("house-image").src = data.imagem;
    document.getElementById("house-image").alt = data.titulo;
  
    document.getElementById("title").textContent = data.titulo;
    document.getElementById("price").textContent = `R$ ${data.valorAluguel.toLocaleString('pt-BR')}`;
    document.getElementById("description").textContent = data.descricao;
    document.getElementById("size").textContent = data.tamanho;
    document.getElementById("bedrooms").textContent = data.quartos;
    document.getElementById("bathrooms").textContent = data.banheiros;
    document.getElementById("garages").textContent = data.garagens;
    document.getElementById("furnished").textContent = data.mobiliado ? "Sim" : "Não";
    document.getElementById("address").textContent = data.endereco;
    document.getElementById("cep").textContent = data.cep;
  
    document.getElementById("contact-name").textContent = data.contato.nome;
    document.getElementById("contact-email").textContent = data.contato.email;
    document.getElementById("contact-phone").textContent = data.contato.telefone;
  }
  
  preencherAnuncio(anuncio);
  