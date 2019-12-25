import {Hello,MyHola} from './module/module.js'
//import MyHola from './module/module.js'


var he = new Hello("instanciando Hello clas");

he.greeting();

console.log("antes del define");
customElements.define("my-hola", MyHola);

console.log("despues del define");

