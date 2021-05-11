class MyCustomElement extends HTMLElement {
    // 1er estado del ciclo de vida - guardar en memoria
    constructor() {
        super()
        console.log('Hola desde el constructor - Memoria');
    }

    // 2do estado del ciclo de vida - hacer que aparezca en el DOM
    connectedCallback() {
        console.log('Hola desde el DOM');
    }

    // 3er estado del ciclo de vida - retirando el elemento del DOM
    disconnectedCallback() {
        console.log('Adios del DOM');
    }
}

customElements.define('my-custom-element', MyCustomElement);

// Rtirara el elemento una vez que este en el nodo lo borra
document.querySelector('my-custom-element').remove();