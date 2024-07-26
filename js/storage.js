export class Storage{
    static getTodos(){
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos, (key, value) =>{
            if(key === ""){
                return value;
            } 
            return new Todo(value.text, value.completed)
        }): [];
    }

    static saveTodos(todos){
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}