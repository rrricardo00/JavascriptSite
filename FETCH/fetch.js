const doc = fetch('./doc.txt');

doc.then(resolucao => {
    return resolucao.text();
})
    .then(body => {
        const elemento = document.createElement('div');
        elemento.classList.add('classe')
        elemento.innerText = body;
        document.body.appendChild(elemento)
       

    })