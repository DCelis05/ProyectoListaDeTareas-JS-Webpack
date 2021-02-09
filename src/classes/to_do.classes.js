 export class To_do {

    constructor (tarea) {
        this.tarea = tarea;
        this.id     = new Date().getTime();
        this.status = false;
        this.fecha  = new Date();
    }
 }