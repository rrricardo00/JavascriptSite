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

const small = window.matchMedia('(max-width:720px)').matches;
if (small) {
    const menu = document.querySelector('.menu');
    menu.classList.add('.menu-mobile');
}