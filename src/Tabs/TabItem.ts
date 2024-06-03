import { LionTabs } from "@lion/ui/tabs.js";
import { html } from "lit";
import { property } from "lit/decorators.js";
//@ts-ignore
class TabItem extends LionTabs {
  @property({ type: Boolean, reflect: true })
  selected = false;

  @property({ reflect: true })
  slotName = "tab-item";

  // static styles = css`
  //   :host {
  //     color: red;
  //     margin: 20px;
  //     cursor: pointer;
  //   }
  //   :host([selected]) {
  //     color: green;
  //   }
  // `;
  constructor() {
    super();
  }
  firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    this.__setupSlots();
  }

  __setupSlots() {
    if (this.shadowRoot) {
      const tabSlot = this.shadowRoot.querySelector("slot[data-slotName=tab]");
      const handleSlotChange = () => {
        //@ts-ignore
        this.__cleanStore();
        //@ts-ignore
        this.__setupStore();
        //@ts-ignore
        this.__updateSelected(false);
        console.log("yyyyyy");
      };
      console.log("first tab slot", tabSlot);
      if (tabSlot) {
        tabSlot.addEventListener("slotchange", handleSlotChange);
      }
    }
  }
  render() {
    return html`<slot data-slotName="tab"></slot>`;
  }
}

customElements.define("tab-item", TabItem);
