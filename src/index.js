
import {To_do, To_doList} from './classes';
import './styles.css';
import { crearTodoHtml, contador } from './js/componentes';
// import img from './assets/tinto.jpg';


export const to_doList = new To_doList();

const almacenados = to_doList.contador();

console.log(almacenados);



to_doList.todos.forEach( todo => crearTodoHtml( todo ));