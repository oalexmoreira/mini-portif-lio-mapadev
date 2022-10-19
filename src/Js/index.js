
//Passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML 

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
//Passo 2 -dar um jeito de identificar o clique no elemento aba

    aba.addEventListener("click", function() {
    if(aba.classList.contains("selecionado")){
         return;
 }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    
    //Passo 3- Quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // Passo 4 - marcar a aba clicada como selecionado 
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){

// Passo 5- esconder o conteúdo anterior
const informacaoSelecionada = document.querySelector('.informacao.selecionado');
informacaoSelecionada.classList.remove("selecionado");

 // Passo 6 - Mostrar o conteúdo da aba selecionada 
 const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

 const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
 informacaoASerMostrada.classList.add("selecionado")

}



//Qual o objetivo? Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior









