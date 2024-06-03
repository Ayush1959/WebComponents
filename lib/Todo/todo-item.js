import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { customElement, property, } from "./../../node_modules/lit/decorators.js";
let TodoItem = class TodoItem extends LitElement {
    constructor() {
        super(...arguments);
        this.todoTitle = "";
        this.done = false;
    }
    render() {
        return html `
      <div class="item">
        <input
          type="checkbox"
          .checked=${this.done}
          @change=${this._toggleDone}
        />
        <input
          type="text"
          .value=${this.todoTitle}
          @input=${this._updateTitle}
        />
        <button @click=${this._deleteItem}>Delete</button>
      </div>
    `;
    }
    _toggleDone(e) {
        this.done = e.target.checked;
        this._dispatchChangeEvent();
    }
    _updateTitle(e) {
        this.todoTitle = e.target.value;
        this._dispatchChangeEvent();
    }
    _deleteItem() {
        this.dispatchEvent(new CustomEvent("delete-item", {
            detail: this.todoId,
            bubbles: true,
            composed: true,
        }));
    }
    _dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent("update-item", {
            detail: {
                todoId: this.todoId,
                todoTitle: this.todoTitle,
                done: this.done,
            },
            bubbles: true,
            composed: true,
        }));
    }
};
__decorate([
    property({ type: Number })
], TodoItem.prototype, "todoId", void 0);
__decorate([
    property({ type: String })
], TodoItem.prototype, "todoTitle", void 0);
__decorate([
    property({ type: Boolean })
], TodoItem.prototype, "done", void 0);
TodoItem = __decorate([
    customElement("todo-item")
], TodoItem);
//# sourceMappingURL=todo-item.js.map