import Second from 'second.js'
import {LoginForm} from 'loging/logingview.js'

export let mifuncion = function(){

   let mensage = new Second('hola caracola');
   console.log(mensage.getMensage());
   window.customElements.define('login-form', LoginForm);

   var el:HTMLElement | null  = document.getElementById('MiApplicacion');
   //el!.appendChild( document.createElement('login-form'));
   el!.appendChild( new LoginForm());

}

