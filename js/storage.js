import { Todo } from './todo.js';
export class Storage{
    static getTodos(){
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos).map(todo => Object.assign(new Todo(), todo)) : [];
    }

    static saveTodos(todos){
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}