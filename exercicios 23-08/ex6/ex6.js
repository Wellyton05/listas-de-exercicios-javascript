let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function calcular(){
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    let n3 = Number(document.querySelector("#n3").value);
    let n4 = Number(document.querySelector("#n4").value);
    let n5 = Number(document.querySelector("#n5").value);

    let menorNumero = Math.min(n1, n2, n3, n4, n5);
    let maiorNumero = Math.max(n1, n2, n3, n4, n5);

    let media = (n1 + n2 + n3 + n4 + n5 - maiorNumero - menorNumero) / 3;

    res.innerHTML = `Média: ${media}`;
})