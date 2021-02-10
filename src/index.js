
import {To_do, To_doList} from './classes';
import './styles.css';
import { crearTodoHtml } from './js/componentes';
// import img from './assets/tinto.jpg';


export const to_doList = new To_doList();


to_doList.todos.forEach( todo => crearTodoHtml( todo ));