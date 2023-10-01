let res = document.querySelector("#res");
let nome1= document.querySelector("#nome1");
let nome2= document.querySelector("#nome2");
let nome3= document.querySelector("#nome3");
let nome4= document.querySelector("#nome4");
let nome5= document.querySelector("#nome5");


let botao = document.querySelector("#botao").addEventListener("click", function funcao () {
    let idade1 = Number(document.querySelector("#idade1").value)
    let idade2 = Number(document.querySelector("#idade2").value)
    let idade3 = Number(document.querySelector("#idade3").value)
    let idade4 = Number(document.querySelector("#idade4").value)
    let idade5 = Number(document.querySelector("#idade5").value)

    let maiorIdade = Math.max(idade1, idade2, idade3, idade4, idade5);

    if (maiorIdade === idade1){
        res.innerHTML = `Mais velho(a): ${nome1.value}`;
    } else if (maiorIdade === idade2){
        res.innerHTML = `Mais velho(a): ${nome2.value}`;
    } else if (maiorIdade === idade3){
        res.innerHTML = `Mais velho(a): ${nome3.value}`;
    } else if (maiorIdade === idade4){
        res.innerHTML = `Mais velho(a): ${nome4.value}`;
    } else if (maiorIdade === idade5){
        res.innerHTML = `Mais velho(a): ${nome5.value}`;
    } else {
        res.innerHTML = 'As idades são iguais! ';
    }
})