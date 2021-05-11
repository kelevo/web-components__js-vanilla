class myElement extends HTMLElement {
    constructor() {
        super();
        // Instancia de shadowDOM
        this.attachShadow({ mode: "open" });

        this.title = this.getAttribute('title');
        this.parrafo = this.getAttribute('parrafo');
        this.img = this.getAttribute('img');
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.parrafo}</p>
                    <img src="${this.img}" />
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
            <style>
                h2 {
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