let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function pares (){
   
    let num = Number (document.querySelector("#num").value)
    let numerospares = " ";

    for (let cont = 0; cont < num; cont++){
        if (cont % 2 === 0){
            numerospares += cont;
        }
    }
    res.textContent = 'PARES: ' + numerospares;
})