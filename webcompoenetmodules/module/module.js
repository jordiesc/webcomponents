export class MyHola extends HTMLElement {
	constructor() {
		super();
	}
  connectedCallback() {
    console.log("connectedCallback");
	this.innerHTML = "<b>I'm an web compoenet</b>";
  }


}

export class Hello {
	constructor(mensaje){
		this.mensaje = mensaje;
		this.greeting(this.mensaje);	
	}

	greeting() {
		console.log("hola from greeting"+this.mensaje);
	return "";
	}		
}


