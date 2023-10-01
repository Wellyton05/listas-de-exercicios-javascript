let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function absoluto(){
    let num = Number(document.querySelector("#num").value);

    res.innerHTML = `Número absoluto: ${Math.abs(num)}`;
})