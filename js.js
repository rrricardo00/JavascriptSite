function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((element) => {
                element.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao)
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }

}

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }


}


function scrollAnimado() {
    const section = document.querySelectorAll('[data-anime="scroll"]');
    const windowMetade = window.innerHeight * 0.6;
    section[0].classList.add('ativo');

    function animaScroll() {

        if (section.length) {
            section.forEach((element) => {
                const sectionTop = element.getBoundingClientRect().top - windowMetade;
                if (sectionTop < 0) {
                    element.classList.add('ativo');
                } else {
                    element.classList.remove('ativo');
                }
            });
        }

    }

    window.addEventListener('scroll', animaScroll);
}



initTabNav();
initAccordion();

scrollAnimado();