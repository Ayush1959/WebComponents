import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
class TabList extends LitElement {
  @property({ reflect: true })
  slotName = "tab-list";

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      height: 80px;
    }
  `;
  render() {
    return html` <slot> </slot>`;
  }
}

customElements.define("tab-list", TabList);
