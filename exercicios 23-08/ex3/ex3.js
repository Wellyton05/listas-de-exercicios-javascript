let res = document.querySelector("#res");

let pares = document.querySelector("#pares").addEventListener("click", function funcao() {
    let num_final = Number(document.querySelector("#num_final").value);
    let numerospares = " ";

    for (let cont = 0; cont < num_final; cont++){
        if (cont % 2 === 0){
            numerospares += cont;
        }
    }
    res.textContent = 'PARES: ' + numerospares;
})

let impares = document.querySelector("#impares").addEventListener("click", function funcao2() {
    let num_final = Number(document.querySelector("#num_final").value);
    let numerosimpares = " ";

    for (let cont = 0; cont < num_final; cont++){
        if (cont % 2 !== 0){
            numerosimpares += cont;
        } 
    }
    res.textContent = 'ÍMPARES: ' + numerosimpares;
})