let num = document.querySelector("#num");
let botao = document.querySelector("#botao");
let res = document.querySelector("#pares");

botao.addEventListener("click", function pares(){
    let cont = 0;
    let numero = Number (num.value);
    let numerospares = " ";

    while (cont < numero) {
        if (cont % 2 === 0) {
             numerospares += cont;
        } 
        cont++;
    }
    res.textContent = " PARES: " + numerospares;
})



