//import { TaskRow } from "./taskrow";

class TaskTable extends HTMLElement {

    constructor() {
        super(); // always call super() first in the ctor.
        this.tasks = [];
        this.tasks.push(new Task('1','tarea1'));
        this.tasks.push(new Task('2','tarea2'));
        this.tasks.push(new Task('3','tarea3'));
    }

    tasks: Array<Task>;    


    connectedCallback() {

        let htTable: HTMLTableElement = document.createElement('table');
        //let htHeader: HTMLTableRowElement = document.createElement('tr');
        htTable.innerHTML= `<tr><th>name</th><th>description</th></tr>`;
        console.log(htTable);
        //this.tasks.forEach(row => htTable.tBodies[0].appendChild(row.getDOM()));
        this.tasks.forEach(row => htTable.appendChild(row.getDOM()));
        this.appendChild(htTable);

    }

}

class Task {

    constructor(name:string,description:string) {
        this._name = name;
        this._description = description;
        
    }

    _name: string;
    _description: string;

    getDOM():HTMLElement {
        let row = document.createElement('TR');
    
        let hdName = document.createElement('TD');
        hdName.innerHTML = this._name;
        let hdDescription = document.createElement('TD')
        hdDescription.innerHTML = this._description;
        row.appendChild(hdName);
        row.appendChild(hdDescription);

        return row;
    }
}



window.customElements.define('task-table', TaskTable);

