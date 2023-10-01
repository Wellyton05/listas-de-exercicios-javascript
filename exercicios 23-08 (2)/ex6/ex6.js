let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function funcao(){
    let dia = Number(document.querySelector("#dia").value);
    let mes = Number(document.querySelector("#mes").value);
    let ano = Number(document.querySelector("#ano").value);

    let dataObj = new Date(ano, mes - 1, dia);

    let diaDoMes = dataObj.getDate() + 7;; //formatar o dia 
    let nomeMes = dataObj.toLocaleString('pt-BR', { month: 'long' }); //formatar o mes 
    let anoFormatado = dataObj.getFullYear(); //formatar o ano


    res.innerHTML = `Data: ${diaDoMes} de ${nomeMes} de ${anoFormatado}`;
}) 
