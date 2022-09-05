var nome = "";
// função que pega o que e digitado no campo de sugestação e mostra abaixo dele 
function pegarNome (){
    nome = document.getElementById('msg').value;
    document.getElementById('msg-erro').innerHTML=nome;
}