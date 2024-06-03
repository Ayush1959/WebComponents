import { LionTabs } from "@lion/ui/tabs.js";
//@ts-ignore
class MyTabs extends LionTabs {
  constructor() {
    super();
  }

  firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    this.__setupSlots();
  }

  __setupSlots() {
    console.log("second");
    console.log(this.shadowRoot);
    if (this.shadowRoot) {
      const tabSlot = this.shadowRoot.querySelector("slot[name=tab]");
      const handleSlotChange = () => {
        //@ts-ignore
        this.__cleanStore();
        //@ts-ignore
        this.__setupStore();
        //@ts-ignore
        this.__updateSelected(false);
        console.log("xxxxxx");
      };
      console.log("second tab slot", tabSlot);
      if (tabSlot) {
        tabSlot.addEventListener("slotchange", handleSlotChange);
      }
    }
  }
}

customElements.define("soi-tabs", MyTabs);
