import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("counter-element")
class CounterElement extends LitElement {
  @property({ type: Number, reflect: true }) count = 0;

  static override styles = css`
    button {
      font-size: 20px;
    }
  `;

  override render() {
    return html`
      <p>Count: ${this.count}</p>
      <button @click=${this.increment}>Increment</button>
    `;
  }

  increment() {
    this.count += 1;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "counter-element": CounterElement;
  }
}
