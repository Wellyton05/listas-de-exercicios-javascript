let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function verificarData(){
    let dia = Number(document.querySelector("#dia").value);
    let mes = Number(document.querySelector("#mes").value);
    let ano = Number(document.querySelector("#ano").value);


    if (mes < 0 || mes > 11 || dia < 1 || dia > 31) {
        res.innerHTML = "Data inválida!";
    } else {
        let dataObj = new Date(ano, mes - 1, dia);

        // Verificar se o ano, mês e dia resultantes da criação do objeto Date são iguais aos valores fornecidos
        if (dataObj.getFullYear() === ano && dataObj.getMonth() === mes && dataObj.getDate() === dia) {
            res.innerHTML = `Ano: ${dataObj.getFullYear()}`;
        } else {
            res.innerHTML = "Data inválida!";
        }
    }
    
})