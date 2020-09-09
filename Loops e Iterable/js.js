const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));

for (const fruta of frutas) {
    console.log(fruta)
}

for (const char of frase) {
    console.log(char);
}


const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
    btn.style.color = 'blue';
}

console.log(...buttons);

const carro = {
    marca: 'Honda',
    ano: 2018,
}


for (const key in carro) {
    console.log(key, carro[key]);
}


for (const index in frutas) {
    console.log(frutas[index]);
}


const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for (const style in btnStyles) {
    // console.log(`${style}: ${btnStyles[style]}`);
}

