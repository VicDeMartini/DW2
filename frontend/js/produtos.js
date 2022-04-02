/// Constrói um card de produto a partir de um objeto do backend.
const htmlBuilder = function (data) {
  attr = data.attributes;

  // Cria um componente de imagem apenas se houver uma imagem
  let image = (attr.imagem.data) ?
    imageUrl(attr.imagem)
    : "../imagens/product_default.png";

  const html = `
  <div class="card">
    <div class="header-content">
    <img src="${image}" class="image" />
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
const handleGet = function (data) {
  appendToElement("#produtos", data, htmlBuilder);
};

const handleRequest = function (response) {
  console.log(response);

  if (response.status == 200) {
    alert("Produto criado com sucesso!");
  } else {
    alert(
      `[${response.status}] ${response.statusText}`
    );
  }
};

/// Cria um produto a partir do formulário de cadastro.
function createProduct(event) {
  // Previne o comportamento padrão de submit do form
  event.preventDefault();

  // Cria o objeto de payload para criar um novo produto no backend
  const payload = {
    data: {
      nome: document.getElementById("nome").value,
      preco: parseFloat(document.getElementById("preco").value),
      quantidade_em_estoque: parseInt(
        document.getElementById("quantidade_em_estoque").value
      ),
      cor: document.getElementById("cor").value,
      descricao: document.getElementById("descricao").value,
    },
  };

  // Realiza o post
  postData("/produtos", payload, handleRequest);

  // Limpa todos os inputs.
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("quantidade_em_estoque").value = "";
  document.getElementById("cor").selectedIndex = -1;
  document.getElementById("descricao").value = "";
}
