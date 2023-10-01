let res = document.querySelector("#res");

let botao = document.querySelector("#botao").addEventListener("click", function seno(){
    let angulo = Number(document.querySelector("#angulo").value);

    let radianos = angulo * (Math.PI / 180); //precisa transformar em radianos para fazer o cálculo com Math.sin

    res.innerHTML = `Esse ângulo em seno é: ${Math.sin(radianos).toFixed(2)}`;
})