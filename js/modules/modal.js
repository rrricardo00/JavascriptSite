export default function modal() {

    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const ContainerModal = document.querySelector('[data-modal="container"]');

    if (botaoAbrir && botaoFechar && ContainerModal) {

        function toggleModal(event) {
            event.preventDefault();
            ContainerModal.classList.toggle('ativo');

        }

        function cliqueForaModal(event) {

            if (event.target === this) {
                toggleModal(event);
            }

        }

        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        ContainerModal.addEventListener('click', cliqueForaModal);
    }


}



