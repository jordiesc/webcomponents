export default class Third {
    mensage:string;
    constructor(mensage:string){
        this.mensage = mensage;
    }
    getMensage():string {
        return 'tercer mensege is'+this.mensage;
    }
}