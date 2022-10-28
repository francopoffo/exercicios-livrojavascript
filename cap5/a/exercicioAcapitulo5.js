const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let num = Number(frm.inNumero.value);
    let fruta = frm.inFruta.value;
    let resposta = "";

    for(let i = 1; i < num; i++){
        resposta = resposta + fruta + " * "        
    }

    resposta = resposta + fruta;

    resp.innerText = resposta;
})