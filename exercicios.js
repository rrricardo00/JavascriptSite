/* const img = document.querySelectorAll('img');
console.log(img);

const imagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens);

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

const primeiro = document.querySelector('.animais-descricao h2');
console.log(primeiro);

const ultimo = document.querySelectorAll('p');
console.log(ultimo[ultimo.length - 1]); */

//------------------ARROW FUNCTION------------------------------

/* const imgs = document.querySelectorAll('img'); */
/* 
imgs.forEach(function(element, index, array) {
    console.log(element, index, array);

}); */


/* imgs.forEach((element) => {
    console.log(element);
}); */

//1 elemento, não usa ';'
/* imgs.forEach(element => console.log(element)); */

/* const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(element => {
    console.log(element.textContent);
}); */

/* const menu = document.querySelector('.menu'); */

/* menu.classList; */
/* 
const h2 = document.querySelector('h2');
const pegar = h2.getBoundingClientRect();

if (pegar.top < 0) {
    console.log('Passou do scroll');

}

console.log(

    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight,
    window.pageYOffset,
    window.pageXOffset

); */

/* const tamanho = window.matchMedia('(max-width:600px)').matches;

if (tamanho) {
    console.log('Usuário mobile')
} else {
    console.log('Usuário table>desktop')
} */

/* function somarImagens() {
    const imgs = document.querySelectorAll('img');
    let soma = 0;
    imgs.forEach(element => {
        soma += element.offsetWidth;
    });
    console.log(soma);
}


window.onload = () => {
    somarImagens();
} */

/* const links = document.querySelectorAll('a');

links.forEach(element => {
    const lado = element.offsetWidth;
    const altura = element.offsetHeight;


    if (lado >= 48 && altura >= 48) {
        console.log('Todos os links estão no padrão google');
    } else {
        console.log("Nem todos os links estão padronizados");
    }

}); */

/* const small = window.matchMedia('(max-width:720px)').matches;
if (small) {
    const menu = document.querySelector('.menu');
    menu.classList.add('.menu-mobile');
} */

/* const img = document.querySelector('img');
const animaisLista = document.querySelector('.animais-lista');
const linkExterno = document.querySelector('a[href^="http"]')
const h1 = document.querySelector('h1');

function callback(e) {
    console.log(e);
}

function callbacklLista(event) {
    console.log(event.target, event.type);

}

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(event)
} */


/* function h1click(event) {

    console.log(event.key);
} */

/* animaisLista.addEventListener('click', callbacklLista);
img.addEventListener('click', callback);
linkExterno.addEventListener('click', handleLinkExterno);
h1.addEventListener('click', h1click); */
/* window.addEventListener('keydown', h1click); */

/* const imgs = document.querySelectorAll('img');

imgs.forEach(() => {
    const imgs = document.addEventListener('click', handleImg);
});

function handleImg(event) {
    console.log(event.target);
}
 */

/* const links = document.querySelectorAll('a[href^="#"]');


function handleLink(event) {
    event.preventDefault()
    links.forEach((link) => {
        link.classList.remove('ativa');
    });
    event.target.classList.add('ativa');
}

links.forEach((link) => {
    link.addEventListener('click', handleLink);
}); */

/* function clicar(event) {
    event.target.remove();
}


const todos = document.querySelectorAll('body *');

todos.forEach((element) => {
    element.addEventListener('click', clicar);
}); */

/* function teclado(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('aumentar');
    }
}

window.addEventListener('keydown', teclado); */

/* const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

lista.appendChild(titulo); */

//insertBefore(lista,animais)
//removeChild
//replaceChild(lista, animais)

//-----------------------NOVOS ELEMENTOS

/* const novoh1 = document.createElement('h1');
novoh1.innerHTML = "TÍTULO FINAL";
novoh1.classList.add('titulo');

mapa.appendChild(novoh1); */

/* const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1); */
/* const h1 = document.querySelector('h1'); */

// const lista = document.querySelector('.animais-lista');

//objetos constructor

// function Carro() {
//     this.marca = 'Marca';
//     this.preco = 0;
// }

// honda = new Carro();
// honda.qualquercoisa = "qualquercoisa";

// function Dom(seletor) {

//     this.element = () => {
//         return document.querySelector(seletor);
//     }
//     this.ativar = () => {
//         this.element().classList.add('ativar');
//     }
// }

// const li = new Dom('li');
// const liUltimo = new Dom('li:last-child');
// const ul = new Dom('ul');

// function Dom(elemento) {
//     const element = document.querySelectorAll(elemento);
//     this.elements = element;
//     this.addClass = (classe) => {
//         element.forEach((element) => {
//             element.classList.add(classe);
//         });
//     }
//     this.removeClass = (classe) => {
//         element.forEach((element) => {
//             element.classList.remove(classe);
//         });
//     }
// }

// const lista = new Dom('li');

// const lista = ['cachorro', 'gato', 'pinguim'];

//TRANSFORMAR EM ARRAY--------------------------------------------------------
// const lista = Array.prototype.slice.call('variavel');  ou
// Array.from('variavel')
//----------------------------------------------------------------------------


// function Pessoa(nome, sobrenome, idade) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
// }

// Pessoa.prototype.nomeCompleto = function() {
//     return `${this.nome} ${this.sobrenome} tem ${this.idade} anos`;
// }

// const ricardo = new Pessoa('Ricardo', 'Rosa', 29);

//NATIVOS---------------------------------------------
//
//OBJECT
//STRING
//ARRAY
//FUNCTION
//
//
//DO HOST---------------------------------------------
//DOM
//NODELIST
//HTMLCOLLECTION
//ELEMENT

