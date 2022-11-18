const $form = document.querySelector('#form');
let resp = document.querySelector('#resp');
const listBtn = document.querySelector('#listBtn');
const tableBtn = document.querySelector('#tableBtn');

const listaDeClubes = [];

$form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let clubes = $form.inClube.value;

    if(clubes == ''){
        return alert("Você precisa digitar o nome de um clube")
    }

    listaDeClubes.push(clubes);
    $form.reset();
    console.log(listaDeClubes);
})

listBtn.addEventListener('click', (e) =>{
    let resumo = ""
    let aux = 1;

    if(listaDeClubes.length == 0){
        return alert("Não existe nenhum clube na lista");
    }
    for (const clube of listaDeClubes){
        resumo += aux + ". " + clube + '\n';
        aux += 1;
    }
    resp.innerText = resumo;
})

tableBtn.addEventListener('click', (e) =>{
    let tabela = ""
    let maximo = listaDeClubes.length / 2;
    
    console.log(maximo)

    if((listaDeClubes.length % 2) != 0){
        return alert("Você precisa informar um número par de clubes para gerar a tabela");
    }

    for(let i = 0; i < maximo; i++){
        tabela += `${listaDeClubes[i]}  x  ${listaDeClubes.reverse()[i]}\n`
        listaDeClubes.reverse();
    }
    resp.innerText = tabela;
})