import { LitElement, html } from "./../node_modules/lit";
import { customElement, property } from "./../node_modules/lit/decorators.js";

@customElement("todo-counter")
export class TodoCounter extends LitElement {
  @property({ type: Number }) completedTasks = 0;
  @property({ type: Number }) todoListLength = 0;

  override render() {
    return html`
      ${this.todoListLength === 0
        ? html` <h4>No tasks</h4> `
        : html`
            <h4>
              ${this.completedTasks} completed
              ${this.completedTasks === 1 ? "task" : "tasks"} out of
              ${this.todoListLength}
              ${this.todoListLength === 1 ? "task" : "tasks"} in total
            </h4>
          `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "todo-counter": TodoCounter;
  }
}
