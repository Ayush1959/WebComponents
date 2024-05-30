import { LitElement } from "./../node_modules/lit";
export declare class TodoCounter extends LitElement {
    completedTasks: number;
    todoListLength: number;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "todo-counter": TodoCounter;
    }
}
//# sourceMappingURL=todo-counter.d.ts.map