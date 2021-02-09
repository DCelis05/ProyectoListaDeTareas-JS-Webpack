export class To_doList {

    constructor (){
        this.todos = [];
    }

    nuevoTodo (to_do) {
        this.todos.push( to_do );
    };
    eliminarTodo (id) {

    };
    marcarCompletada (id) {

        for ( const todo of this.todos){

            if( todo.id == id){
                todo.status = !todo.status;
                break;
            }
        }

    };
    eliminarCompletados (id) {

    }
}