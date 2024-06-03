import { LionTabs } from "@lion/ui/tabs.js";
import { html } from "lit";
import { state } from "lit/decorators.js";
import "./TabList";
import "./TabPanels";
class MyTabs extends LionTabs {
  @state()
  private _selectedIndex: any;
  public get selectedIndex() {
    return this._selectedIndex;
  }
  public set selectedIndex(value) {
    this._selectedIndex = value;
  }
  constructor() {
    super();
  }

  // __setupSlots() {
  //   console.log(this.children);
  //   console.log(Array.from(this.children));
  //   console.log(this.tabs);
  //   if (this.shadowRoot) {
  //     // const tabSlot = this.querySelectorAll("tab-item");
  //     // const handleSlotChange = () => {
  //     //   this.__cleanStore();
  //     //   this.__setupStore();
  //     //   this.__updateSelected(false);
  //     // };
  //     // if (tabSlot) {
  //     //   tabSlot.addEventListener("slotchange", handleSlotChange);
  //     // }
  //   }
  // }
  firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    console.log(this.__store);
    // this.__setupSlots();
    // console.log("this", Array.from(this.querySelectorAll("tab-item")));
    // console.log("item", this.querySelectorAll("tab-item"));
    // console.log(
    //   "ayu",
    //   Array.from(this.querySelectorAll("tab-item")).map(
    //     (item) => item.children[0]
    //   )
    // );

    // console.log("item slot", this.querySelectorAll("tab-item")[0]);
    // console.log("this", this.querySelectorAll("slot[data-slotName='tab']"));
    // console.log("changedProperties", changedProperties);
    // console.log("this.tabs", this.tabs);
    // console.log("this.this.children", this.children[0]);
    // console.log("this.panels", this.panels);
    // console.log("this.children", this.children);
    // console.log("this.tabs", this.tabs);
  }

  // __setupSlots() {
  //   console.log("xxx", this.shadowRoot);
  //   //@ts-ignore
  //   // const tabSlot = this.shadowRoot.querySelector('slot[data-slotName="tab"]');
  //   // console.log({ tabSlot });
  //   // console.log("first");
  //   // console.log("this.tabs", this.tabs);
  //   // console.log("first", this.querySelectorAll("slot[data-slotName=tab]"));
  //   if (this.shadowRoot) {
  //     const tabSlot = this.shadowRoot.querySelector(
  //       "slot[data-slotName='tab']"
  //     );
  //     // const tabSlot = this.querySelectorAll("tab-item");
  //     console.log({ tabSlot });

  //     if (tabSlot) {
  //       //@ts-ignore
  //       // tabSlot.addEventListener("slotchange", handleSlotChange);
  //     }
  //   }
  // }

  //@ts-ignore
  get tabs() {
    return /** @type {HTMLButtonElement[]} */ Array.from(
      this.querySelectorAll("tab-item")
    ).map((item) => item.children[0]);
  }
  //@ts-ignore
  // get tabs() {
  //   return /** @type {HTMLButtonElement[]} */ Array.from(
  //     // this.querySelectorAll('[slot[]="tab-item"]')
  //     //@ts-ignore
  //     this.querySelectorAll("slot[data-slotName=tab]")
  //   );

  //   return Array.from(this.querySelectorAll("tab-item")).filter(
  //     (child: any) => child.slotName === "tab-item"
  //   );
  // }
  //@ts-ignore
  get panels() {
    return /** @type {HTMLButtonElement[]} */ Array.from(
      this.querySelectorAll("tab-panel")
    ).map((item) => item.children[0]);
  }

  render() {
    return html` <slot></slot> `;
    // return html` <tab-list></tab-list><tab-panel></tab-panel> `;
  }
}

customElements.define("custom-tabs", MyTabs);
