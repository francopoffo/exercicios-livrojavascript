let frm = document.querySelector("form");
let resp = document.querySelector("h3");

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    let velocidadePermitida = frm.inPermitida.value;
    let velocidadeCondutor = frm.inCondutor.value;

    
    if((velocidadeCondutor / velocidadePermitida) <= 1){
        resp.innerText = `Situação: Sem multa`;
        
    }
    else if((velocidadeCondutor / velocidadePermitida) <= 1.2){
        resp.innerText = `Situação: Multa leve`;
        
    }
    else {
        resp.innerText = `Situação: Multa grave`;
        
    }
})