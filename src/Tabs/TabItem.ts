import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

class TabItem extends LitElement {
  @property({ reflect: true })
  slotName = "tab";

  static styles = css`
    :host {
      color: red;
      margin: 20px;
    }
  `;
  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("tab-item", TabItem);
