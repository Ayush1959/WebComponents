import { LitElement, html, css } from "lit";
import { customElement, property } from "./../node_modules/lit/decorators.js";

@customElement("my-button")
export class MyButton extends LitElement {
  static override styles = css`
    :host {
      padding: 8px 16px;
      font-size: 12px;
      background-color: #6200ea;
      color: blue;
      border-radius: 4px;
      cursor: pointer;
    }

    :host([disabled]) {
      background-color: #cccccc;
      color: white;
      cursor: not-allowed;
    }
    :host([appearance="primary"]) {
      background-color: red;
      color: blue;
    }
    :host([appearance="secondary"]) {
      background-color: black;
      color: white;
    }
  `;

  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) appearance: "primary" | "secondary" | "default" =
    "default";

  // ?disabled=${this.disabled === "false" ? false : true}
  override render() {
    return html` <slot> </slot> `;
  }

  // Handle button click
}

declare global {
  interface HTMLElementTagNameMap {
    "my-button": MyButton;
  }
}
