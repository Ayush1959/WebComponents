import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./todo-item";

interface Todo {
  todoId: number;
  todoTitle: string;
  done: boolean;
}

@customElement("todo-list")
class TodoList extends LitElement {
  @property({ type: Array }) todoList: Todo[] = [];
  @state() nextId = 1;

  override render() {
    return html`
      <div class="list">
        <div class="add-todo">
          <input id="new-todo" type="text" placeholder="Add a new task" />
          <button @click=${this._addTodo}>Add Task</button>
        </div>
        ${this.todoList.map(
          (todo, index) => html`
            <todo-item
              .key=${index}
              .todoId=${todo.todoId}
              .todoTitle=${todo.todoTitle}
              .done=${todo.done}
              @update-item=${this._updateTodo}
              @delete-item=${this._deleteTodo}
            ></todo-item>
          `
        )}
      </div>
    `;
  }

  private _addTodo() {
    const input = this.shadowRoot!.getElementById(
      "new-todo"
    ) as HTMLInputElement;
    const todoTitle = input.value.trim();
    if (todoTitle) {
      this.todoList = [
        ...this.todoList,
        { todoId: this.nextId++, todoTitle, done: false },
      ];
      input.value = "";
    }
  }

  private _updateTodo(e: CustomEvent) {
    const updatedTodo = e.detail as Todo;
    this.todoList = this.todoList.map((todo) =>
      todo.todoId === updatedTodo.todoId ? updatedTodo : todo
    );
  }

  private _deleteTodo(e: CustomEvent) {
    const todoId = e.detail as number;
    this.todoList = this.todoList.filter((todo) => todo.todoId !== todoId);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "todo-list": TodoList;
  }
}
