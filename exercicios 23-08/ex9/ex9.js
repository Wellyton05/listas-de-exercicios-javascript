let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function tabuada(){
    let num = Number(document.querySelector("#num").value);
    let numeros = "";

    for (let cont = 1; cont <= num; cont++){
        let tabuada = num * cont;
        numeros += `${num} x ${cont} = ${tabuada}<br>`;
    }
    res.innerHTML = numeros
})