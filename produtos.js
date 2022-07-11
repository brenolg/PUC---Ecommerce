$(document).ready(event => {
    carregarProdutos();
});

function carregarProdutos() {

    const produtosFiltrados = getProdutos();

    document.getElementById("titulo-lista").textContent = produtosFiltrados.titulo;

    for(let i = 0; i < produtosFiltrados.produtos.length; i++) {

        let produto = produtosFiltrados.produtos[i];

        let htmlProduto = `
            <div id="produto-${i + 1}" class="produto" title="Visualizar produto" onclick="abrirDetalhesProduto(${produto.id})" alt="${produto.descricao}">
                <div class="bloco-imagem">
                    <img loading="lazy" class="imagem-produto" src="${produto.imagem}" alt="${produto.descricao}">
                </div>

                <h3 class="descricao-produto">
                    ${produto.descricao}
                </h3>
        `;


        if(produto.promocao && produto.precoPromocao && produto.preco != produto.precoPromocao) {

            htmlProduto = htmlProduto.concat(`
                <div class="preco-de">
                    <span class="cifrao">de R$</span> ${produto.preco.toFixed(2).replace('.', ',')}
                </div>
            `);

            htmlProduto = htmlProduto.concat(`
                <div class="preco-venda">
                    <span class="cifrao">por R$</span> ${produto.precoPromocao.toFixed(2).replace('.', ',')}
                </div>
            `);

            // htmlProduto = htmlProduto.concat(`
            //     <div class="submit-button-cart">
            //         <button type="button" class="btn-add-to-cart"> Adicionar à sacola  </button>
            //     </div>
            // `);
        } else {

            htmlProduto = htmlProduto.concat(`
                <div class="preco-venda">
                    <span class="cifrao">R$</span> ${produto.preco.toFixed(2).replace('.', ',')}
                </div>
            `);

            // htmlProduto = htmlProduto.concat(`
            //     <div class="submit-button-cart">
            //         <button type="button" class="btn-add-to-cart"> Adicionar à sacola </button>
            //     </div>
            // `);

        }

        htmlProduto += '\n</div>';

        $('#lista-produtos').append(htmlProduto);

    }

}

function getProdutos() {

    const lista = JSON.parse(window.localStorage.getItem('produtos'));

    let pathSite = window.location.href;
   
    if(pathSite.indexOf('blusas') != -1) {

        return {
            titulo: 'Blusas',
            produtos: lista.filter(p => p.categoria == 'blusa')
        };

    } else if(pathSite.indexOf('acessorios') != -1){

        return {
            titulo: 'Acessórios',
            produtos: lista.filter(p => p.categoria == 'acessorio')
        };

    } else if(pathSite.indexOf('calcas') != -1) {

        return {
            titulo: 'Calças',
            produtos: lista.filter(p => p.categoria == 'calca')
        };

    } else {

        return {
            titulo: "Man's Week",
            produtos: lista.filter(p => p.promocao == true)
        };

    }

}

function abrirDetalhesProduto(produtoId) {

    window.location.href = `detalhes-produto.html?produto=${produtoId}`

}