class myElement extends HTMLElement {
    constructor() {
        super();
        // Instancia de shadowDOM
        this.attachShadow({ mode: "open" });
    }

    // Observador, le vamos a decir que atributos va a observar siemopre
    // si hay mas que no estan aqui no nos interesan solo los que
    // esten aqui son los que el componente entonces va a estar
    // observando de forma constante y gracias al
    // attributeChangedCallback vamos a poder
    // ver los cambios de forma dinamica
    static get observedAttributes() {
        // "dar de alta las variables en el observador"
        return ['title', 'parrafo', 'img'];
    }

    // Este metodo recibe 3 parametros (funciona como un forEach)
    // 1 - valor actual
    // 2 - valor viejo
    // 3 - nuevo valor
    attributeChangedCallback(attr, oldVal, newVal) {
        // Cambios de acuerdo a lo que exista en los atributos
        if(oldVal !== newVal) {
            this[attr] = newVal;
        }
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