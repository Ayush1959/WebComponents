import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("tab-list")
export class TabList extends LitElement {
  static styles = css`
    :host {
      display: flex;
      border-bottom: var(--tab-list-border-bottom, 1px solid #e0e0e0);
    }
  `;
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    this.slot = "tab-list";
  }

  render() {
    return html` <slot> </slot>`;
  }
}
