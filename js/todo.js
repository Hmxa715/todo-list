export class Todo{
    constructor(text){
        this.text = text;
        this.completed = false;
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }
}