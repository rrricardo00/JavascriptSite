// fetch('./dados.json')
//     .then(promise => promise.json())
//     .then(promise => {
//         promise.forEach(element => {
//             console.log(element);
//         });
//     }

//     )



// fetch('./dados.json')
//     .then(promise => promise.text())
//     .then(promise =>  console.log(JSON.parse(promise)) 
//     )


// fetch('./dados.json')
//     .then(promise => promise.text())
//     .then(promise => {
//         const jsonFinal = JSON.parse(promise);
//     }

//     );

const configuracao = {
    player: "google",
    tempo: 25.5,
    aula: "2.1 JS"
}

// const stringConfig = JSON.stringify(configuracao);
// console.log(configuracao);

localStorage.config = JSON.stringify(configuracao);

console.log(JSON.parse(localStorage.config));