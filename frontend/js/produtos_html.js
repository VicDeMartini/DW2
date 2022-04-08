/// HTML da página de catálogo de produtos
const produtosHtml = `
<h1 class="title-page">Catálogo de produtos</h1>
<div id="#produtos" class="card-container"></div>
`;

/// HTML da página de lista de produtos
const rProdutosHtml = `
<div class="header">
  <h1>Produtos</h1>
</div>

<div class="table-cliente">
  <table border="1">
    <thead>
      <tr>
        <th scope="col">NOME</th>
        <th scope="col">IMAGEM</th>
        <th scope="col">DESCRIÇÃO</th>
        <th scope="col">PREÇO</th>
        <th scope="col">AÇÕES</th>
      </tr>
    </thead>
    <tbody id="tableBody"></tbody>
  </table>
</div>

<div class="button-new-create">
  <a href="#" onclick="renderCProduto()" class="input-new-create">Novo produto</a>
</div>
`;

/// HTML da página de lista de compras
const rComprasHtml = `
<div class="header">
  <h1>Compras</h1>
</div>

<div class="table-cliente">
  <table border="1">
    <thead>
      <tr>
        <th scope="col">NOME</th>
        <th scope="col">E-MAIL</th>
        <th scope="col">PRODUTO</th>
        <th scope="col">PREÇO</th>
        <th scope="col">DATA</th>
      </tr>
    </thead>
    <tbody id="tableBody"></tbody>
  </table>
</div>
`;

/// HTML da página de criação de produtos
const cProdutoHtml = `
<div class="header">
    <h1><strong> Criar novo produto </strong></h1>
</div>

<form class="form-cliente" id="form-cadastro">
    <label for="nome">Nome:</label>
    <input required type="text" id="nome" name="nome" />
    <br />

    <label for="preco">Preço:</label>
    <input required type="number" step="0.01" id="preco" name="preco" />
    <br />

    <label for="quantidade_em_estoque">Estoque:</label>
    <input
    required
    type="number"
    id="quantidade_em_estoque"
    name="quantidade_em_estoque"
    />
    <br />

    <label for="cor">Cor:</label>
    <select id="cor" name="cor">
    <option value="Azul">Azul</option>
    <option value="Amarelo">Amarelo</option>
    <option value="Verde">Verde</option>
    <option value="Preto">Preto</option>
    <option value="RGB">RGB</option>
    </select>
    <br />

    <label for="descricao">Descrição:</label>
    <textarea required name="descricao" id="descricao" type="text"></textarea>
    <br />
    <input class="button" type="submit" />
</form>
`;

/// HTML da página de atualização de produtos
const uProdutoHtml = `
<div class="header">
    <h1><strong> Atualizar Produto </strong></h1>
</div>

<form id="form-update"></form>
`;

/// Constrói um card de produto a partir de um objeto do backend
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
        <div class="buy-link"><a href="#" onclick="createCompra(${data.id})">Comprar</a></div>
    </div>`;

  return html;
};

/// Constrói uma linha de uma tabela contendo os dados de um produto
const productListBuilder = function (data) {
  const attr = data.attributes;

  const html = `
          <tr class="product-row">
              <td>${attr.nome}</td>
              <td><img class="img-round" src="${imageUrl(attr.imagem)}" /></td>
              <td>${attr.descricao}</td>
              <td>${currencyConvert(attr.preco)}</td>
  
              <td>
                  <a href="#" onclick="deleteProduct(${data.id})">Deletar</a>
                  <a href="#" onclick="renderUProduto(${data.id})">Atualizar</a>
              </td>
          </tr>
      `;

  return html;
};

/// Constrói uma linha de uma tabela contendo os dados de um produto
const compraListBuilder = function (data) {
  const produto = data.attributes.produtos.data[0].attributes;
  const usuario = data.attributes.usuario.data.attributes;
  const compraDate = new Date(data.attributes.createdAt)

  const html = `
          <tr class="product-row">
              <td>${usuario.nome}</td>
              <td>${usuario.email}</td>
              <td>${produto.nome}</td>
              <td>${currencyConvert(produto.preco)}</td>
              <td>${compraDate.getDay() + "-" + compraDate.getMonth() + "-" + compraDate.getFullYear()}</td>
          </tr>
      `;

  return html;
};

/// Constrói o formulario de atualizacao de um produto
const formBuilder = function (data) {
  const attr = data.attributes;

  const html = `
    <input type="hidden" id="productId" value="${data.id}">
    <label for="nome">Nome:</label>
    <input required type="text" id="nome" name="nome" value="${attr.nome}" />
    <br />

    <label for="preco">Preço:</label>
    <input required type="number" step="0.01" id="preco" name="preco" value="${attr.preco}" />
    <br />

    <label for="quantidade_em_estoque">Estoque:</label>
    <input
    required
    type="number"
    id="quantidade_em_estoque"
    name="quantidade_em_estoque"
    value="${attr.quantidade_em_estoque}"
    />
    <br />

    <!-- Drop down -->
    <label for="cor">Cor:</label>
    <select id="cor" name="cor">
    <option value="Azul">Azul</option>
    <option value="Amarelo">Amarelo</option>
    <option value="Verde">Verde</option>
    <option value="Preto">Preto</option>
    <option value="RGB">RGB</option>
    <option selected="selected" value="${attr.cor}">${attr.cor}</option>
    </select>
    <br />

    <label for="descricao">Descrição:</label>
    <textarea required name="descricao" id="descricao" type="text">${attr.descricao}</textarea>
    <br />
    <input class="button" type="submit" />
    `;

  return html;
};
