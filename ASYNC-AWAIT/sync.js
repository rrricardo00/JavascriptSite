// async function puxarDados() {

//   try {
//     const dadosResponse = await fetch('./dados.json');
//     const dadosJSON = await dadosResponse.json();
//     document.body.innerText = dadosJSON.titulo;
//   } catch (error) {
//     document.body.innerText = error;
//   }

// }

async function puxarDados() {

    const dadosResponse = fetch('./dados.json');
    const clienteResponse = fetch('./clientes.json');

    const dadosJSON = await (await dadosResponse).json();
    const clienteJSON = await (await clienteResponse).json();

    document.body.innerText = dadosJSON.titulo + " " + clienteJSON.nome;

}

puxarDados();




