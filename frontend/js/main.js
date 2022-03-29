const API_URL = "http://localhost:1337/api";
const MEDIA_URL = "http://localhost:1337";

/// Faz um GET request no backend e retorna o resultado para a função de callback.
function fetchData(page, callback) {
  fetch(API_URL + page)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data.data);
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
