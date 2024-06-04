import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("tab-panel")
export class TabPanel extends LitElement {
  static styles = css`
    :host {
      display: none;
    }

    :host([selected]) {
      display: block;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
