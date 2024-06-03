import { LionTabs } from "@lion/ui/tabs.js";
import { css } from "lit";
import { customElement, queryAll, state } from "lit/decorators.js";
import { ModeMixin } from "../Mixins/ModeMixin";
@customElement("custom-lion-tabs")
export class MyTabs extends ModeMixin(LionTabs) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        ::slotted([slot="tab"]) {
          cursor: pointer;
          padding: 8px;
          border: none;
          text-transform: uppercase;
          color: var(--color, rgba(0, 0, 0, 0.6));
          background-color: transparent;
          margin: 2px;
        }
        ::slotted([slot="tab"][selected]) {
          color: #1976d2;
          transition: color 1000ms linear;
        }
        ::slotted([slot="panel"]) {
          display: none;
          padding: 16px;
          color: var(--color, black);
          border: 1px solid #ccc;
        }
        ::slotted([slot="panel"][selected]) {
          display: block;
        }

        .tabs__tab-group,
        .tabs__panels {
          position: relative;
          background: var(--background, white);
        }
        .tabs__tab-group:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: var(--line-left, 0);
          width: var(--line-width, 90px);
          right: 0;
          height: 2px;
          background: var(--line-background, yellow);
          transition: width 0.3s;
          transition: left 200ms linear;
        }
      `,
    ];
  }

  @state() width = 90;
  @state() x = 0;

  constructor() {
    super();
    this.updateLinePosition = this.updateLinePosition.bind(this);
  }
  updateLinePosition(e: any) {
    this.width = e.srcElement.offsetWidth;
    this.x = e.srcElement.offsetLeft - this.offsetLeft;
    this.style.setProperty("--line-width", this.width + "px");
    this.style.setProperty("--line-left", this.x + "px");
  }
  @queryAll("slot[name=tab]")
  tabButtons: any;

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
    this.tabButtons.forEach((element: any) => {
      element.addEventListener("click", this.updateLinePosition);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.tabButtons.forEach((element: any) => {
      element.removeEventListener("click", this.updateLinePosition);
    });
  }
}
