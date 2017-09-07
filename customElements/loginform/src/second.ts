import Third from 'third/third'
export default class Second {
    msg:string= '';
    
    constructor(mensage:string) {
        this.msg = mensage;
    }

    getMensage():string {

        let msgfinal = 'my message is '+ this.msg;
        
        return new Third("mi tercer mensage").getMensage()+msgfinal;
    }
}