/// Cria uma compra
async function createCompra(produtoId) {

    // Cria o objeto de payload para criar um novo produto no backend
    const payload = {
      data: {
        produto: parseInt(produtoId),
        usuario: 1
      },
    };
  
    // Realiza o post
    await postData("/compras", payload, handleCreate);
  }