async function puxarDados() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.text();
    document.body.innerText = dadosJSON;
  }
  
  puxarDados();
  



