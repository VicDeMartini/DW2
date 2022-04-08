/// Cria uma compra
async function createCompra(produtoId) {

    // Cria o objeto de payload para criar um novo produto no backend
    const payload = {
      data: {
        produtos: produtoId,
        usuario: 1
      },
    };
  
    // Realiza o post
    await postData("/compras", payload, handleCreate);
  }


/// Renderiza a lista com todos as compras
function renderRCompras() {
  window.document.title = "Compras";
  content.innerHTML = rComprasHtml;
  fetchData("/compras?populate=*", handleRComprasGet);
}

/// Lida com um GET request para a tabela de compras
const handleRComprasGet = function (data) {
  document.getElementById("tableBody").innerHTML = "";
  appendToElement("tableBody", data, compraListBuilder);
};
