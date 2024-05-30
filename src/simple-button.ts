import { LitElement, css, html } from "./../node_modules/lit";
import { customElement, property } from "./../node_modules/lit/decorators.js";

@customElement("simple-button")
export class SimpleButton extends LitElement {
  static override styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name?: string = "World";

  override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "simple-button": SimpleButton;
  }
}
