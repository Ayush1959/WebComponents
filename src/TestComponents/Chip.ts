import { LitElement, css, html } from "lit";

import { customElement } from "lit/decorators.js";
import { ModeMixin } from "../Mixins/ModeMixin";

@customElement("my-test-chip")
export class MyTestChip extends ModeMixin(LitElement) {
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
      <slot></slot>

      <slot>hey chipp </slot>
    `;
  }

  // Handle chip click
}

declare global {
  interface HTMLElementTagNameMap {
    "my-test-chip": MyTestChip;
  }
}
