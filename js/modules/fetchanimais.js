import numeros from './numeros.js';

export default function fetchAnimais() {


    async function fetchAnimals(url) {
        try {
            const animaisResponse = await fetch(url);
            const animaisJson = await animaisResponse.json();
            const numerosGrid = document.querySelector('.numeros-grid');

            animaisJson.forEach(element => {
                const divAnimal = createAnimals(element);
                numerosGrid.appendChild(divAnimal);
            });
            numeros();
        } catch (error) {
            console.log(error);
        }

    }



    function createAnimals(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    fetchAnimals('../Animais Fetch Api/animais.json');
}

