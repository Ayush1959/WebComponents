import { LionTabs } from "@lion/ui/tabs.js";
import { html } from "lit";

class Tabs extends LionTabs {
  render() {
    return html`
      <slot></slot>
      <slot></slot>
    `;
  }
}

customElements.define("custom-tabs", Tabs);
