export default function scrollAnimado() {
    const section = document.querySelectorAll('[data-anime="scroll"]');
    const windowMetade = window.innerHeight * 0.6;
    section[0].classList.add('ativo');

    function animaScroll() {

        if (section.length) {
            section.forEach((element) => {
                const sectionTop = element.getBoundingClientRect().top - windowMetade;
                if (sectionTop < 0) {
                    element.classList.add('ativo');
                } else if(element.classList.contains('ativo')) {
                    element.classList.remove('ativo');
                }
            });
        }

    }

    window.addEventListener('scroll', animaScroll);
}