
import {To_do, To_doList} from './classes';
import './styles.css';
import { crearTodoHtml } from './js/componentes';
// import img from './assets/tinto.jpg';


export const to_doList = new To_doList();
const tarea     = new To_do('Primera tarea en javascript');
const tarea2    = new To_do('Segunda tarea en javascript');

console.log(to_doList);