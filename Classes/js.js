// class Button{
//     constructor(options){
//         this.options = options;
//     }
//     static createButton(text, background, color){
//         const buttonElement = document.createElement('btn');
//         buttonElement.innerText = text;
//         buttonElement.style.backgroundColor = background;
//         buttonElement.style.color = color;
//         return buttonElement;
//     }

// }

// const blueButton = new Button({
//     backgroundColor: 'blue',
//     color: '#fff',
//     text: 'Compre já'

// })


// const greenButton = Button.createButton("Compre já", "green", "#fff");
// console.log(greenButton);

//-----------------------------------------------------------------------------------
class Button{
    constructor(text, background, color){
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target){
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element())
        return targetElement;
    }
    static blueButton(text){
        return new Button(text, 'blue', "#fff");
    }
    
}

const botao = Button.blueButton("Transfira já");
botao.appendTo("body")


// console.log(blueButton.appendTo("body"));
//-----------------------------------------------------------------------------------
// function Button(text, background){
//     this.text = text;
//     this.background = background;
// }

// Button.prototype.element = function(){
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
// }

// Button.prototype.teste = {
//     "Tipo": "Arejado",
//     "quantidade": 2
// }


