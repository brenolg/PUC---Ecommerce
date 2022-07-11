$(document).ready(event => {
    window.localStorage.setItem('produtos', JSON.stringify(listaProdutos));

    setTimeout(() => {
        if(!window.localStorage.getItem('aceite-termos')){
            document.querySelector(".cookie-container").classList.add("cookie-container-show")
    
        }
    },2000)

});

/**
 * Load da vitrine de produtos da pagina inicial
 */
$(() => {
    $("#produtos").load("produtos.html");
});


/**
 * Função deve enviar os dados do e-mail para armazenar na lista de tramissões das ofertas
 */
function enviarCadastroOfertas() {
    
    if(document.getElementById('nome-cadastre-ofertas').value && document.getElementById('email-cadastre-ofertas').value) {

        var nome = document.getElementById('nome-cadastre-ofertas').value;
        var email = document.getElementById('email-cadastre-ofertas').value;

        // LIMPAR FORMULARIO
        document.getElementById('nome-cadastre-ofertas').value = null;
        document.getElementById('email-cadastre-ofertas').value = null;

        // EXIBIR DADOS NA TELA
        // SET TIMEOUT PARA LIMPAR OS DADOS ANTES DE DAR O ALERT
        setTimeout(() => {
            alert(`
                Nome: ${nome}
                E-mail: ${email}
            `);
        })

    }

}

function fecharpopup() {
    window.localStorage.setItem("aceite-termos", true)

    const cookieContainer = document.querySelector(".cookie-container");
    cookieContainer.classList.remove("cookie-container-show")
}


function validacaoEmail(input){
   
    
   // Aqui quando clicamos fora do campo de e-mail o onblur é ligado, pois o foco foi tirado de elemnto
   // isso faz com que consigamos validar o e-mail assim que o usuário tenta confirmar.

   
   usuario = input.value.substring(0, input.value.indexOf("@"));
   dominio = input.value.substring(input.value.indexOf("@") + 1, input.value.lenght);

   if(!((usuario.length >=1) &&
   (dominio.length >=3) &&
   (usuario.search("@")==-1) &&
   (dominio.search("@")==-1) &&
   (usuario.search(" ")==-1) &&
   (dominio.search(" ")==-1) &&
   (dominio.search(".")!=-1) &&
   (dominio.indexOf(".") >=1)&&
   (dominio.lastIndexOf(".") < dominio.length - 1))){
        alert("E-mail inválido")
   }
}
