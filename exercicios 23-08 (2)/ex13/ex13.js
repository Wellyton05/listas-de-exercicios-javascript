let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function arredondar() {
    let num = parseFloat(document.querySelector("#num").value);

    res.innerHTML = `Número arredondado: ${num.toFixed(2)}`;
})