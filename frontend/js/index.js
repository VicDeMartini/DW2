const navbarHtml = `
<div class="navbar">
    <a href="#" onclick="renderIndex()">DW2 Games</a>
    <a href="#" onclick="renderRCompras()">Compras</a>
    <div class="dropdown">
    <button class="dropbtn">
        Produtos
        <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <a href="#" onclick="renderProdutos()">Catálogo de produtos</a>
        <a href="#" onclick="renderRProdutos()">Lista de produtos</a>
        <a href="#" onclick="renderCProduto()">Inserir produto</a>
    </div>
    </div>
    <div class="dropdown">
    <button class="dropbtn">
        Clientes
        <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <a href="#" onclick="renderRClientes()">Lista de clientes</a>
        <a href="#" onclick="renderCCliente()">Inserir cliente</a>
    </div>
    </div>
</div>
`;

const indexHtml = `
<h1 class="title-page">Produtos mais vendidos</h1>
<div class="card-container">
    <div class="card">
        <div class="header-content">
        <img src="imagens/headset.jpg" class="image" />
        <div class="title">Headset Gamer RGB Blackfire Preto FORTREK</div>
        </div>
        <div class="description">
        <ul>
            <li>Comprimento: 1,9m têxtil trançado.</li>
            <li>Conector: 2X P2 + USB + adaptador.</li>
            <li>Pesa apenas 450 g.</li>
            <li>
            Impedância: 22Ohms±15% Sensibilidade: 109db±3dB Resposta
            Frequência: 20Hz~20Khz.
            </li>
        </ul>
        </div>
        <div class="price">R$ 119,00</div>
        <div class="buy-link"><a href="#">Comprar</a></div>
    </div>

    <div class="card">
        <div class="header-content">
        <img src="imagens/alexa.jpg" class="image" />
        <div class="title">
            Echo Dot (4ª Geração): Smart Speaker com Alexa
        </div>
        </div>
        <div class="description">
        <ul>
            <li>
            O novo design de áudio com direcionamento frontal (1 speaker de
            1,6") garante mais graves e um som completo.
            </li>
            <li>
            Sempre pronta para ajudar: peça para a Alexa tocar músicas,
            responder perguntas, checar a previsão do tempo e muito mais.
            </li>
        </ul>
        </div>
        <div class="price">R$ 379,00</div>
        <div class="buy-link"><a href="#">Comprar</a></div>
    </div>

    <div class="card">
        <div class="header-content">
        <img src="imagens/cadeira-gamer.jpg" class="image" />
        <div class="title">Cadeira Gamer MoobX Nitro</div>
        </div>
        <div class="description">
        <ul>
            <li>Assentos especiais com espuma injetada de 50Kg/m.</li>
            <li>Cilindro com 100mm de regulagem de altura.</li>
            <li>
            Função basculante com parte traseira reclinável, com ajuste de até
            180.
            </li>
            <li>
            Apoio de cabeça menor e almofada para lombar que aumenta o
            conforto e suporte no dia a dia.
            </li>
        </ul>
        </div>
        <div class="price">R$ 999,00</div>
        <div class="buy-link"><a href="#">Comprar</a></div>
    </div>
    </div>

    <div class="header">
    <h1 class="title-page">Clientes mais assíduos</h1>
    </div>

    <!-- Tabela de clientes -->
    <div class="table-cliente">
    <table>
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
        <tbody>
        <tr>
            <!-- Linha 1 -->
            <td data-columnName="NOME">Ricardo da Silva</td>
            <td data-columnName="E-MAIL">ricardo@hotmail.com</td>
            <td data-columnName="TELEFONE">(16)99734-3500</td>
            <td data-columnName="CEP">135698450</td>
            <td data-columnName="LOGRADOURO">Rua Doutor Major</td>
            <td data-columnName="NÚMERO">110</td>
            <td data-columnName="BAIRRO">Santa Felicia</td>
            <td data-columnName="CIDADE">São Carlos</td>
            <td data-columnName="ESTADO">São Paulo</td>
            <!-- Link para a pagina que deleta cliente e atualiza cliente-->
            <td data-columnName="AÇÕES">
            <a href="/api/DeleteCliente"> Deletar</a>
            <a href="clientes/UCliente.html">Atualizar</a>
            </td>
        </tr>
        <tr>
            <!-- Linha 2 -->
            <td data-columnName="NOME">Mariana Santos</td>
            <td data-columnName="E-MAIL">mari@gmail.com</td>
            <td data-columnName="TELEFONE">(16)98535-3500</td>
            <td data-columnName="CEP">135692460</td>
            <td data-columnName="LOGRADOURO">Rua das Laranjas</td>
            <td data-columnName="NÚMERO">150</td>
            <td data-columnName="BAIRRO">Centro</td>
            <td data-columnName="CIDADE">São Carlos</td>
            <td data-columnName="ESTADO">São Paulo</td>
            <!-- Link para a pagina que deleta cliente e atualiza cliente-->
            <td data-columnName="AÇÕES">
            <a href="/api/DeleteCliente"> Deletar</a>
            <a href="clientes/UCliente.html">Atualizar</a>
            </td>
        </tr>
        <tr>
            <!-- Linha 2 -->
            <td data-columnName="NOME">Mariana Santos</td>
            <td data-columnName="E-MAIL">mari@gmail.com</td>
            <td data-columnName="TELEFONE">(16)98535-3500</td>
            <td data-columnName="CEP">135692460</td>
            <td data-columnName="LOGRADOURO">Rua das Laranjas</td>
            <td data-columnName="NÚMERO">150</td>
            <td data-columnName="BAIRRO">Centro</td>
            <td data-columnName="CIDADE">São Carlos</td>
            <td data-columnName="ESTADO">São Paulo</td>
            <!-- Link para a pagina que deleta cliente e atualiza cliente-->
            <td data-columnName="AÇÕES">
            <a href="/api/DeleteCliente"> Deletar</a>
            <a href="clientes/UCliente.html">Atualizar</a>
            </td>
        </tr>
        <tr>
            <!-- Linha 2 -->
            <td data-columnName="NOME">Mariana Santos</td>
            <td data-columnName="E-MAIL">mari@gmail.com</td>
            <td data-columnName="TELEFONE">(16)98535-3500</td>
            <td data-columnName="CEP">135692460</td>
            <td data-columnName="LOGRADOURO">Rua das Laranjas</td>
            <td data-columnName="NÚMERO">150</td>
            <td data-columnName="BAIRRO">Centro</td>
            <td data-columnName="CIDADE">São Carlos</td>
            <td data-columnName="ESTADO">São Paulo</td>
            <!-- Link para a pagina que deleta cliente e atualiza cliente-->
            <td data-columnName="AÇÕES">
            <a href="/api/DeleteCliente"> Deletar</a>
            <a href="clientes/UCliente.html">Atualizar</a>
            </td>
        </tr>
        <tr>
            <!-- Linha 2 -->
            <td data-columnName="NOME">Mariana Santos</td>
            <td data-columnName="E-MAIL">mari@gmail.com</td>
            <td data-columnName="TELEFONE">(16)98535-3500</td>
            <td data-columnName="CEP">135692460</td>
            <td data-columnName="LOGRADOURO">Rua das Laranjas</td>
            <td data-columnName="NÚMERO">150</td>
            <td data-columnName="BAIRRO">Centro</td>
            <td data-columnName="CIDADE">São Carlos</td>
            <td data-columnName="ESTADO">São Paulo</td>
            <!-- Link para a pagina que deleta cliente e atualiza cliente-->
            <td data-columnName="AÇÕES">
            <a href="/api/DeleteCliente"> Deletar</a>
            <a href="clientes/UCliente.html">Atualizar</a>
            </td>
        </tr>
        </tbody>
    </table>
</div>
`;

const content = document.getElementById("content");

function renderIndex() {
  window.document.title = "DW2 Games";
  content.innerHTML = indexHtml;
}

function renderNavbar() {
  navbar = document.getElementById("navbar");
  navbar.innerHTML = navbarHtml;
}

/// Lida com um POST request
const handleCreate = function (response) {
    if (response.status != 200) {
      alert(`[${response.status}] ${response.statusText}`);
    }
  };
  
  /// Lida com um DELETE request
  const handleDelete = function (response) {
    if (response.status == 200) {
      alert("Elemento removido!");
    } else {
      alert(`[${response.status}] ${response.statusText}`);
    }
  };
  
  /// Lida com um PUT request
  const handlePut = function (response) {
    if (response.status != 200) {
      alert(`[${response.status}] ${response.statusText}`);
    }
  };

window.addEventListener("load", () => {
  renderNavbar();
  renderIndex();
});
