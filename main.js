let nomeUsuário = ""; /* exibe uma caixa de diálogo e solicia uma resposta do usuário e insere essa resposta na variável nomeUsuário*/
let elemento = document.querySelector("#nome-usuário"); /* cria-se a variável elemento e acessamos o objeto (nome-usuário) pelo queryselector */ 

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){ /*criamos uma condição, se o usuário nao informa um nome, a frase entra no lugar */
    elemento.textContent = "seja muito bem-vindo!"
}else{
    elemento.textContent = nomeUsuário; /* busca-se o conteúdo da variável elemento e a insere na variável nomeUsuário */
}



