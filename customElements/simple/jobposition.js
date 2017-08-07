class JobPosition extends HTMLElement {
    constructor() {
        super();
        this._job;
        this._onclickok;
        this._onclickko;        

    }

    static get observedAttributes() {
        return ['job','onclickok','onclickko'];
    }

    get job() {
        return this.hasAttribute('job');
    }

    set job(val) {
        if (val) {
            this.setAttribute('job', '');

        } else {
            this.removeAttribute('job');
        }
    }

    get onclickok() {
        return this.hasAttribute('onclickok');
    }

    set onclickok(val) {
        if (val) {
            this.setAttribute('onclickok', '');

        } else {
            this.removeAttribute('onclickok');
        }
    }
    
    
    get onclickko() {
        return this.hasAttribute('onclickko');
    }

    set onclickko(val) {
        if (val) {
            this.setAttribute('onclickko', '');

        } else {
            this.removeAttribute('onclickko');
        }
    }

    connectedCallback() {
        console.log('en callback')
        this.innerHTML =
            `   <p>my job is</p>
         <input type="text" name="job" value=${this._job}><br>
         <button class="buttonok">me gusta </button>
         <button class="buttonko">no me gusta</button>       
    
    `;

    this.querySelector('.buttonok').addEventListener('click',e => {
       e.preventDefault();
       e.stopPropagation();
        
        let evento = new CustomEvent('clickok', { detail: "custom event del button clickOK",
                                               bubbles: true });
        console.log(evento);                                       
        this.dispatchEvent(evento);
       });

    this.querySelector('.buttonko').addEventListener('click',e => {
       e.preventDefault();
       e.stopPropagation();
        
        let evento = new CustomEvent('clickko', { detail: "custom event del button clicKO",
                                                bubbles: true });
        console.log(evento);
        this.dispatchEvent(evento);
       });
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        
        if (attrName === 'job') {
            this._job = newVal;     
        }
        if (attrName === 'onclickok') {
            console.log(attrName,newVal)
            this._onclickok = newVal;  
            let funcion = Function(newVal);
            console.log('evnto clickOKregistrado',funcion);
            this.addEventListener('clickok',funcion);   
        }
        if (attrName === 'onclickko') {
            console.log(attrName,newVal)
            this._onclickko = newVal;  
            let funcion = Function(newVal);
            console.log('evnto clickKKregistrado',funcion);
            this.addEventListener('clickko',funcion);   
        }
    }
    

    
}



customElements.define('job-position', JobPosition);


function recogerevento(event) {
   console.log("antes de recoger el evento");
   console.log(event,event.detail);
   console.log("despues de recoger el evento");
   window.alert(event.detail);
   console.log(event);
}

