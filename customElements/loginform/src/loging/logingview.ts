
export class LoginForm extends HTMLElement {

    constructor() {
        super();
        this.buildhtml();
    }

    buildhtml(){
        console.log('building html');
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        
       
                           .outer-screen:before{
                           content: "";
                           background: #3e4a53;
                           border-radius: 50px;
                           position: absolute;
                           bottom: 20px;
                           left: 0px;
                           right: 0px;
                           margin: auto;
                           z-index: 9999;
                           width: 50px;
                           height: 50px;
                           }
                           .outer-screen:after{
                           content: "";
                           background: #ecf0f1;
                           width: 900px;
                           height: 88px;
                           position: absolute;
                           bottom: 0px;
                           border-radius: 0px 0px 20px 20px;
                           -moz-border-radius: 0px 0px 20px 20px;
                           -webkit-border-radius: 0px 0px 20px 20px;
                           }
       
                           .stand{
                           position: relative;  
                           }
       
                           .stand:before{
                           content: "";
                           position: absolute;
                           bottom: -150px;
                           border-bottom: 150px solid #bdc3c7;
                           border-left: 30px solid transparent;
                           border-right: 30px solid transparent;
                           width: 200px;
                           left: 0px;
                           right: 0px;
                           margin: auto;
                           }
       
                           .stand:after{
                           content: "";
                           position: absolute;
                           width: 260px;
                           left: 0px;
                           right: 0px;
                           margin: auto;
                           border-bottom: 30px solid #bdc3c7;
                           border-left: 30px solid transparent;
                           border-right: 30px solid transparent;
                           bottom: -180px;
                           box-shadow: 0px 4px 0px #7e7e7e
                           }
       
                           .inner-screen{
                           width: 800px;
                           height: 340px;
                           background: #1abc9d;
                           margin: 0px auto;
                           padding-top: 80px;
                           }
       
                           .form{
                           width: 400px;
                           height: 230px;
                           background: #edeff1;
                           margin: 0px auto;
                           padding-top: 20px;
                           border-radius: 10px;
                           -moz-border-radius: 10px;
                           -webkit-border-radius: 10px;
                           }
       
                           input[type="text"]{
                           display: block;
                           width: 309px;
                           height: 35px;
                           margin: 15px auto;
                           background: #fff;
                           border: 0px;
                           padding: 5px;
                           font-size: 16px;
                           border: 2px solid #fff;
                           transition: all 0.3s ease;
                           border-radius: 5px;
                           -moz-border-radius: 5px;
                           -webkit-border-radius: 5px;
                           }
       
                           input[type="text"]:focus{
                           border: 2px solid #1abc9d
                           }
       
                           input[type="button"]{
                           display: block;
                           background: #1abc9d;
                           width: 314px;
                           padding: 12px;
                           cursor: pointer;
                           color: #fff;
                           border: 0px;
                           margin: auto;
                           border-radius: 5px;
                           -moz-border-radius: 5px;
                           -webkit-border-radius: 5px;
                           font-size: 17px;
                           transition: all 0.3s ease;
                           }
       
                           input[type="button"]:hover{
                           background: #09cca6
                           }
       
                           a{
                           text-align: center;
                           font-family: Arial;
                           color: gray;
                           display: block;
                           margin: 15px auto;
                           text-decoration: none;
                           transition: all 0.3s ease;
                           font-size: 12px;
                           }
       
                           a:hover{
                           color: #1abc9d;
                           }
       
       
                           ::-webkit-input-placeholder {
                           color: gray;
                           }
       
                           :-moz-placeholder { /* Firefox 18- */
                           color: gray;  
                           }
       
                           ::-moz-placeholder {  /* Firefox 19+ */
                           color: gray;  
                           }
       
                           :-ms-input-placeholder {  
                           color: gray;  
                           }
               </style>
       
                   <div class="inner-screen">
                     <div class="form">
                       <input type="text" class="zocial-dribbble" placeholder="Enter your user code" />
                       <input type="text" placeholder="Password" />
                       <input type="button" value="Login" />
                      
                     </div> 
       
               </div>
       
        `;


    }

    connectedCallback() {

        console.log('sacando e elemento');
        console.log( this.querySelector(".inner-screen"));
    }   

}