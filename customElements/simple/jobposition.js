class JobPosition extends HTMLElement {
    constructor() {
        super();
        this._job;        
        //this.addEventListener("click", e => {
            
        
        //this.botnlistener(e);  
        //e.preventDefault();
        //e.stopPropagation();
     
        //})
        

    }

    static get observedAttributes() {
        return ['job'];
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
        let joblocal = this._job;
        let evento = new CustomEvent('test', { detail: joblocal,
                                                bubbles: true });
        this.dispatchEvent(evento);
       });
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        
        if (attrName === 'job') {
            this._job = newVal;
            
        }
    }
    

    
}



window.customElements.define('job-position', JobPosition);


function recogerevento(event) {
   console.log("esta,ps em recpger evemtp");
    console.log(event.detail);
    console.log("cabado el recoger evento");
   // console.log(event);
}

