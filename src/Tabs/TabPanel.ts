import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

class TabPanel extends LitElement {
  @property({ reflect: true })
  slotName = "tab-panel";
  static styles = css`
    :host {
      color: blue;
      margin: 20px;
    }
  `;
  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("tab-panel", TabPanel);
