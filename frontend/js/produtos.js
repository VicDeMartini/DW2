/// Constrói um card de produto a partir de um objeto do backend.
const productCardBuilder = function (data) {
  const attr = data.attributes;

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
const handleGet = function (data) {
  appendToElement("#produtos", data, productCardBuilder);
};
