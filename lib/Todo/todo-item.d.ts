import { LitElement } from "lit";
declare class TodoItem extends LitElement {
    todoId: number;
    todoTitle: string;
    done: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _toggleDone;
    private _updateTitle;
    private _deleteItem;
    private _dispatchChangeEvent;
}
declare global {
    interface HTMLElementTagNameMap {
        "todo-item": TodoItem;
    }
}
export {};
//# sourceMappingURL=todo-item.d.ts.map