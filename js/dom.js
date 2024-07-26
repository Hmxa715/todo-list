export class DOM{
    static renderTodos(todoList){
        const todoListElement = document.getElementById('todo-list');
        todoListElement.innerHTML = '';
        todoList.forEach((todo, index) => {
            const li = document.createElement('li');
            li.dataset.index = index;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            li.appendChild(checkbox);

            const span = document.createElement('span');
            span.textContent = todo.text;
            if(todo.completed){
                span.classList.add('completed');
            }
            li.appendChild(span);

            const button = document.createElement('button');
            button.textContent = 'Delete';
            li.appendChild(button);

            todoListElement.appendChild(li);
        });
    }

    static addTodoToDOM(todo, index){
        const todoListElement = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.dataset.index = index;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        li.appendChild(checkbox);

        const span = document.createElement('span');
        span.textContent = todo.text;
        if(todo.completed){
            span.classList.add('completed');
        }
        li.appendChild(span);

        const button = document.createElement('button');
        button.textContent = 'Delete';
        li.appendChild(button);
        todoListElement.appendChild(li);
    }
}