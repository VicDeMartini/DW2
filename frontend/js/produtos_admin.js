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
                <a href="produto/${data.id}">Atualizar</a>
            </td>
        </tr>
    `;

    return html;
}

/// Lida com um GET request
const handleGet = function (data) {
    appendToElement("tableBody", data, productListBuilder);
  };

/// Lida com um POST request
const handleCreate = function (response) {
  if (response.status == 200) {
    alert("Produto criado com sucesso!");
  } else {
    alert(`[${response.status}] ${response.statusText}`);
  }
};

/// Lida com um DELETE request
const handleDelete = function (response) {
  if (response.status == 200) {
    alert("Produto removido!");
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

/// Remove um produto do banco de dados.
function deleteProduct(productId) {
  deleteData(`/produtos/${productId}`, handleDelete);
}

