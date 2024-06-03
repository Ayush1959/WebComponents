import { LionTabs } from "@lion/ui/tabs.js";
import { html } from "lit";
import { property } from "lit/decorators.js";
//@ts-ignore
class TabList extends LionTabs {
  @property({ reflect: true })
  slotName = "tab-list";

  // static styles = css`
  //   :host {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     background-color: black;
  //     height: 80px;
  //   }
  // `;

  constructor() {
    super();
  }

  // firstUpdated(changedProperties: any) {
  //   super.firstUpdated(changedProperties);
  //   this.__setupSlots();
  // }

  // __setupSlots() {
  //   if (this.shadowRoot) {
  //     const tabSlot = this.shadowRoot.querySelector("slot[data-slotName=tab]");
  //     const handleSlotChange = () => {
  //       //@ts-ignore
  //       this.__cleanStore();
  //       //@ts-ignore
  //       this.__setupStore();
  //       //@ts-ignore
  //       this.__updateSelected(false);
  //       console.log("yyyyyy");
  //     };
  //     console.log("first tab slot", tabSlot);
  //     if (tabSlot) {
  //       tabSlot.addEventListener("slotchange", handleSlotChange);
  //     }
  //   }
  // }
  render() {
    return html` <slot data-slotName=${this.slotName}> </slot>`;
  }
}

customElements.define("tab-list", TabList);
