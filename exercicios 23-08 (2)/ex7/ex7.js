let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function funcao(){
    let dia = Number(document.querySelector("#dia").value);
    let mes = Number(document.querySelector("#mes").value);
    let ano = Number(document.querySelector("#ano").value);

    let dataObj = new Date(ano, mes - 1, dia);

    let diaDoMes = dataObj.getDate();; //formatar o dia 

    res.innerHTML = `Dia: ${diaDoMes}`;
})