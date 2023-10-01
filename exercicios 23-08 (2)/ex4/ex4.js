let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function verificar() {
    let texto = document.querySelector("#texto").value;

    let caracterNumerico = /\d/.test(texto);
    let caracteresDistintos = new Set(texto);

    if (texto.length >= 6 && caracteresDistintos.size > 3 && caracterNumerico) {
        res.innerHTML = `Ok`;
    } else {
        res.innerHTML = `Inválido`;
    }
})