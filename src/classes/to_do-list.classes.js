export class To_doList {

    constructor (){

        this.cargarLocalStorage()
    }

    nuevoTodo (to_do) {
        this.todos.push( to_do );
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
                this.guardarLocalStorage();
                break;
            }
        }

    };
    eliminarCompletados () {
        this.todos = this.todos.filter( to_do => !to_do.status );
        this.guardarLocalStorage();
    }
    guardarLocalStorage () {

        localStorage.setItem('Todo', JSON.stringify(this.todos) );

    }
    cargarLocalStorage () {

        this.todos = ( localStorage.getItem('Todo'))
                   ?  JSON.parse(localStorage.getItem('Todo'))
                   : [] ;

    }

}