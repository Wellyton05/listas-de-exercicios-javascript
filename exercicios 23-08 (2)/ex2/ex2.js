let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function funcao() {
    let nome = document.querySelector("#nome").value;
    let nomeSeparados = nome.split(" "); //divide a string 

    if(nomeSeparados.length >= 2) { //mostrar na tela somente se for digitado um nome completo
        let primeiroNome = nomeSeparados[0]; //armazenar o primeiro nome 
        let ultimoNome = nomeSeparados[nomeSeparados.length -1]; //armazenar o último nome

        res.innerHTML = primeiroNome + " " + ultimoNome;
    } else {
        res.textContent = 'Digite um nome completo! ';
    }

})
