var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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