let res = document.querySelector("#res");
let multiplos = "";

for (let cont = 1; cont <= 100; cont++){
    if (cont % 3 == 0 || cont % 5 == 0){
        multiplos += cont + " ";
    }
}
res.innerHTML = multiplos;