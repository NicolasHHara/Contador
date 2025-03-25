const btnsomar = document.getElementById ("soma")
const btnmenos = document.getElementById ("menos")
let result = document.getElementById ("numb0")

btnsomar.addEventListener("click", () => {
    let convert = parseInt(result.innerHTML, 10);
    let soma = convert + 1;
    result.innerHTML = soma;
});

btnmenos.addEventListener("click", () => {
    let convert = parseInt(result.innerHTML, 10);
    let menos = convert - 1;
    if(result.innerHTML == 0){
        result.innerHTML = 0;
    }
    else{
        result.innerHTML = menos;
    }
});