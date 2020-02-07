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

//STRING----------------
//CONCAT = CONCATENAR STRINGS
//INCLUDE = PROCURA PALAVRA EM UMA STRING, PODE SER A PARTIR DE ALGUM INDEX
//ENDWITH
//STARTWITH
//STR.SLICE(START, END)
//STR.SUBSTRING
//padStart('valor', 'numero de padding')/padEnd
//split - corta e transforma tudo em array
//join - junta valores de array e retorna string
//trim - end - start - remover esppaços em branco
//colocar '+' na frente de string transforma em número
//replace('x', 'y')


//NUMBER E MATH-----------------------
//parseInt, parseFloat => podem retornar apenas numero de string se espaçados
//numero.tofixed() = arredondar, casa decimal dentro do parenteses
//numero.toString
//numero.toLocaleString = transfomar em moeda

// let valor = 48.50;
// valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
// console.log(valor);

//aleatorio min e max = Math.floor(Math.random() * (max - min + 1) + min)
//... = espread operation = dá cada item do array (vai apssar por cada item), array[0], array[1], etc

//ARRAY-------------------------------
//[].UNSHIFT() - ADICIONA NO INICIO DA ARRAY
//[].PUSH() - ADICIONAR NO FIM DA ARRAY
//[].POP() - REMOVE ULTIMO ITEM DA ARRAY E RETORNA ELE - MODIFICA O ARRAY
//[].SHIFT() - REMOVE PRIMEIRO ITEM DA ARRAY E RETORNA ELE - MODIFICA O ARRAY
//[].REVERSER() - INVERTE A ORDEM DO ARRAY - MODIFICA O ARRAY
//[].SPLICE(index, remover, add)
//[].copyWithin(alvo, inicio, final)
//[].fill() - preencher com o valor
//[].sort()
//NÃO MODIFICAM ARRAY - METODOS DE ACESSO -----------------------------
//[].concat() - concatena arrays
//[].includes(valor) - verificar se tem valor e retorna boolean
//[].indexOf(valor) - retorna o primeiro index que achar
//[].lastindexof(valor) - retorna o último index
//[].slice(inicio, final) - retorna itens do inicio ao fim - usado para clonar arrays

//ARRAY E ITEERAÇÃO-------------------------------
//[].FOREACH(CALLBACK(ITEM,INDEX,ARRAY))
//[].MAP - MESMO QUE O FOREACH, RETONAR ARRAY E NAO UNDEFINED
//[].REDUCE(CALLBACK(ACUMULADOR,VALORATUAL,INDEX,ARRAY), VALORINICIAL) - ACUMULADOR É O RETORNO DA ITERAÇÃO ANTERIOR - FUNCIONA COMO 'INCREMENTO' - se não passar valorinicial, pula o primeiro acumulador no console, mas soma do mesmo jeito, fazendo uma iteração a menos
//[].REDUCE(CALLBACK(ACUMULADOR,VALORATUAL,INDEX,ARRAY), VALORINICIAL) - LÊ ARRAY DA DIREITA PARA ESQUERDA
//[].SOME - RETURN TRUE SE PELO MENOS 1 ARRAY FOR TRUE
//[].VERY - RETURN TRUE SE TIVER TODOS ITENS NO ARRAY
//[].FIND - RETORNA VALOR ATUAL DA PRIMEIRA TRUE
//[].findIndex - RETORNA INDEX VALOR NA ARRAY
//[].FILTER - RETORNA UMA ARRAY COM VALORES QUE ESTÃO NA CONDIÇÃO DOS VALORES DA ARRAY

//FUNCTION---------------------
//.LENGTH
//.NAME
//.CALL(THIS, ARG1, ARG2, ..........) - EXECUTA FUNÇÃO, POSSÍVEL PASSAR NOVA REFERÊNCI AO THIS
//.APLLY(THIS, [ARG1, ARG2,......]) - MESMO DO CALL, ARGUMENTOS DA FUNÇÃO SÃO PASSADOS ATRAVEÉS DE UM ARRAY, PODE PASSAR NULL PARA O THIS
//.BIND(this, arg1, arg 2) - NÃO EXECUTA A FUNÇÃO, RETORNA A MESMA COM NOVO CONTEXTO DO THIS, TERÁ QUE ATIVAR A FUNÇÃO DEPOIS. THIS COMO NULL RETORNA window


//OBJETOS---------------
//OBJECT.CREATE(OBJETO, PROPRIEDADES)
//CONT TESTE = {}
//OBJECT.assign(alvo, obj1, obj2) - irá modificar o objeto alvo
//OBJECT.defineProperties(alvo, propriedades) - adiciona ao alvo novas propriedades - define propriedades de um objeto imutáveis - há get e set

