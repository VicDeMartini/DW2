/// Constrói um card de produto a partir de um objeto do backend.
const htmlBuilder = function (data) {
  attr = data.attributes;

  console.log(data);

  const html = `
  <div class="card">
    <div class="header-content">
      <img src="${imageUrl(attr.imagem)}" class="image" />
      <div class="title">${attr.nome}</div>
    </div>
    <div class="description">${mdConvert(attr.descricao)}</div>
      <div class="price">${currencyConvert(attr.preco)}</div>
      <div class="buy-link"><a href="produto/${data.id}">Comprar</a></div>
  </div>`;

  return html;
};

/// Função de callback passada para a função de fetchData.
/// Recebe os dados da API e repassa para a função que os adiciona na página.
const handleData = function (data) {
  appendToElement("#produtos", data, htmlBuilder);
};

// Adiciona um listener que chama a função de fetchData assim que a página é carregada.
window.addEventListener("load", fetchData("/produtos?populate=*", handleData));

// Adiciona um listener no botão de cadastro
document.getElementById("#cadastrar").addEventListener("click", function(){

  // Criado o objeto de payload para criar um novo produto no backend.
  const payload = {
    data: {
      nome: document.getElementById("nome").value,
      preco: parseInt(document.getElementById("preco").value),
      quantidade_em_estoque: parseInt(document.getElementById("quantidade_em_estoque").value),
      cor: document.getElementById("cor").value,
      descricao: document.getElementById("descricao").value
    }
  }

  // Realiza o post.
  postData("/produtos", payload);
  
  // Limpa todos os inputs.
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("quantidade_em_estoque").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("descricao").value = "";
});