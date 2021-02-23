
import {To_do} from '../classes/to_do.classes';
import {to_doList} from '../index';

const htmlList        = document.querySelector('.todo-list');
const txtInput        = document.querySelector('.new-todo');
const btnStatus       = document.querySelector('.clear-completed');
const ulFiltros       = document.querySelector('.filters');
const aFiltros        = document.querySelectorAll('.filtro');

export const contador = document.querySelector('.todo-count');

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


htmlList.addEventListener("click", (event) =>{

    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    // console.log(todoId);
    if(nombreElemento.includes('input')){

        to_doList.marcarCompletada(todoId);
        todoElemento.classList.toggle('completed');

    } else if (nombreElemento.includes('button')) {
        to_doList.eliminarTodo( todoId );
        htmlList.removeChild( todoElemento );

    }

})

btnStatus.addEventListener('click', () => {

    to_doList.eliminarCompletados();
    for (let i = htmlList.children.length-1; i >=0; i--) {

        const elemento = htmlList.children[i];

        if(elemento.classList.contains('completed')){

            htmlList.removeChild(elemento);

        }
    }
})

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if(!filtro) { return; }

    aFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const elemento of htmlList.children ){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){

            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});






