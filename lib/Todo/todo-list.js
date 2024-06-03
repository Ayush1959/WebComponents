import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./todo-item";
let TodoList = class TodoList extends LitElement {
    constructor() {
        super(...arguments);
        this.todoList = [];
        this.nextId = 1;
    }
    render() {
        return html `
      <div class="list">
        <div class="add-todo">
          <input id="new-todo" type="text" placeholder="Add a new task" />
          <button @click=${this._addTodo}>Add Task</button>
        </div>
        ${this.todoList.map((todo, index) => html `
            <todo-item
              .key=${index}
              .todoId=${todo.todoId}
              .todoTitle=${todo.todoTitle}
              .done=${todo.done}
              @update-item=${this._updateTodo}
              @delete-item=${this._deleteTodo}
            ></todo-item>
          `)}
      </div>
    `;
    }
    _addTodo() {
        const input = this.shadowRoot.getElementById("new-todo");
        const todoTitle = input.value.trim();
        if (todoTitle) {
            this.todoList = [
                ...this.todoList,
                { todoId: this.nextId++, todoTitle, done: false },
            ];
            input.value = "";
        }
    }
    _updateTodo(e) {
        const updatedTodo = e.detail;
        this.todoList = this.todoList.map((todo) => todo.todoId === updatedTodo.todoId ? updatedTodo : todo);
    }
    _deleteTodo(e) {
        const todoId = e.detail;
        this.todoList = this.todoList.filter((todo) => todo.todoId !== todoId);
    }
};
__decorate([
    property({ type: Array })
], TodoList.prototype, "todoList", void 0);
__decorate([
    state()
], TodoList.prototype, "nextId", void 0);
TodoList = __decorate([
    customElement("todo-list")
], TodoList);
//# sourceMappingURL=todo-list.js.map