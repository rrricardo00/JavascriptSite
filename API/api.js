// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
    method: 'HEAD'
    // body: '{"Title": "JS2", "Conteudo": "Aulas Hards" }',
    // headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    // }


}

fetch(url, options)
.then(promise=>promise.json())
.then(promise => console.log(promise));