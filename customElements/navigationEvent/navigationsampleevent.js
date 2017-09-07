
class CustomNavigationEvent extends HTMLElement {
    /**
     * Se crea o se actualiza una instancia del elemento. Es útil para inicializar el estado
     * , configurar receptores de eventos ocrear un Shadow DOM. Consulta la especificación para 
     * obtener información sobre las restricciones en relación con lo que puedes hacer en el constructor.
     */

    constructor() {
        super();
        this.msg = 'mi nombre es jordi';
        console.log('inicializando CustomNavigationEvent ');
    }

    connectedCallback() {

        // let e = this.createElement('div');
        let shadowRoot = this.attachShadow({ mode: 'open' });
        console.log('a ver el currentScript');
        console.log(document);
        let elemento = document.currentScript.ownerDocument.querySelector('#navigationsimple');
        let templ = elemento.content.cloneNode(true);
        shadowRoot.innerHTML = `<p>${this.msg}</p>
            <style> ${templ.textContent}</style>
           
            <ul id="lista">
                <li><a class="active menu0" href="#home">Home</a></li>
                <li><a class="menu1" href="#menu1">menu1</a></li>
                <li><a class="menu2" href="#menu2">menu2</a></li>
                <li><a class="menu3" href="#menu3">menu3</a></li>
            </ul>
        
        `;

        shadowRoot.querySelectorAll('li').forEach(ele => {
            ele.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                console.log(e.target);
                console.log(e.target.innerHTML);
                console.log(e);
                shadowRoot.querySelectorAll('a').forEach(lista => lista.classList.remove('active'));
                e.target.classList.add('active');
            })

            console.log(ele);
        });

    }//end methodc
    // se registra en el dom.
}
window.customElements.define('custom-navigation-event', CustomNavigationEvent);
console.log('inicializando CustomNavigationEvent ');