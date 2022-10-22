let frm = document.querySelector("form");
let resp1 = document.querySelector("h3");
let resp2 = document.querySelector("h4");

frm.addEventListener('submit', (e) => {

    e.preventDefault();

    let ladoA = Number(frm.inA.value);
    let ladoB = Number(frm.inB.value);
    let ladoC = Number(frm.inC.value);

    if((ladoA < (ladoB + ladoC)) && (ladoC < (ladoA + ladoB)) && (ladoB < (ladoA + ladoC))){
        resp1.innerText = `Lados podem formar um triângulo.`;
        
        if((ladoA == ladoB && ladoA != ladoC) || (ladoA == ladoC && ladoA != ladoB) || (ladoB == ladoC && ladoB != ladoA)){
            resp2.innerText = `Tipo: Isósceles.`
        }
        else if((ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC)) {
            resp2.innerText = `Tipo: Equilátero.`
        }
        else{
            resp2.innerText = `Tipo: Escaleno.`
        }
    }
    else{
        resp1.innerText = `Lados não podem formar um triângulo`;
    }

})