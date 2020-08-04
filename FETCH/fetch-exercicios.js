
const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector('#btn');
const resultadoCep = document.querySelector('.resultadoCep');

inputCep.addEventListener('keyup', handleClick);


function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      return response.text();
    }).then(response => {
      resultadoCep.innerText = response;

    })
}

//BT2 ------------------------------------------------------------------------------------


const btc = document.querySelector(".btc");

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then(response => {
      return response.json();
    }).then(response => btc.innerText = ('R$ ' + response.BRL.buy).replace('.', ',')
    )

}

fetchBtc();
// setInterval(()=>fetchBtc(), 30000);

function piada() {
  fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()).then(response => console.log(response.value))
}


piada();


function corona() {


  fetch('https://covid19-brazil-api.now.sh/api/report/v1')
  .then(response => response.json())
  .then(response => {
    const numero = response.data.length;
    for (let i = 0; i <= numero; i++) {
      console.log(response.data[i].state + ' tem ' + response.data[i].cases + ' casos');
      
    }
    
  }

  );

}

corona();