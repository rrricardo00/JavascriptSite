const promesa = new Promise(function (resolve, reject) {

    let condicao = true;

    if (condicao)
        resolve('Deu certo');
    else
        reject(Error('Deu erro'));

});


promesa.then(function (resolve) {
    console.log(resolve);
});