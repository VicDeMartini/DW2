const API_URL = "http://localhost:1337/api";
const MEDIA_URL = "http://localhost:1337";

/// Faz um GET request no backend e retorna o resultado para a função de callback.
/// page: endpoit utilizado na API
/// callback: função de callback a ser chamada com a resposta da API
function fetchData(page, callback) {
  fetch(API_URL + page)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data.data);
    });
}

/// Faz um POST request no backend, recebendo como entrada um payload e page [Adiciona um elemento no banco]
/// payload: um objeto do tipo a ser criado contendo todos os seus atributos
/// page: endpoint utilizado na API
/// callback: função de callback a ser chamada com a resposta da API
function postData(page, payload, callback) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  // Realiza o POST
  fetch(API_URL + page, options).then((response) => {
    callback(response);
  });
}

/// Faz um DELETE request no backend, recebendo como entrada um page [Delete um elemento do banco]
/// page: endpoint utilizado na API, contendo o ID do elemento a ser deletado
/// callback: função de callback a ser chamada com a resposta da API
function deleteData(page, callback) {
  const options = {
    method: "DELETE",
  };

  // Realiza o DELETE
  fetch(API_URL + page, options).then((response) => {
    callback(response);
  });
}

/// Faz um PUT request no backend, recebendo como entrada um payload e a página, atualizando um elemento do banco.
/// payload: um array de array que contém um único elemento data com todos os atributos
/// page: endpoint utilizado na API, contendo o ID do elemento a ser atualizado
/// callback: função de callback a ser chamada com a resposta da API
function putData(page, payload, callback) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  // Realiza o PUT
  fetch(API_URL + page + id, options).then((response) => {
    callback(response);
  });
}

/// Popula um elemento HTML de forma iterativa.
/// Recebe um ID de elemento, os dados a serem preenchidos e uma função para construir o HTML.
function appendToElement(elementId, data, htmlBuilder) {
  for (i = 0; i < data.length; i++) {
    document.getElementById(elementId).innerHTML += htmlBuilder(data[i]);
  }
}

/// Retorna a URL completa de uma imagem hospedada no backend.
function imageUrl(image) {
  return MEDIA_URL + image.data.attributes.url;
}

/// [Função em construção]
/// Converte Markdown para HTML.
function mdConvert(data) {
  if (data != null) return data.replaceAll("\n", "<br>");
}

/// Converte um valor inteiro para formato de moeda BRL.
function currencyConvert(data) {
  if (!String(data).includes(".")) {
    return `R$ ${data},00`;
  }

  return `R$ ${data.replaceAll(".", ",")}`;
}
