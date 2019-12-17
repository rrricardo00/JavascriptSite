const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((element) => {
                element.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }

}

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {;
            item.addEventListener('click', activeAccordion);
        });
    }


}

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({

            behavior: 'smooth',
            block: 'start',

        });

        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth"
        // });
    }


    linksInternos.forEach((element) => {
        element.addEventListener('click', scrollToSection);
    });
}

function scrollAnimado() {
    const section = document.querySelectorAll('.js-scroll');
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
initScrollSuave();
scrollAnimado();