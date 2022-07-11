
$(document).ready(event =>{
    $('.icon').click(() => {
        $(`.mobile-menu`).slideToggle('slow')
    });

    window.addEventListener('resize', () => {

        let largura = window.innerWidth;
        let menuMobile = document.querySelector('.mobile-menu');
        if (largura > 768) {
            if (menuMobile.classList.contains('open')) {
                //console.log('entrou')
                let menuMobile = document.querySelector('.mobile-menu');
                fecharMenu();
                $(`.mobile-menu`).slideToggle(0)
    
            }
        }
    })
})





$(document).ready(event => {
    
    atualizarQtdProdutosHeader();
    
    // FORÇAR ATUALIZAR A QUANTIDADE NO CARRINHO NA TELA, ATE FICAR CORRETA
    let intervalCheckCart;
    if(!intervalCheckCart) {

        intervalCheckCart = setInterval(() => {

            atualizarQtdProdutosHeader();
            
            let carrinho = getCarrinho();
            if(!carrinho || (carrinho && (carrinho.produtos || []).length == document.getElementById("quantidade-produto-header").innerHTML)) {
                clearInterval(intervalCheckCart);
            }

        }, 5000);
    }
    
});

// Essa função é a openMenu, está registrada num evento de onclick em um botão, essa função serve para abrir e fechar o menu

function openMenu() {
    let menuMobile = document.querySelector('.mobile-menu');


    if (menuMobile.classList.contains('open')) {

        fecharMenu();

    } else {

        abrirMenu();
    }

}


// Essa função vai trocar o ícone e também habilitar o menu de acordo com a classe que ele possui la no css.
function abrirMenu (){
    let menuMobile = document.querySelector('.mobile-menu');

    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "src/assets/close_white_36dp.svg";


}

// Essa função vai trocar o ícone e também habilitar o menu de acordo com a classe que ele possui la no css.
function fecharMenu (){
    let menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "src/assets/menu_white_36dp.svg";

}

// Função de animação usando jquery
