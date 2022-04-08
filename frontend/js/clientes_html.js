const rClientesHtml = `
<div id="#clientes" class="table-cliente">
    <table border="1">
    <thead>
        <tr>
        <!-- cabecalho da tabela -->
        <th scope="col">NOME</th>
        <th scope="col">E-MAIL</th>
        <th scope="col">TELEFONE</th>
        <th scope="col">CEP</th>
        <th scope="col">LOGRADOURO</th>
        <th scope="col">NÚMERO</th>
        <th scope="col">BAIRRO</th>
        <th scope="col">CIDADE</th>
        <th scope="col">ESTADO</th>
        <th scope="col">AÇÕES</th>
        </tr>
    </thead> 
    <tbody id="tableBody"></tbody>
        
    </table>
</div>

<div class="button-new-create">
    <a href="#" onclick="renderCCliente()" class="input-new-create">Novo cliente</a>
</div>
`;

const cClientesHtml = `
<form class="form-cliente" id="form-cadastro">
      <label for="nome">Nome:</label>
      <input required type="text" id="nome" name="nome" />
      <br />

      <label for="email">E-mail:</label>
      <input required type="text" id="email" name="email" />
      <br />

      <label for="senha">Senha:</label>
      <!-- Type password para nao mostrar a senha -->
      <input required type="password" id="senha" name="senha" />
      <br />

      <label for="cpf">CPF:</label>
      <input required type="text" id="cpf" name="cpf" />
      <br />

      <label for="telefone">Telefone:</label>
      <input required type="text" id="telefone" name="telefone" />
      <br />

      <label for="sexo">Sexo:</label>
      <!-- Drop down -->
      <select id="sexo" name="sexo">
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="nao-binario">Não Binário</option>
        <option value="prefere-nao-dizer">Prefiro Não Dizer</option>
      </select>
      <br />

      <label for="cep">CEP:</label>
      <input required type="text" id="cep" name="cep" />
      <br />

      <label for="logradouro">Logradouro:</label>
      <input required type="text" id="logradouro" name="logradouro" />
      <br />

      <label for="numero">Número::</label>
      <input required type="text" id="numero" name="numero" />
      <br />

      <label for="bairro">Bairro:</label>
      <input required type="text" id="bairro" name="bairro" />
      <br />

      <label for="cidade">Cidade:</label>
      <input required type="text" id="cidade" name="cidade" />
      <br />

      <label for="estado">Estado:</label>
      <input required type="text" id="estado" name="estado" />
      <br />

      <input class="button" type="submit" />
    </form>
`;

const uClienteHtml = `
<div class="header">
    <h1><strong> Atualizar cliente </strong></h1>
</div>

<form class="form-cliente" id="form-update"></form>
`;

/// Constrói um card de cliente a partir de um objeto do backend.
const clientListBuilder = function (data) {
  const attr = data.attributes;

  const html = `
    <tr>
    <td data-columnName="NOME">${attr.nome}</td>
    <td data-columnName="E-MAIL">${attr.email}</td>
    <td data-columnName="TELEFONE">${attr.telefone}</td>
    <td data-columnName="CEP">${attr.Endereco.CEP}</td>
    <td data-columnName="LOGRADOURO">${attr.Endereco.Logradouro}</td>
    <td data-columnName="NÚMERO">${attr.Endereco.Numero}</td>
    <td data-columnName="BAIRRO">${attr.Endereco.Bairro}</td>
    <td data-columnName="CIDADE">${attr.Endereco.Cidade}</td> 
    <td data-columnName="ESTADO">${attr.Endereco.Estado}</td>
    <!-- Link para a pagina que deleta cliente e atualiza cliente-->
    <td data-columnName="AÇÕES">
    <a href="#" onclick="deleteClient(${data.id})">Deletar</a>
    <a href="#" onclick="renderUCliente(${data.id})">Atualizar</a>
    </td>
    </tr>
`;

  return html;
};

/// Constrói o formulario de atualizacao de um cliente
const clienteFormBuilder = function (data) {
  const attr = data.attributes;

  const html = `
    <input type="hidden" id="productId" value="${data.id}">
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
    <input required type="text" id="cep" name="cep"  value="${attr.Endereco.CEP}" />
    <br />

    <label for="logradouro">Logradouro:</label>
    <input required type="text" id="logradouro" name="logradouro" value="${attr.Endereco.Logradouro}" />
    <br />

    <label for="numero">Número::</label>
    <input required type="text" id="numero" name="numero" value="${attr.Endereco.Numero}" />
    <br />

    <label for="bairro">Bairro:</label>
    <input required type="text" id="bairro" name="bairro" value="${attr.Endereco.Bairro}" />
    <br />

    <label for="cidade">Cidade:</label>
    <input required type="text" id="cidade" name="cidade" value="${attr.Endereco.Cidade}" />
    <br />

    <label for="estado">Estado:</label>
    <input required type="text" id="estado" name="estado" value="${attr.Endereco.Estado}" />
    <br />

    <input class="button" type="submit" id="Atualizar" />
`;

  return html;
};
