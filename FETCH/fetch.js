const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(resolucao => {
    return resolucao.json();
})
    .then(body => {
        
        const elemento = document.createElement('div');
        elemento.classList.add('classe');
        elemento.innerText = body.logradouro;
        document.body.appendChild(elemento);
        
       
    })