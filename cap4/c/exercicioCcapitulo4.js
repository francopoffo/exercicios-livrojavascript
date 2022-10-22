let frm = document.querySelector("form");
let resp1 = document.querySelector("h3");
let resp2 = document.querySelector("h4");

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    let valor = frm.inValor.value;

    if(valor < 1){
        resp1.innerText = `Valor insuficiente`;
    }
    else if(valor >= 1 && valor < 1.75){
        let troco = valor % 1;
        resp1.innerText = `Tempo: 30 min`;
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
    else if(valor >= 1.75 && valor < 3){
        let troco = valor % 1.75;
        resp1.innerText = `Tempo: 60 min`;
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
    else if(valor >= 3){
        let troco = valor - 3;
        resp1.innerText = `Tempo: 120 min`;
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }

})