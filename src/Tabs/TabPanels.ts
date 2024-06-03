import { LitElement, css, html } from "lit";

class TabPanels extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      height: 80px;
      width: 500px;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("tab-panels", TabPanels);
