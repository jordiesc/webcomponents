"use strict";
class PersonalAddres extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
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
        }
        else {
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
        }
        else {
            this.removeAttribute('numero');
        }
    }
    connectedCallback() {
        console.log("escribiendo la consola");
        this.innerHTML =
            `   <p>${this._calle}</p>
                <p>${this._numero}</p>
    `;
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'calle') {
            this._calle = newVal;
        }
        if (attrName === 'numero') {
            this._numero = newVal;
        }
    }
}
window.customElements.define('personal-addres', PersonalAddres);
