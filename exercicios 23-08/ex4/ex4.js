let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function verificar(){
    let tentativas;

    for (tentativas = 0; tentativas < 3; tentativas++){
        let chute = Number(document.querySelector("#chute").value);
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        
        if (chute === numeroAleatorio) {
            document.querySelector("#chute").disabled = true;
            document.querySelector("#botao").disabled = true;
        } else if (chute < numeroAleatorio) {
            res.textContent = "O número é maior. Tente novamente.";
        } else {
            res.textContent = "O número é menor. Tente novamente.";
        }
    }

    if (tentativas === 3){
        res.innerHTML = `O jogo acabou pra vc! `;
        document.querySelector("#chute").disabled = true;
        document.querySelector("#botao").disabled = true;
    }

})