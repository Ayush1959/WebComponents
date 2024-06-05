import { LionTabs } from "@lion/ui/tabs.js";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";

export const TABS_STRUCTURE = {
  root: "tabs",
  subComponents: [],
  slots: [],
};

@customElement("custom-tabs")
export class Tabs extends LionTabs {
  static get styles() {
    return [
      //@ts-ignore
      ...super.styles,
      css`
        :host {
          min-width: 250px;
          display: block;
          background: var(--tabs-background, white);
          color: var(--tabs-color, black);
        }
      `,
    ];
  }
  //@ts-ignore
  get tabs() {
    const tabList = Array.from(this.children).filter(
      (child) => child.slot === "tab-list"
    );
    return Array.from(tabList[0].children);
  }
  //@ts-ignore
  get panels() {
    const tabPanels = Array.from(this.children).filter(
      (child) => child.slot === "tab-panels"
    );
    return Array.from(tabPanels[0].children);
  }

  __setupSlots() {
    if (this.shadowRoot) {
      const tabSlot = this.shadowRoot.querySelector("slot[name=tab-list]");
      const handleSlotChange = () => {
        //@ts-ignore
        this.__cleanStore();
        //@ts-ignore
        this.__setupStore();
        //@ts-ignore
        this.__updateSelected(false);
      };

      if (tabSlot) {
        tabSlot.addEventListener("slotchange", handleSlotChange);
      }
    }
  }

  firstUpdated(changedProperties: any): void {
    super.firstUpdated(changedProperties);
    console.log("changedProperties", changedProperties);
    console.log("this.children", this.children);
    console.log("this.tabs", this.tabs);
  }

  render() {
    return html` <slot name="tab-list"></slot><slot name="tab-panels"></slot> `;
  }
}
