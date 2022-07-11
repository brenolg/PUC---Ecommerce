$(document).ready(event => {
    carregarDetalhesProduto();
});

let produto;

let tamanhoSelecionado;
let corSelecionada;

function carregarDetalhesProduto() {

    const listaProdutos = JSON.parse(window.localStorage.getItem('produtos'));
    
    var url = new URL(window.location.href);
    var idProduto = url.searchParams.get("produto");
    
    produto = listaProdutos.find(p => p.id == idProduto)

    document.getElementById('descricao-produto').textContent = produto['descricao'];
    document.getElementById('preco-produto').textContent = `R$ ${(produto['preco'] || 0).toFixed(2).replace('.', ',')}`;
    $('#bloco-imagem-produto').append(`<img src="${produto.imagem}">`);

    for(let tamanho of produto.tamanhos) {

        let html = `
            <li>
                <div onclick="changeTamanho('${tamanho}')">${tamanho}</div>
            </li>
        `;

        $('.lista-tamanhos').append(html);

    }

    for(let cor of produto.cores) {

        let html = `
            <li title="${cor.titulo}">
                <div onclick="changeCor('${cor.hexadecimal}', '${cor.titulo}')" style="background-color: ${cor.hexadecimal};"></div>
            </li>
        `;

        $('.lista-cores').append(html);

    }

}

async function adicionarCarrinho() {
    
    if(!produto.tamanhoSelecionado) {
        alert('Selecione um tamanho!');
        return;
    }

    if(!produto.corSelecionada) {
        alert('Selecione uma cor!');
        return;
    }


    let carrinho = await getCarrinho();

    carrinho.produtos.push(produto);

    await saveCarrinho(carrinho);
    
    limpaCorTamanhoSelecionados();

}

function changeCor(cor, textoCor) {

    produto.corSelecionada = cor;

    document.getElementById('texto-cor').textContent = textoCor;

}

function changeTamanho(tamanho) {

    produto.tamanhoSelecionado = tamanho;

    document.getElementById('texto-tamanho').textContent = tamanho;

}

function limpaCorTamanhoSelecionados() {

    delete produto.corSelecionada;
    document.getElementById('texto-cor').textContent = '';
    

    delete produto.tamanhoSelecionado;
    document.getElementById('texto-tamanho').textContent = '';

}