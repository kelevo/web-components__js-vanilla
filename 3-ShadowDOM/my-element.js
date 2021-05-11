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
                <h2 class="title">Hola mundo!!</h2>
                <div>
                    <p>Soy mas texto ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
            <style>
                .title {
                    color: red;
                }
                p {
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