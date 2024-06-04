import { LitElement, css, html } from "lit";

import { customElement } from "lit/decorators.js";
import { ModeMixin } from "../Mixins/ModeMixin";
import "./Chip";

@customElement("my-test-button")
export class MyTestButton extends ModeMixin(LitElement) {
  static get styles() {
    return [
      //@ts-ignore
      ...super.styles,
      css`
        :host {
          display: block;
          margin: 20px;
          background-color: var(--background, blue);
          color: var(--color, red);
        }
        :host(:hover),
        :host([hover]) {
          background-color: yellow;
          color: red;
        }
      `,
    ];
  }
  override render() {
    return html`
      <slot> </slot>
      <my-test-chip></my-test-chip>
    `;
  }

  // Handle button click
}

declare global {
  interface HTMLElementTagNameMap {
    "my-test-button": MyTestButton;
  }
}
