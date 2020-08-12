// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// const cep = fetch('estilo.css');

// cep.then(resolucao => {
//     return resolucao.text();
// })
//     .then(body => {

//         const conteudo = document.querySelector('.conteudo');
//         const style = document.createElement('style');
//         style.innerHTML = body;
//         conteudo.innerText = body;
//         conteudo.appendChild(style);

// });
//-------------------------------------------------------------------
// const pegarSite = fetch('./sobre.html');
// const div = document.createElement('div');

// pegarSite.then(response => response.text()).then(response => {

//     div.innerHTML = response;
//     const titulo = div.querySelector('h1');
//     const mudarTitulo = document.querySelector('h1');
//     mudarTitulo.innerText = titulo.innerText;

// });
//-------------------------------------------------------------------img




// const imagem = fetch('_img/img.png');


// imagem.then(response => response
// .blob()).then(response => {

//   const blobUrl = URL.createObjectURL(response);
//   const imagemDom = document.querySelector('img');
//   imagemDom.setAttribute("src", blobUrl);


// });


//-------------------------------------------------clone

// const imagem = fetch('https://viacep.com.br/ws/01001000/json/');


// imagem.then(response => {
//   clone = response.clone();
//   response.text().then(response => console.log(response));
//   clone.json().then(clone => console.log(clone));

// }).then(response => {

//   console.log(response);

// });

const imagem = fetch('https://viacep.com.br/ws/01001000/json/');


imagem.then(response => {

  console.log(response.status);
  // response.headers.forEach(console.log);


});


