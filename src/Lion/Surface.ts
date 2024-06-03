import { customElement, property } from "lit/decorators.js";

import { LitElement, css, html } from "./../../node_modules/lit";

@customElement("custom-surface")
export class CustomSurface extends LitElement {
  static override styles = css`
    :host {
      justify-content: center;
      align-items: center;
      display: flex;
      margin: 20px;
      min-height: 100px;
      min-width: 100px;
      background: white;
      color: black;
    }
  `;

  @property({ type: Boolean, reflect: true })
  isSurface = true;

  @property({ reflect: true })
  surface = "default";

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-surface": CustomSurface;
  }
}
