const API_URL = "http://localhost:1337/api";
const MEDIA_URL = "http://localhost:1337";

/// Faz um GET request no backend e retorna o resultado para a função de callback.
function fetchGet(page, callback) {
  fetch(API_URL + page)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data.data);
    });
}

// Faz um POST request no backend, recebendo como entrada um payload e page [Adiciona um elemento no banco]
// payload: um array de array que contém um unico elemento data com todos os atributos
// page: endpoint utilizado da api
function fetchPost(page, payload){

  // Define as opções do método fetch.
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };

  // Realiza o POST
  // OBS: .then() é uma object promise do javacript, para a execucao assincrona de rotinas.
  fetch(API_URL + page, options)
    .then((response) =>{
      if(response.status == 200) // Demonstra sucesso ou falha.
        alert("Sucesso Post!")
      else
        alert("Falha Post!")
    });
}

// Faz um DELETE request no backend, recebendo como entrada um page [Delete um elemento do banco]
// page: endpoint utilizado da api. Neste caso o endpoint precisa conter o id do elemento
// Ex: /produtos/1
function fetchDelete(page){

  // Define as opções do método fetch.
  const options = {
    method: "DELETE",
  };

  console.log(API_URL + page + payload);
  // Realiza o DELETE
  // OBS: .then() é uma object promise do javacript, para a execucao assincrona de rotinas.
  fetch(API_URL + page, options)
    .then((response) =>{
      if(response.status == 200) // Demonstra sucesso ou falha.
        alert("Sucesso Delete!")
      else
        alert("Falha Delete!")
    });
}

// Faz um PUT request no backend, recebendo como entrada um payload e page [Atualiza um elemento do banco]
// payload: um array de array que contém um unico elemento data com todos os atributos
// page: endpoint utilizado da api. Neste caso o endpoint precisa conter o id do elemento
// Ex: /produtos/1
function fetchPut(page, payload){

  // Define as opções do método fetch.
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };

  // Realiza o POST
  // OBS: .then() é uma object promise do javacript, para a execucao assincrona de rotinas.
  fetch(API_URL + page + id, options)
    .then((response) =>{
      if(response.status == 200) // Demonstra sucesso ou falha.
        alert("Sucesso Put!")
      else
        alert("Falha Put!")
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
