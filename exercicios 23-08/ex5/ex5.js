res = document.querySelector("#res");

botao = document.querySelector("#botao").addEventListener("click", function calcular (){
    let nota1 = Number(document.querySelector("#nota1").value);
    let nota2 = Number(document.querySelector("#nota2").value);
    let nota3 = Number(document.querySelector("#nota3").value);
    let nota4 = Number(document.querySelector("#nota4").value);


    if (nota1 >= 0 && nota1 <=10 && nota2 >= 0 && nota2 <=10 
        && nota3 >= 0 && nota3 <=10 && nota4 >= 0 && nota4 <=10){
            let menorNumero = Math.min(nota1, nota2, nota3, nota4);
            let media = (nota1 + nota2 + nota3 + nota4 - menorNumero) / 3;

            res.textContent = media.toFixed(2);
        } else {
            res.textContent = 'DIGITE NOTAS VÁLIDAS! '
        }
})