import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("tab-item")
export class TabItem extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
      padding: var(--tab-item-padding, 12px 16px);
      color: var(--tab-item-color, rgba(0, 0, 0, 0.6));
      font-size: var(--tab-item-font-size, 14px);
      text-transform: var(--tab-item-text-transform, uppercase);
      border-bottom: var(--tab-item-border-bottom, 2px solid #e0e0e0);
      background: var(--tab-item-background, none);
      transition: color 0.3s, border-bottom 0.3s;
    }
    :host(:hover),
    :host([hover]) {
      color: var(--tab-item-hover-color, rgba(0, 0, 0, 0.87));
    }
    :host([selected]) {
      color: var(--tab-item-selected-color, #1976d2);
      border-bottom: var(--tab-item-selected-border-bottom, 2px solid #1976d2);
      font-weight: var(--tab-item-selected-font-weight, 500);
    }
  `;
  render() {
    return html`<slot></slot>`;
  }
}
