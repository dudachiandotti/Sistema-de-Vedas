const sistema = new SistemaDeVendas();

function cadastrarProduto() {
    const nome = document.getElementById("produto-nome").value;
    const preco = parseFloat(document.getElementById("produto-preco").value);
    const fornecedor = document.getElementById("produto-fornecedor").value;
    sistema.cadastrar_produto(nome, preco, fornecedor);
    alert("Produto cadastrado com sucesso.");
}

function cadastrarCliente() {
    const nome = document.getElementById("cliente-nome").value;
    const endereco = document.getElementById("cliente-endereco").value;
    const telefone = document.getElementById("cliente-telefone").value;
    sistema.cadastrar_cliente(nome, endereco, telefone);
    alert("Cliente cadastrado com sucesso.");
}

function atualizarProdutosVenda() {
    const select = document.getElementById("produtos-venda");
    select.innerHTML = "";

    for (const produto of sistema.produtos) {
        const option = document.createElement("option");
        option.value = produto.nome;
        option.innerText = produto.nome;
        select.appendChild(option);
    }
}

function realizarVenda() {
    const clienteNome = document.getElementById("cliente-venda").value;
    const selectedProdutos = Array.from(document.getElementById("produtos-venda").selectedOptions);
    const produtos = selectedProdutos.map(option => sistema.produtos.find(produto => produto.nome === option.value));
    const resultado = sistema.realizar_venda(clienteNome, produtos);
    document.getElementById("resultado").innerText = resultado;
    atualizarProdutosVenda();
}
