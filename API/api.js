// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });

const url = "https://pokeapi.co/api/v2/pokemon/";
// const options = {
//     method: 'HEAD'
//     body: '{"Title": "JS2", "Conteudo": "Aulas Hards" }',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8",
//     }

// }

// fetch(url, options)
// .then(promise=>promise.json())
// .then(promise => console.log(promise));

// fetch(url, options)
// .then(promise=>console.log(promise.headers.forEach(console.log)));

fetch(url)
.then(promise=>promise.text())
.then(promise => console.log(promise));