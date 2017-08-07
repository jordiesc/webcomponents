class JobPosition extends HTMLElement {
    constructor() {
        super();
        this._job;
        this._ontest;        

    }

    static get observedAttributes() {
        return ['job','ontest'];
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

    get ontest() {
        return this.hasAttribute('ontest');
    }

    set ontest(val) {
        if (val) {
            this.setAttribute('ontest', '');

        } else {
            this.removeAttribute('ontest');
        }
    }    

    connectedCallback() {
        console.log('en callback')
        this.innerHTML =
            `   <p>my job is</p>
         <input type="text" name="job" value=${this._job}><br>
         <button class="button">estas contento </button>      
    
    `;

       let mybutton = this.querySelector('.button').addEventListener('click',e => {
        e.preventDefault();
        e.stopPropagation();
        
        let evento = new CustomEvent('test', { detail: "custom event del button",
                                                bubbles: true });
        this.dispatchEvent(evento);
       });
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        
        if (attrName === 'job') {
            this._job = newVal;     
        }
        if (attrName === 'ontest') {
            console.log(attrName,newVal)
            this._ontest = newVal;  
            let funcion = Function(newVal);
            this.addEventListener('test',funcion);   
        }
    }
    

    
}



customElements.define('job-position', JobPosition);


function recogerevento(event) {
   console.log("antes de recoger el evento");
    console.log(event,event.detail);
    console.log("despues de recoger el evento");
   // console.log(event);
}

