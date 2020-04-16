export default function initToolTip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach(item => {

        item.addEventListener('mouseover', onMouseOver);

    });


    function onMouseOver(event) {
        const toolTipBox = criarToolTipBox(this);

        onMouseMove.toolTipBox = toolTipBox;
        onMouseMove.element = this;
        onMouseLeave.toolTipBox = toolTipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
        this.addEventListener('mousemove', onMouseMove);

    }

    const onMouseLeave = {

        handleEvent() {
            this.toolTipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
        }

    }

    const onMouseMove = {
        handleEvent(event) {
            this.toolTipBox.style.top = event.pageY + 20 + 'px';
            this.toolTipBox.style.left = event.pageX + 20 + 'px';
            this.element.removeEventListener('mousemove', onmousemove);
        }
    }

    function criarToolTipBox(element) {
        const toolTipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        toolTipBox.classList.add('tooltip');
        toolTipBox.innerText = text;
        document.body.appendChild(toolTipBox);
        return toolTipBox;
    }


}

