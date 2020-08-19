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

//ARRAY E ITERAÇÃO-------------------------------
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

//TUDO É OBJETO
//OBJETOS---------------
//OBJECT.CREATE(OBJETO, PROPRIEDADES)
//CONT TESTE = {}
//OBJECT.assign(alvo, obj1, obj2) - irá modificar o objeto alvo
//OBJECT.defineProperties(alvo, propriedades) - adiciona ao alvo novas propriedades - define propriedades de um objeto que serão imutáveis - há get e set
//Object.getOwnPropertDescriptors(obj, 'tbm uma propriedade unica') - lista todos os métodos e propriedades
//Object.key(obj)
//Object.values(obj)
//Object.entries(obj) - retorna as chves e os valores
//Object.getPrototypeOf(obj)
//Object.is(object1, object2) compara se são iguais
//Object.freeze() - impede mudança nas mpropriedades
//Object.seal() - previne add de novass propriedades e impede que atuais sejam deletadas
//Object.preventExtensions() - previne add de novas propriedades
//{}.constructor - retorna função construtora do objeto
//{}.hasOwnProperty('propriedade')
//{}.propertyIsEnumerable('propriedade')
//{}.isPrototypeOf(valor) - verifica se é o protótipo do valor passado
//{}.toString() - object.prototype.toString.call(objeto(ou this)); -> qual o tipo de objeto

//DATASET----------------------------------
// A propriedade HTMLElement.dataset permite o acesso, em modo de leitura e escrita, a todos os atributos de dados personalizado (data-*) no elemento. Ele é um mapa de DOMString, com uma entrada para cada atributo de dados personalizado.
// O nome de um atributo de dados customizado inicia com data-. Ele deve conter somente letras, números e os seguintes caracteres: dash (-), dot (.), collon(:), underscore (_). Além disso, ele não deve conter letras ASCII captalizadas (A à Z)

//MODULES-----------------------------------
//nativo do es6
//manunteção
//compartilhamento
//export default apenas para 1 exportação de dentro do módulo
//import * as teste from '/path' - importa todas as funções de un módulo. Usar caso não saiba o nome das funções (ou qualuqer outra coisa) - tudo pode ser exportado

//NAMED EXPORTS - Em módulos ao Exportar mais de um valor, usar {a,b,c} para especificar cada valor, nome importado deve ser igual ao exportado 
//export funtion a() {}
//export funtion b() {}
//import {a, b} from 'path.js';
//a();
//b();
//'use strict' - por padrão, modules estão no modo 'use strict'

//SETTIMEOUT-------------------------------------
//setTimeout(callback, tempo, arg1, arg2, ...) - metodo assíncrono que ativa o callback após tempo
//se não passar tempo, entra na fila de callstak imediamtamente.
//Loop com setTimeout------------------------------
// for (let index = 0; index < 20; index++) {
//     setTimeout(() => {
//         console.log(index)
//     }, 1000*index);
// }
//------------------------------------------------------
//this - no setTimeout sempre será o window, tem q usar arrow fucntion, pois usa o contexto de this do objeto pai e não do objeto master (que seria window.setTimeout)
//SETINTERVAL()-------------------------------
//setInterval(callback, tempo, arg1, arg2,...) - ativa callback toda vez que a quantidade de tempo passar
//clearInterval(var) - para o serinterval, precisa colocar  setInterval em uma variável

//DATE---------------------------------------------------
//const agora = new Date()
//gettime() - mostar o tempo toal em milisegundos desde 1 de janeiro de 1970


//AULA  timeStamp
//------------------------------------------------------------
// const agora = new Date();
// const futuro = new Date('Dec 17 2020')
// console.log(agora.getMonth())
// console.log(futuro)


// function transformar(tempo) {
//     return Math.floor(tempo / (24 * 60 * 60 * 1000));
// }

// const a = agora.getTime()
// const b = futuro.getTime()
// const c= b-a;
// console.log(transformar(c))
//------------------------------------------------------------

//FORMS------------------------------------------------
//formulários
//document.forms
//document.forms.contato - form com nome contato
//document.forms[0].elements[0].value - valor do primeiro
//values - retorna o valor do elemento no formulário
//evento 'keyup' - para ficar de olho no evento e puxar o valor sempre que ele mudar. (vai digitando e vai pegando o valor) - nao pega voz
//evento 'change' dispara quando houver mudanças  (ativa o change quando muda o campo)

//VALIDAÇÃO FORMS--------------------------------------------
//checkValidity - verifica se input com required é válido
//validationMessage possui a mensagem padrão de erro do browser
//setCustomValidity('') - usado pra modificar a mensagem padrão de erro do browser

//SÍNCRONO E ASSÍNCRONO
// SÍNCRONO - Espera tarefa acabar para passar para a próxima
// ASSÍNCRONO - Move para a próxima tarefa antes da anterior terminar. Trabalho será executado no 'fundo' e quanto terminado, será colocado na fila (task queue)
//Ex: setTimeout, Ajax, Promises, Fetch, Async

