const carro = {
  marca: "honda",
  ano: 2020
}

const { marca, ano } = carro;

// console.log(marca, ano)


//-------------------------------------

const cliente = {
  nome: 'Ricardo',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

// const {livros, videos} = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

// const {digitais, digitais:{livros, videos}} = cliente.compras;
// console.log(livros);


//NESTING-------------------------------------

const cliente2 = {
  nome: 'Ricardo',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

// const { fisicas, digitais, digitais: { livros, videos } } = cliente2.compras;

// console.log(fisicas);
// console.log(livros);
// console.log(videos);
// console.log(digitais);


//PROPRIEDADES

const cliente3 = {
  nome: "Ricardo",
  compras: 200
}


const { nome: nomeRicardo, email = "email@gmail.com" } = cliente3; //mudar variavel nome para nomeRicardo
// console.log(nomeRicardo, email)

//ARRAYS----------------------------------------------
const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;


//EVENTO-----------------------------------------------------

// function handleKeyboard(event) {
//   console.log(event);
// }

// COM DESTRUCTURING
function handleKeyboard({key, keyCode}) {
  // console.log(key, keyCode);
}


document.addEventListener('keyup', handleKeyboard);
