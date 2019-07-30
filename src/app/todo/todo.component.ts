import { Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";

import Todo  from '../models/Todo';


@Component({
    selector: "ns-todo",
    moduleId: module.id,
    templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit {
    surprise: boolean
    newtask = '';
    todos: Array<Todo>

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor() { }

    ngOnInit(): void { 
        this.refreshTodos();
    }

    refreshTodos() {
        Todo.find().then((todos) => {
            console.log(todos)
            this.todos = todos
        }).catch(console.error)
    }

    addTodo() {
        
        console.log('el valor del textfield es: ' + this.newtask);
        const todo = new Todo(this.newtask, false);
        todo.save().then(() => this.refreshTodos())
            .catch(console.error)
    }
}