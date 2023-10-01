let inversa = document.querySelector("#inversa");

let botao = document.querySelector("#botao").addEventListener("click", function funcao () {
    let valor = document.querySelector("#valor").value;

    function reverseString(dale) {
        return dale.split('').reverse().join(''); // Aplicar a inversão corretamente
    }

    inversa.textContent = reverseString(valor);
})

