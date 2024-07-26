import { Todo } from './todo.js';
import { Storage } from './storage.js';
import { DOM } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
    const todoList = Storage.getTodos();
    DOM.renderTodos(todoList);

    document.getElementById('add-todo').addEventListener('click', () => {
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
        if(e.target.tagName === 'BUTTON'){
            const index = parseInt(e.target.parentElement.dataset.index);
            todoList.splice(index, 1);
            Storage.saveTodos(todoList);
            DOM.removeTodoFromDOM(todoList);
        } else if(e.target.tagName === 'LI'){
            const index = parseInt(e.target.dataset.index);
            const todo = todoList[index];
            todo.toggleCompleted();
            Storage.saveTodos(todoList);
            DOM.updateTodoInDOM(todo, index);
        }
    });
});