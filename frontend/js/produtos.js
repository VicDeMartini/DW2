/// Função de callback passada para a função de fetchData.
/// Recebe os dados da API e repassa para a função que os adiciona na página.
const handleProdutosGet = function (data) {
  appendToElement("#produtos", data, productCardBuilder);
};

/// Lida com um GET request para a tabela de produtos
const handleRProdutosGet = function (data) {
  document.getElementById("tableBody").innerHTML = "";
  appendToElement("tableBody", data, productListBuilder);
};

/// Lida com o Update de um elemento
const handleProductUpdate = function (data) {
  document.getElementById("form-update").innerHTML = formBuilder(data);
  document.getElementById("form-update").addEventListener("submit", updateProduct);
};

/// Cria um produto a partir do formulário de cadastro
async function createProduct(event) {
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
  await postData("/produtos", payload, handleCreate);

  renderRProdutos();
}

/// Cria um produto a partir do formulário de cadastro.
async function updateProduct(event) {
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

   const id = document.getElementById("productId").value;

  // Realiza o put
  await putData(`/produtos/${id}`, payload, handlePut);

  renderRProdutos();
}

/// Remove um produto do banco de dados.
async function deleteProduct(productId) {
  if (confirm("Você realmente deseja remover este produto?") == true) {
    await deleteData(`/produtos/${productId}`, handleDelete);
    renderRProdutos();
  }
}

/// Renderiza o catálogo de produtos
function renderProdutos() {
  window.document.title = "Produtos";
  content.innerHTML = produtosHtml;
  fetchData("/produtos?populate=*", handleProdutosGet);
}

/// Renderiza a lista com todos os produtos
function renderRProdutos() {
  window.document.title = "Produtos";
  content.innerHTML = rProdutosHtml;
  fetchData("/produtos?populate=*", handleRProdutosGet);
}

/// Renderiza a página de inserção de um novo produto
function renderCProduto() {
  window.document.title = "Novo produto";
  content.innerHTML = cProdutoHtml;
  document
    .getElementById("form-cadastro")
    .addEventListener("submit", createProduct);
}

/// Renderiza a página de atualização de um produto
function renderUProduto(id) {
  window.document.title = "Atualizar produto";
  content.innerHTML = uProdutoHtml;
  fetchData(`/produtos/${id}`, handleProductUpdate);
}
