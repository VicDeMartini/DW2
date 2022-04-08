/// Constrói um card de cliente a partir de um objeto do backend.
const clientListBuilder = function (data) {
    const attr = data.attributes;
  
    const html = `
      <tr>
      <td data-columnName="NOME">${attr.nome}</td>
      <td data-columnName="E-MAIL">${attr.email}</td>
      <td data-columnName="TELEFONE">${attr.telefone}</td>
      <td data-columnName="CEP">${attr.cep}</td>
      <td data-columnName="LOGRADOURO">${attr.logradouro}</td>
      <td data-columnName="NÚMERO">${attr.numero}</td>
      <td data-columnName="BAIRRO">${attr.bairro}</td>
      <td data-columnName="CIDADE">${attr.cidade}</td>
      <td data-columnName="ESTADO">${attr.estado}</td>
      <!-- Link para a pagina que deleta cliente e atualiza cliente-->
      <td data-columnName="AÇÕES">
      <a href="#" onclick="deleteClient(${data.id})">Deletar</a>
      <a href="./UCliente.html?id=${data.id}">Atualizar</a>
      </td>
    </tr>`;
  
    return html;
  };
  
  /// Constrói o formulario de atualizacao de um cliente
  const formBuilder = function(data) {
    const attr = data.attributes;
  
      const html = `
      <label for="nome">Nome:</label>
      <input required type="text" id="nome" name="nome" value="${attr.nome}" />
      <br />
  
      <label for="email">E-mail:</label>
      <input required type="text" id="email" name="email" value="${attr.email}" />
      <br />
  
      <label for="senha">Senha:</label>
      <!-- Type password para nao mostrar a senha -->
      <input required type="password" id="senha" name="senha" value="${attr.senha}" />
      <br />
  
      <label for="cpf">CPF:</label>
      <input required type="text" id="cpf" name="cpf" value="${attr.cpf}" />
      <br />
  
      <label for="telefone">Telefone:</label>
      <input required type="text" id="telefone" name="telefone" value="${attr.telefone}" />
      <br />

      <!-- Drop down -->
      <label for="sexo">Sexo:</label>
      <select id="sexo" name="sexo">
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="nao-binario">Não Binário</option>
        <option value="prefere-nao-dizer">Prefiro Não Dizer</option>
        <option selected="selected" value="${attr.sexo}">${attr.sexo}</option>
      </select>
      <br />
  
      <label for="cep">CEP:</label>
      <input required type="text" id="cep" name="cep"  value="${attr.cep}" />
      <br />
  
      <label for="logradouro">Logradouro:</label>
      <input required type="text" id="logradouro" name="logradouro" value="${attr.lpgradouro}" />
      <br />
  
      <label for="numero">Número::</label>
      <input required type="text" id="numero" name="numero" value="${attr.numero}" />
      <br />
  
      <label for="bairro">Bairro:</label>
      <input required type="text" id="bairro" name="bairro" value="${attr.bairro}" />
      <br />
  
      <label for="cidade">Cidade:</label>
      <input required type="text" id="cidade" name="cidade" value="${attr.cidade}" />
      <br />
  
      <label for="estado">Estado:</label>
      <input required type="text" id="estado" name="estado" value="${attr.estado}" />
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
    .addEventListener("click", updateClient);
  };
  
  /// Lida com um GET request
  const handleGet = function (data) {
      appendToElement("tableBody", data, clientListBuilder);
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
        numero: parseInt(
            document.getElementById("numero").value
          ),
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        
      },
    };
  
    // Realiza o post
    postData("/clientes", payload, handleCreate);
  
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
  
    // Cria o objeto de payload para criar um novo cliente no backend
    const payload = {
        data: {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            sexo: document.getElementById("sexo").value,
            cep: document.getElementById("cep").value,
            logradouro: document.getElementById("logradouro").value,
            numero: parseInt(
                document.getElementById("numero").value
              ),
            bairro: document.getElementById("bairro").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            
          },
    };
  
    // Acessa o id do cliente na url da pagina
    url = new URL(window.location.href)
  
    // Realiza o put
    putData("/clientes/" + url.searchParams.get("id"), payload, handlePut);
  }
  
  /// Remove um cliente do banco de dados.
  function deleteClient(clientId) {
    deleteData(`/clientes/${clientId}`, handleDelete);
  }
  
  
  