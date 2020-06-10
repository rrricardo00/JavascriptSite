// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

const cep = fetch('./estilos.css');

cep.then(resolucao => {
    return resolucao.text();
})
    .then(body => {

        const conteudo = document.querySelector('.conteudo');
        const style = document.createElement('style');
        style.innerHTML = body;
        conteudo.innerText = body;
        conteudo.appendChild(style);
        
    })