const $form = document.querySelector('#form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');
const orderBtn = document.querySelector('#orderBtn');

const listaNumero = [];

$form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let resumo = "";
    let numero = Number($form.inNumero.value);
    if(listaNumero.includes(numero)) return alert("Não é permitido informar números iguais.")
    listaNumero.push(numero);
    console.log(listaNumero);
    
    if(listaNumero.length == 1){
        resumo += numero;
    }else{
            for(const item of listaNumero){
                resumo = listaNumero.join(', ')
        }   
    }

    resp1.innerText = 'Números: ' + resumo + '.';
    resumo = ""
    $form.reset();
})

orderBtn.addEventListener('click', () =>{
    const listaOrdenada = listaNumero.slice().sort();

    console.log(listaNumero);
    console.log(listaOrdenada);
        
    if(JSON.stringify(listaNumero) == JSON.stringify(listaOrdenada)){
        return alert("A lista está em ordem crescente")
    }else{
        return alert("Alerta... a lista não está em ordem crescente")
    }
})