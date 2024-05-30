import { LitElement } from "lit";
import "./todo-item";
interface Todo {
    todoId: number;
    todoTitle: string;
    done: boolean;
}
declare class TodoList extends LitElement {
    todoList: Todo[];
    nextId: number;
    render(): import("lit-html").TemplateResult<1>;
    private _addTodo;
    private _updateTodo;
    private _deleteTodo;
}
declare global {
    interface HTMLElementTagNameMap {
        "todo-list": TodoList;
    }
}
export {};
//# sourceMappingURL=todo-list.d.ts.map