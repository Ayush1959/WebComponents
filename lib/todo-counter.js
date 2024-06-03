import { __decorate } from "tslib";
import { LitElement, html } from "./../node_modules/lit";
import { customElement, property } from "./../node_modules/lit/decorators.js";
let TodoCounter = class TodoCounter extends LitElement {
    constructor() {
        super(...arguments);
        this.completedTasks = 0;
        this.todoListLength = 0;
    }
    render() {
        return html `
      ${this.todoListLength === 0
            ? html ` <h4>No tasks</h4> `
            : html `
            <h4>
              ${this.completedTasks} completed
              ${this.completedTasks === 1 ? "task" : "tasks"} out of
              ${this.todoListLength}
              ${this.todoListLength === 1 ? "task" : "tasks"} in total
            </h4>
          `}
    `;
    }
};
__decorate([
    property({ type: Number })
], TodoCounter.prototype, "completedTasks", void 0);
__decorate([
    property({ type: Number })
], TodoCounter.prototype, "todoListLength", void 0);
TodoCounter = __decorate([
    customElement("todo-counter")
], TodoCounter);
export { TodoCounter };
//# sourceMappingURL=todo-counter.js.map