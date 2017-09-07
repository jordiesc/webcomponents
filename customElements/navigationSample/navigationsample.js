
class CustomNavigation extends HTMLElement {
    /**
     * Se crea o se actualiza una instancia del elemento. Es útil para inicializar el estado
     * , configurar receptores de eventos ocrear un Shadow DOM. Consulta la especificación para 
     * obtener información sobre las restricciones en relación con lo que puedes hacer en el constructor.
     */

    constructor() {
        super();
        this.msg = 'mi nombre es jordi';
    }

    connectedCallback() {

       // let e = this.createElement('div');
        let shadowRoot = this.attachShadow({ mode: 'open' });
        let elemento = document.currentScript.ownerDocument.querySelector('#navigationsimple');
        let templ = elemento.content.cloneNode(true);
        shadowRoot.innerHTML = `<p>${this.msg}</p>
            <style> ${templ.textContent}</style>
           
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#menu1">menu1</a></li>
                <li><a href="#menu2">menu2</a></li>
                <li><a href="#menu3">menu3</a></li>
            </ul>
        
        `;
       
    }
}

console.log('cargando fichero navigationsample.js');
// se registra en el dom.

/** 
class PersonalAddres extends HTMLElement {
    constructor() {
        super();
        this._calle;
        this._numero;
    }

    static get observedAttributes() {
        return ['calle', 'numero'];
    }

    static get observedAttributes() {
        return ['calle', 'numero'];
    }
    get calle() {
        return this.hasAttribute('calle');
    }

    set calle(val) {
        if (val) {
            this.setAttribute('calle', '');

        } else {
            this.removeAttribute('calle');
        }
    }

    get numero() {
        return this.hasAttribute('numero');
    }

    set numero(val) {
        console.log("elvalor es" + val + "fin");
        if (val) {
            this.setAttribute('numero', '');

        } else {
            this.removeAttribute('numero');
        }
    }

    connectedCallback() {
        console.log("escribiendo la consola")
        this.innerHTML =
         `   <p>${this._calle}</p>
          <p>${this._numero}</p>
    `
    ;
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        
        if (attrName === 'calle') {
            this._calle = newVal
            
        }

        if (attrName === 'numero') {
            this._numero = newVal
        }
    }
}
*/


window.customElements.define('custom-navigation', CustomNavigation);
window.customElements.define('custom-navigation-event', CustomNavigationEvent);