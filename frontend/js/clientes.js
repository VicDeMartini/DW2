/// Constrói um card de produto a partir de um objeto do backend.
const ClientCardBuilder = function (data) {
  const attr = data.attributes;

  const html = `
    <tr>
    <td data-columnName="NOME">${attr.nome)}</td>
    <td data-columnName="E-MAIL">${attr.email)}</td>
    <td data-columnName="TELEFONE">${attr.telefoje)}</td>
    <td data-columnName="CEP">${attr.cep)}</td>
    <td data-columnName="LOGRADOURO">${attr.logradouro)}</td>
    <td data-columnName="NÚMERO">${attr.numero)}</td>
    <td data-columnName="BAIRRO">${attr.bairro)}</td>
    <td data-columnName="CIDADE">${attr.cidade)}</td>
    <td data-columnName="ESTADO">${attr.estado)}</td>
    <!-- Link para a pagina que deleta cliente e atualiza cliente-->
    <td data-columnName="AÇÕES">
      <a href="/api/DeleteCliente"> Deletar</a>
      <a href="clientes/${data.id}">Atualizar</a>
    </td>
  </tr>`;

  return html;
};

/// Função de callback passada para a função de fetchData.
/// Recebe os dados da API e repassa para a função que os adiciona na página.
const handleGet = function (data) {
  appendToElement("#produtos", data, ClientCardBuilder);
};
