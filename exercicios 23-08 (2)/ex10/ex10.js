let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function calcular(){
    let dia = Number(document.querySelector("#dia").value);
    let mes = Number(document.querySelector("#mes").value);
    let ano = Number(document.querySelector("#ano").value);

    let dataAtual = new Date();
    let dataDigitada = new Date(dia, mes - 1, ano);

    let umDiaEmMilissegundos = 1000 * 60 * 60 * 24; // Milissegundos em um dia
    let diferencaEmMilissegundos = dataDigitada - dataAtual;
    let diferencaDias = Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos);

    if (diferencaEmMilissegundos < 0) {
        res.innerHTML = `Digite uma data válida (depois do dia atual)`;
    } else { 
        res.innerHTML = `Dias para chegar nessa data: ${diferencaDias}`;
    }
})