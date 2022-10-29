const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let numero = frm.inNumero.value;
    let resposta = `Divisores do ${numero}: `;
    let soma = 0;

    for (let i = (numero/2); i >= 1; i--){
        if(numero % i == 0){
            resposta = resposta + i + `, `;
            soma = soma + i;
        }
    }
    resposta = resposta + `(Soma: ${soma})`;

    resp1.textContent = resposta;
    
    if(numero == soma){
        resp2.textContent = `${numero} é um número perfeito.`
    }
    else{
        resp2.textContent = `${numero} não é um número perfeito.`
    }


})