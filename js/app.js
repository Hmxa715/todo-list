import { Todo } from './todo.js';
import { Storage } from './storage.js';
import { DOM } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const todoList = Storage.getTodos();
    console.log('initial todo list', todoList);
    DOM.renderTodos(todoList);

    document.getElementById('add-todo').addEventListener('click', () => {
        console.log('clicked');
        const todoText = document.getElementById('new-todo').value;
        if(todoText.trim()){
            const newTodo = new Todo(todoText);
            todoList.push(newTodo);
            Storage.saveTodos(todoList);
            DOM.addTodoToDOM(newTodo, todoList.length - 1);
            document.getElementById('new-todo').value = '';
        }
    });

    document.getElementById('todo-list').addEventListener('click', (e) => {
        console.log("todo list clicked");
        if(e.target.tagName === 'BUTTON'){
            const index = e.target.parentElement.dataset.index;
            todoList.splice(index, 1);
            Storage.saveTodos(todoList);
            DOM.renderTodos(todoList);
        } else if(e.target.tagName === 'LI'){
            const index = e.target.dataset.index;
            const todo = todoList[index];
            todo.toggleCompleted();
            Storage.saveTodos(todoList);
            DOM.renderTodos(todo, index);
        }
    });

    document.getElementById('todo-list').addEventListener('change', (e) =>{
        if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox'){
            const index = e.target.parentElement.dataset.index;
            const todo = todoList[index];
            todo.toggleCompleted();
            Storage.saveTodos(todoList);
            DOM.renderTodos(todoList);
        }
    });

    document.getElementById('container').addEventListener('click', (e) => {
        console.log("container clicked, e.target", e.target);
    });
});