//PROMISES-----------------------------------------------
//função construtora de promessas. 
//then() - utilizado para continuar quando algo dá certo, podendo cascatear
//catch() - para retornar um erro
//finally() - executará a função anônima assim que a promessa acabar - executa se independente se resultado for rejeitado ou não
//Promise.all([valores]); - Retornará uma nova promise assim que todas as promises dentro dela foram resolvidas ou pelo menos uma rejeitada. Retorna uma array com as respostas de cada Promise - espera o tempo da última promise resolver
//Promise.race([valore]) - parecido com Promise.All() - diferença que a pimeira promise resolvida, vai resolver a promise do race.
//Promises possuem o método then() - só será atuvado quando a promise for resolvida. O argumento da callback será o valor passado na função resolve
//promesa.then(function (resolucao){
// console.log(resolucao); -----------> vai imprimir o log 'deu certo'
// });
/*EXEMPLO:
const promesa = new Promise(function(resolver, rejeitar){
resolver('deu certo');
rejeitar();
});
FIM EXEMPLO
*/

//FETCH API
//PERMITE FAZER REQUISIÇÕES HTTP ATRAVÉS DO MÉTODO FETCH() - SEMPRE VAI RETORNAR UM RESPONSE
//.text() - retorna o conteúdo - podem ser utilziados vários formatos, pegar html e trasnformar em texto
//.jons() - retorna o json 
//.blob() - tipo de objeto utilizado para representação de dados de um arquivo
//.clone() - transformar uma resposta em diferentes valores e não modificar sempre o mesmo
//pegar html de uma pagina trabahlar ela em outra página
//.status e .ok - retorna o status da requisição = 200, 404, 300, 202, etc 
//.url - retorna a url da requisição
//.type - retorna o tipo da resposta (basic - requisição dentro do próprio servidor)

//JSON-----------------------------------------------------------------------
//aspas duplas - obrigatórias
//organizador de dados
//composto por chave e valor
//interpretado em diferentes linguagens
// JSON.parse() - transforma texto json em um objeto javascript
// JSON.stringify() - transforma objeto json em uma string json


//API-----------------------------------------------------------------------
// Headers
// Cache - Control
// Tempo que o arquivo deve ficar em cache em segundos.Ex: public, max - age=3600
// Content - Type
// Tipo de conteúdo.Ex: text / html; charset = utf - 8. Indicar o tipo de arquivo principalmente em métodos POST e PUT.
// Lista de Headers


//METHODS
// GET - Puxa informação, utilizado para pegar posts, usuários e etc.
// POST - Utilizado para criar posts, usuários e etc.
// PUT - Geralmente utilizado para atualizar informações.
// DELETE - Deleta uma informação.
// HEAD - Puxa apenas os headers.

//HEADERS
//cache-control
//content-type
//etc... (ver mozilla headers)

//CORS
//gerencia como deve ser o compartilhamento de recursos entre diferente origens.
//Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

//ASYNC / AWAIT-----------------------------------------------------------------
//função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar.
//await só vai na parte que retornam promesas, ex: await fetch('url');
//O resultado da expressão à frente de await tem que ser uma promise. 
//try / catch

//HISTORY API-----------------------------------------------------------------
//window.history
//window.history.back()
//window.history.forward()
//window.history.pushState(null, null, string) - será mais usado com fetch
//popstate - eventListener, executa função quando clicar no botão "voltar" ou "próximo", só ativa quando tiver um pushState 

//CLASSE-----------------------------------------------------------------
//FUNCAO CONSTRUTORA = CRIAR OBEJTOS, function classe(item1, item2){this.item1 = "x"; this.item2 = "y"} - new classe("ex1", "ex2");
//class
//syntactical sugar - usa sistema de protótipos de uma funcao construtuora para criar a classe
//static - diferente de prototype, nao precisara criar um novo objeto, podera acessar a funcao direta. exemplo: const botao = botao.funcaoEstatica();
//static - nao tem como acessar por protoipo, tem que acessar direto
//static - mais utilizado para retornar criação de um objeto com valores já predefinidos: return new Button('ex1', 'ex2')
//get
//set
//subClasses - extends
//super - usado para acessar a classe pai e acesar seus metodos e propriedades

//FUNCTION EXPRESSION-----------------------------------------------------------------
//delcarar função a partir de uma variável - const somar = function(a, b){return a+b}
//codigo tem que vir apos, pois vai para dead zone antes no hoisting

//FACTORY FUNCTION-----------------------------------------------------------------
//Não precisa do operador new
//possibilidade de criar métodos e variáveis privados - só nao retornar o objeto
//Ice Factory =  Object.freeze() - evita que o usuário sobrescreva o retorno do objeto
//Ice Factoty - se for em módulos, usar 'use strict'
//Constructor Function / Factory Function - Não precisa do operador new