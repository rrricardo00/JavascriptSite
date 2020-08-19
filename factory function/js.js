function createButton(text) {

    const numeroSecreto = 'UIU83272837HNDJHQ';


    function element() {
        const buttoElement = document.createElement('button');
        buttoElement.innerText = text;
        return buttoElement;
    }
    return Object.freeze({
        text,
        element
    });
}

const botao = createButton('comprar');
const botao2 = createButton('vender');

//Constructor Function / Factory Function-----------------------------------------------

function Pessoa(nome) {
    if (!(this instanceof Pessoa)) // ou (!new.target)
        return new Pessoa(nome);
    this.nome = nome;
}

Pessoa.prototype.andar = function () {
    return `${this.nome} andou`;
}

const designer = /**new**/ Pessoa('Ricardo');


