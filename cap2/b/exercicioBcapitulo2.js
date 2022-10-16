let frm = document.querySelector("form");
let resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    let valor15 = frm.inValor15.value;
    let minutosTotal = frm.inTempoUso.value;

    let valorFinal = (minutosTotal/15)*valor15;

    resp.innerText = 'Valor a pagar R$: ' + valorFinal.toFixed(2);

    e.preventDefault();
})