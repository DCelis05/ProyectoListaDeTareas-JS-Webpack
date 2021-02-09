
import {To_do} from '../classes/to_do.classes';
import {to_doList} from '../index';

const htmlList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');


export const crearTodoHtml = (todo) => {

    const Html =
        `<li class=" ${ (todo.status) ? 'completed' : '' }" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.status) ? 'checked' : '' } >
                <label> ${ todo.tarea } </label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;
    const div = document.createElement('div');
    div.innerHTML = Html;

    htmlList.append(div.firstElementChild);
    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup', ( event ) => {

    if (event.keyCode === 13 && txtInput.value.length > 0){

        console.log (txtInput.value);
        const nuevoTodo = new To_do( txtInput.value );
        to_doList.nuevoTodo( nuevoTodo );

        crearTodoHtml ( nuevoTodo );
        txtInput.value = '';
    }
});





