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


//EXERCICIO------------------------------------
function $$(selectedElements){
 
    const elements = document.querySelectorAll(selectedElements);

    function hide(){
        elements.forEach(element =>{
            element.style.display = "none";
        });
        return this; //se nao retornao o proprio objeto, retornar undefine e nao poderá encadear outro objeto
    }
    function show(){
        elements.forEach(element =>{
            element.style.display = "initial";
        });
        return this; //se nao retornao o proprio objeto, retornar undefine e nao poderá encadear outro objeto
    }

    function on(onEvent, callback){
        elements.forEach(item =>{
            item.addEventListener(onEvent, callback);
        })
        return this;
    }
    function addClass(className){
        elements.forEach(item =>{
            item.classList.add(className);
        })
        return this;
    }
    function removeClass(className){
        elements.forEach(item =>{
            item.classList.remove(className);
        })
        return this;
    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass

    }

} 

const btns = $$('button');

