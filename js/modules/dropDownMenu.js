import outSideClick from './outSideClick.js';

export default function dropDownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu => {
        const cliques = ['touchstart', 'click'];
        cliques.forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        });

    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outSideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    }

}



