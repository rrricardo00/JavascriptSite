// console.log(window.history.pushState(null, null, 'sobre.html'))

// window.addEventListener('popstate', () =>{
//     console.log('teste')
// })


const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', handleClick);
});

async function fetchPage(url) {
    document.querySelector('.content').innerText = "Carregando";
    const pageResponse = await fetch(url);
    const pagetext = await pageResponse.text();
    replaceContent(pagetext);
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;
    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href)
}

window.addEventListener('popstate', () => {

    fetchPage(window.location.pathname)
})


const procurarInput = document.querySelector('.procurarInput');
const botao = document.querySelector('.botao');
const mostrarPokemon = document.querySelector('.mostrarPokemon');

botao.addEventListener('click', pegarPokemon);


function pegarPokemon(event) {
    event.preventDefault();
    const pegar = procurarInput.value;
    pokemon(pegar)
}

async function pokemon(index) {
    document.querySelector('.mostrarPokemon').innerText = "carregando";
    if (index) {
        const pegar = await fetch("https://pokeapi.co/api/v2/pokemon");
        const mostrar = await pegar.json();
        mostrarPokemon.innerText = mostrar.results[+index - 1].name;
    } else {
        mostrarPokemon.innerText = "Digite um resultado"
    }


}

// pokemon()
//bulbasaur