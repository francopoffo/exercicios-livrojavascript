const frm = document.querySelector("form");
const resp = document.querySelector("#resp");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let chinchilas = Number(frm.inChinchila.value);
    let anos = Number(frm.inAnos.value);
    let resposta = "";
    
    resposta = resposta + "1" + "º Ano: " + chinchilas + " Chinchilas" + "\n";   

    for(let i = 2; i < (anos+1); i++){
        if(chinchilas <= 2){
            resp.innerText = "O número de chinchilas deve ser maior que 2."
        }
        
        chinchilas = 3 * chinchilas;
        resposta = resposta + i + "º Ano: " + chinchilas + " Chinchilas" + "\n";    
        

    }
    
    resp.innerText = resposta;

})