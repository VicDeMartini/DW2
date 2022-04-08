/// Constrói uma linha de uma tabela contendo os dados de um produto
const productListBuilder = function(data) {
  const attr = data.attributes;

    const html = `
        <tr class="product-row">
            <td>${attr.nome}</td>
            <td><img class="img-round" src="${imageUrl(attr.imagem)}" /></td>
            <td>${attr.descricao}</td>
            <td>${currencyConvert(attr.preco)}</td>

            <td>
                <a href="#" onclick="deleteProduct(${data.id})">Deletar</a>
                <a href="./UProduto.html?id=${data.id}">Atualizar</a>
            </td>
        </tr>
    `;

    return html;
}

/// Constrói o formulario de atualizacao de um produto
const formBuilder = function(data) {
  const attr = data.attributes;

    const html = `
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
    <input class="button" type="submit" id="Atualizar" />
    `;

    return html;
}

/// Lida com o Update de um elemento
const handleUpdate = function (data) {
  document.getElementById("form-update").innerHTML += formBuilder(data);
  document
  .getElementById("Atualizar")
  .addEventListener("click", updateProduct);
};

/// Lida com um GET request
const handleGet = function (data) {
    appendToElement("tableBody", data, productListBuilder);
  };

/// Lida com um POST request
const handleCreate = function (response) {
  if (response.status == 200) {
    alert("Elemento criado!");
  } else {
    alert(`[${response.status}] ${response.statusText}`);
  }
};

/// Lida com um DELETE request
const handleDelete = function (response) {
  if (response.status == 200) {
    alert("Elemento removido!");
    window.location.reload();
  } else {
    alert(`[${response.status}] ${response.statusText}`);
  }
};

/// Lida com um PUT request
const handlePut = function (response) {
  if (response.status == 200) {
    alert("Elemento atualizado!");
    window.location.reload();
  } else {
    alert(`[${response.status}] ${response.statusText}`);
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
  postData("/produtos", payload, handleCreate);

  // Limpa todos os inputs
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("quantidade_em_estoque").value = "";
  document.getElementById("cor").selectedIndex = -1;
  document.getElementById("descricao").value = "";
}

/// Cria um produto a partir do formulário de cadastro.
function updateProduct(event) {

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

  // Acessa o id do produto na url da pagina
  url = new URL(window.location.href)

  // Realiza o put
  putData("/produtos/" + url.searchParams.get("id"), payload, handlePut);
}

/// Remove um produto do banco de dados.
function deleteProduct(productId) {
  deleteData(`/produtos/${productId}`, handleDelete);
}

