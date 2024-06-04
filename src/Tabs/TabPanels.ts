import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("tab-panels")
export class TabPanels extends LitElement {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    this.slot = "tab-panels";
  }

  static styles = css`
    :host {
      padding: 1rem;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
