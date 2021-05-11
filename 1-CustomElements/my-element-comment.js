// Creamos nuestro template
const template = document.createElement('div');
// Le agregamos HTML a nuestro template
template.innerHTML = `
    <style>
        p {
            color: blue;
        }
        .texto {
            color: red;
        }
    </style>
    <p class="texto">Hola mundo 2!!</p>
    <p>texto ejemplo para la clase</p>
`;

class myElement extends HTMLElement {
    // Ciclo de vida del elemento
    // 1._ Constructor -> inicializamos todo lo que almacenaremos en memoria
    // para despues agregarlo al DOM
    constructor() {
        super();

        // JS Vanilla para generar nodos
        this.p = document.createElement('p')
    }
    // Busca la clase JS para entender que tiene que agregar al DOM
    connectedCallback() {
        // Le asignamos contenido a p
        this.p.textContent = 'Hola mundo!!';
        // Agregamos a p al DOM
        this.appendChild(this.p);
        // Agregamos template al DOM
        this.appendChild(template);
    }
}
// customElements.define('nombre de la etiqueta', clase de donde viene)
customElements.define('my-element', myElement);

// document.createElement: Crea una nueva etiqueta en memoria
// element.setAttribute: Establece un atributo a alguna etiqueta
// element.getAttribute: Obtiene el atributo de una etiqueta
// element.textContent: Establece el contenido en texto de una etiqueta
// element.innerHTML: Establece el contenido HTML de una etiqueta
// element.appendChild: Inserta esa etiqueta que estaba en memoria al DOM real