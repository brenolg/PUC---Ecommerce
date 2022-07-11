async function getCarrinho(){

    let carrinho = await (window.localStorage.getItem('carrinho') ? JSON.parse(window.localStorage.getItem('carrinho')) : null);

    if(!carrinho) {
        
        carrinho = {
            quantidade: 0,
            subtotal: 0,
            produtos: []
        };

        await saveCarrinho(carrinho);
    }

    return carrinho;

}

async function saveCarrinho(carrinho) {

    carrinho.quantidade = (carrinho.produtos || []).length;

    atualizarQtdProdutosHeader(carrinho);

    await window.localStorage.setItem('carrinho', JSON.stringify(carrinho));

}

async function atualizarQtdProdutosHeader(carrinho = null) {

    if(!carrinho) carrinho = await getCarrinho();

    carrinho.quantidade = (carrinho.produtos || []).length;

    if(!document.getElementById("quantidade-produto-header")) {

        setTimeout(() => {
            atualizarQtdProdutosHeader(carrinho);
        }, 1000);

    } else {

        document.getElementById("quantidade-produto-header").innerHTML = carrinho.quantidade;

    }

}

async function apagarCarrinho() {

    await localStorage.removeItem('carrinho');

    atualizarQtdProdutosHeader();

}