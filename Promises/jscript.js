const promesa = new Promise((resolve, reject) => {
    let condicao = false;
    if (condicao) {
        setTimeout(() => {
            resolve({ nome: "Ricardo", idade: 29 });
        }, 1000);
    }
    else {
        reject(Error('Um erro ocorreu'));
    }


});


const retorno = promesa.then(resolve => {

    console.log(resolve);
    resolve.profissao = 'programador';
    return resolve;

}).then(resolve => {
    console.log(resolve);

}, rejeitada => {     //Ou usar .catch      
    console.log(rejeitada);
}).finally(()=>{
    console.log('acabou');
});



console.log(retorno);