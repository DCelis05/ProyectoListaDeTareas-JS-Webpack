import { contador } from "../js/componentes";

export class To_doList {

    constructor (){

        this.cargarLocalStorage();
        this.contador();
    }

    nuevoTodo (to_do) {
        this.todos.push( to_do );
        this.contador();
        this.guardarLocalStorage();
    };
    eliminarTodo (id) {
        this.todos = this.todos.filter( to_do => to_do.id != id );
        this.guardarLocalStorage();
    };
    marcarCompletada (id) {

        for ( const todo of this.todos){

            if( todo.id == id){
                todo.status = !todo.status;
                this.contador();
                this.guardarLocalStorage();
                break;
            }
        }


    };
    eliminarCompletados () {
        this.todos = this.todos.filter( to_do => !to_do.status );
        this.contador();
        this.guardarLocalStorage();
    }
    guardarLocalStorage () {

        localStorage.setItem('Todo', JSON.stringify(this.todos) );

    }
    cargarLocalStorage () {

        this.todos = (localStorage.getItem('Todo'))
                   ? JSON.parse(localStorage.getItem('Todo'))
                   : [] ;

    }

    contador () {
        let pendientes = 0;
        let contadorTodo = contador.firstElementChild;
        for (let todo of this.todos){
            (todo.status === false) ? pendientes ++ : null;
        }
        contadorTodo.innerHTML = pendientes;
    }

}