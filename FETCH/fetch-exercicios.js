
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
  // fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()).then(response => console.log(response.value))
}


piada();

// CORONA---------------------------------------------------------------------------------------

const cors = document.querySelector('.corona');


function corona() {

  fetch('https://covid19-brazil-api.now.sh/api/report/v1')
    .then(response => response.json())
    .then(response => {
      const numero = response.data.length;
      for (let i = 0; i <= numero; i++) {
        const novo = document.createElement('p');
        novo.innerText = response.data[i].state + ' tem ' + response.data[i].cases;
        novo.classList.add('paragrafo-cors');
        novo.style.flex = "1";
        novo.style.margin = "20px";
        cors.appendChild(novo);
        const stringNova = novo.innerText.split('tem').join('<br/>');
        novo.innerHTML = stringNova;



      }


    }

    );


}

corona();
