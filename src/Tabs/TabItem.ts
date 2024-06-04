import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("tab-item")
export class TabItem extends LitElement {
  static styles = css`
    :host {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border: 1px solid transparent;
    }
    :host(:hover),
    :host([hover]) {
      background-color: #f0f0f0;
    }
    :host([selected]) {
      background-color: #fff;
      border: 1px solid #ccc;
      border-bottom: 2px solid #007bff;
      font-weight: bold;
    }
  `;
  render() {
    return html`<slot></slot>`;
  }
}
