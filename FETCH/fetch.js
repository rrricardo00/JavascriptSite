// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// const cep = fetch('estilo.css');

// cep.then(resolucao => {
//     return resolucao.text();
// })
//     .then(body => {

//         const conteudo = document.querySelector('.conteudo');
//         const style = document.createElement('style');
//         style.innerHTML = body;
//         conteudo.innerText = body;
//         conteudo.appendChild(style);

// });



const pegarSite = fetch('./sobre.html');
const div = document.createElement('div');

pegarSite.then(response => response.text()).then(response => {
 
    div.innerHTML = response;
    const titulo = div.querySelector('h1');
    const mudarTitulo = document.querySelector('h1');
    mudarTitulo.innerText = titulo.innerText;
    
});