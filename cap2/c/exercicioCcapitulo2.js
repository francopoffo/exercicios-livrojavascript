let frm = document.querySelector("form");
let resp1 = document.querySelector("h3");
let resp2 = document.querySelector("h4");

frm.addEventListener('submit', (evento) => {
    produto = frm.inProduto.value;
    preco = frm.inPreco.value;
    valorFinal = preco * 2.5;
    precoTerceiro = preco / 2;

    resp1.innerText = produto + ' - Promoção: Leve 3 por R$: ' + valorFinal.toFixed(2);
    resp2.innerText = 'O terceiro produto custa apenas R$: ' + precoTerceiro.toFixed(2);

    evento.preventDefault();


})
