class myElement extends HTMLElement {
    constructor() {
        super();
        // Instancia de shadowDOM
        this.attachShadow({ mode: "open" });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot name="title"></slot>
                </h2>
                <p>
                <slot name="parrafo"></slot></p>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        // ::sloted 1.-etiqueta que esta por fuera
        // (*) simbolo de todo
        return `
            <style>
                ::slotted(span) {
                    font-size: 30px;
                    color: red;
                }
                ::slotted(.texto) {
                    color: blue;
                }
            </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        // True dice que clone todos los elementos anidados
    }

    connectedCallback() {
        this.render();
    }
};

customElements.define('my-element', myElement);