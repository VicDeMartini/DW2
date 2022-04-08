/// Lida com o Update de um elemento
const handleClientUpdate = function (data) {
  document.getElementById("form-update").innerHTML += clienteFormBuilder(data);
  document.getElementById("Atualizar").addEventListener("click", updateClient);
};

/// Lida com um GET request
const handleGet = function (data) {
  appendToElement("tableBody", data, clientListBuilder);
};

/// Cria um cliente a partir do formulário de cadastro.
function createClient(event) {
  // Previne o comportamento padrão de submit do form
  event.preventDefault();

  // Cria o objeto de payload para criar um novo cliente no backend
  const payload = {
    data: {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      sexo: document.getElementById("sexo").value,
      cep: document.getElementById("cep").value,
      logradouro: document.getElementById("logradouro").value,
      numero: parseInt(document.getElementById("numero").value),
      bairro: document.getElementById("bairro").value,
      cidade: document.getElementById("cidade").value,
      estado: document.getElementById("estado").value,
    },
  };

  // Realiza o post
  postData("/usuarios", payload, handleCreate);

  // Limpa todos os inputs
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("sexo").selectedIndex = -1;
  document.getElementById("logradouro").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

/// Cria um cliente a partir do formulário de cadastro.
function updateClient(event) {
  event.preventDefault();

  // Cria o objeto de payload para criar um novo cliente no backend
  const payload = {
    data: {
      id: document.getElementById("productId").value,
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      sexo: document.getElementById("sexo").value,
      Endereco: {
        CEP: document.getElementById("cep").value,
        Logradouro: document.getElementById("logradouro").value,
        Numero: parseInt(document.getElementById("numero").value),
        Bairro: document.getElementById("bairro").value,
        Cidade: document.getElementById("cidade").value,
        Estado: document.getElementById("estado").value,
      },
    },
  };

  console.log(payload)

  // Realiza o put
  putData(`/usuarios/${payload.data.id}`, payload, handlePut);

  renderRClientes();
}

/// Remove um cliente do banco de dados.
function deleteClient(clientId) {
  deleteData(`/usuarios/${clientId}`, handleDelete);
}

function renderRClientes() {
  window.document.title = "Clientes";
  content.innerHTML = rClientesHtml;
  fetchData("/usuarios?populate=*", handleGet);
}

function renderCCliente() {
  window.document.title = "Atualizar cliente";
  content.innerHTML = cClientesHtml;
  document
    .getElementById("form-cadastro")
    .addEventListener("submit", createClient);
}

function renderUCliente(id) {
  window.document.title = "Novo cliente";
  content.innerHTML = uClienteHtml;
  fetchData(`/usuarios/${id}?populate=*`, handleClientUpdate);
}
