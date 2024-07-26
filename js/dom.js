export class DOM{
    static renderTodos(todos){
        const todoListElement = document.querySelector('#todo-list');
        todoList.innerHTML = '';
        todoList.forEach((todo, index) => {
            const li = document.createElement('li');
            li.id = index;
            li.textContent = todo.text;
            if(todo.completed){
                li.classList.add('completed');
            }
            const button = document.createElement('button');
            button.textContent = 'Delete';
            li.appendChild(button);
            todoListElement.appendChild(li);
        });
    }

    static addTodoToDOM(todo, index){
        const todoListElement = document.querySelector('#todo-list');
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.dataset.index = index;
        if(todo.completed){
            li.classList.add('completed');
        }
        const button = document.createElement('button');
        button.textContent = 'Delete';
        li.appendChild(button);
        todoListElement.appendChild(li);
    }
}