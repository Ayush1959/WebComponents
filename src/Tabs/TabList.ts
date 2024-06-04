import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("tab-list")
export class TabList extends LitElement {
  static styles = css`
    :host {
      display: flex;
      border-bottom: 2px solid #ccc;
      margin-bottom: 1rem;
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
