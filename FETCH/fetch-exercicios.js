
const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector ('#btn');
const resultadoCep = document.querySelector ('.resultadoCep');

btnCep.addEventListener('click', handleClick);


function handleClick(event){
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response =>{
    return response.json();
  }).then(response =>{
    resultadoCep.innerText = response.localidade;
    
  })
}

