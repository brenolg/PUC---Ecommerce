const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


c('#open-cart').addEventListener('click', async () => {

    let cart = await getCarrinho();


    abrirCarrinho(cart);
    updateCart(cart);

})


async function updateCart(cart) {

    // SE NAO TIVER CARRINHO, ABORTAR
    if(!cart || !cart.produtos || !cart.produtos.length) {
        escondeCarrinho();
        alert('Carrinho vazio!');
        return;
    }

    montaListaProdutos(cart);
    calcularTotais(cart);

}


async function montaListaProdutos(cart) {

    c('.cart').innerHTML = '';

    const listaProdutos = await JSON.parse(window.localStorage.getItem('produtos'));
    
    cart.produtos.map((itemCart, index) => {

        // aqui eu comparo o item do carrinho com o item do banco
        let produtoBD = listaProdutos.find((itemDB) => itemDB.id == itemCart.id);

        // aqui monto o item do carrinho 
        let cartItem = c('.cart--item').cloneNode(true);

        // Imagem e nome

        cartItem.querySelector('.cart--item img').src = `${produtoBD.imagem}`;
        cartItem.querySelector('.cart--item-nome').innerHTML = produtoBD.descricao;
        cartItem.querySelector('.cart--item-tamanho').innerHTML = cart.produtos[index].tamanhoSelecionado
        //
        cartItem.querySelector('.cart--item-cor').innerHTML = (cart.produtos[index].cores.find(c => c.hexadecimal == cart.produtos[index].corSelecionada) || {}).titulo

        console.log("Teste" + {titulo:'teste'})
       //pegar o objeto da cor - titulo e hexadecimal, se ele não achar eu quero que ele retorne um objeto vazio, .titulo num objeto vazio não vai retornar, ele volta sem dados


        cartItem.querySelector('.cart-btn-remover').innerHTML = `
            <button class="cart-item-remover" onclick="removerProduto(${index})">
                Remover
            </button>
        `;

        c('.cart').append(cartItem);
    });
}

function calcularTotais(cart) {

    let subtotal = cart.produtos.reduce((acumulador, produto) => { return acumulador + produto.preco }, 0);

    let desconto = subtotal - cart.produtos.reduce((acumulador, produto) => { return acumulador + produto.precoPromocao }, 0);

    let total = cart.produtos.reduce((acumulador, produto) => { return acumulador + produto.precoPromocao }, 0);

    //Cálculo do total/ subtotal e desconto
    c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2).replace('.', ',')}`
    c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2).replace('.', ',')}`
    c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`

}

function abrirCarrinho(cart) {
    // SE ABERTO, FECHAR CARRINHO
    if(c('aside').classList.contains('show')) {

        escondeCarrinho();

    } else {

        // SE NAO TIVER CARRINHO, ABORTAR
        if(!cart || !cart.produtos || !cart.produtos.length) {
            alert('Carrinho vazio!');
            return;
        }

        c('aside').classList.add('show');

    }
}

function escondeCarrinho() {
    c('aside').classList.remove('show');
}

async function removerProduto(index) {

    let cart = await getCarrinho();

    // aqui ele verifica o index e apaga ele mesmo, isso já atualiza o valor do total e etc
    // remove 1 elemento no loop do index, ou seja se for no index 4 ele remove esse elemento
    cart.produtos.splice(index, 1);

    await saveCarrinho(cart);

    if (!cart.produtos || !cart.produtos.length) {

        escondeCarrinho();
        apagarCarrinho();

    } else {

        updateCart(cart);

    }


}