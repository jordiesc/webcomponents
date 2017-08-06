class PersonalData extends HTMLElement {
    /**
     * Se crea o se actualiza una instancia del elemento. Es útil para inicializar el estado
     * , configurar receptores de eventos ocrear un Shadow DOM. Consulta la especificación para 
     * obtener información sobre las restricciones en relación con lo que puedes hacer en el constructor.
     */

    constructor() {
        super();
        this.msg = 'mi nombre es jordi';
    }
    /**
     * Se llama cada vez que se inserta el elemento en el DOM. 
     * Es útil para ejecutar código de configuración, como la obtención de recursos 
     * o la representación. En general, debes intentar demorar el trabajo hasta este momento
     */
    connectedCallback() {
        this.innerHTML = `<p>${this.msg}</p>`;
    }
}
// se registra en el dom.
window.customElements.define('personal-data', PersonalData);

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
    
    `;
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



window.customElements.define('personal-addres', PersonalAddres);