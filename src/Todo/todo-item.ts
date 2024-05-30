import { LitElement, html } from "lit";
import {
  customElement,
  property,
} from "./../../node_modules/lit/decorators.js";

@customElement("todo-item")
class TodoItem extends LitElement {
  @property({ type: Number }) todoId!: number;
  @property({ type: String }) todoTitle = "";
  @property({ type: Boolean }) done = false;

  override render() {
    return html`
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

  private _toggleDone(e: Event) {
    this.done = (e.target as HTMLInputElement).checked;
    this._dispatchChangeEvent();
  }

  private _updateTitle(e: Event) {
    this.todoTitle = (e.target as HTMLInputElement).value;
    this._dispatchChangeEvent();
  }

  private _deleteItem() {
    this.dispatchEvent(
      new CustomEvent("delete-item", {
        detail: this.todoId,
        bubbles: true,
        composed: true,
      })
    );
  }

  private _dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("update-item", {
        detail: {
          todoId: this.todoId,
          todoTitle: this.todoTitle,
          done: this.done,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "todo-item": TodoItem;
  }
}
