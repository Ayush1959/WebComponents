import { customElement } from "lit/decorators.js";

import { SurfaceMixin } from "../Mixins/SurfaceMixin";
import { css, html } from "./../../node_modules/lit";

@customElement("custom-surface")
export class CustomSurface extends SurfaceMixin() {
  static styles = css`
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

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-surface": CustomSurface;
  }
}
