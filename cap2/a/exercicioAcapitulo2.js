let frm = document.querySelector("form");
let resp1 = document.querySelector("h3");
let resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    let medicamento = frm.inMedicamento.value;
    let preco = frm.inPreco.value;
    let valor = Math.floor(preco*2);

    resp1.innerText = 'Promoção de ' + medicamento;
    resp2.innerText = 'Leve 2 por apenas R$:' + valor.toFixed(2);

e.preventDefault();

})