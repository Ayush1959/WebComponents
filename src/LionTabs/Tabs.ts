//@ts-ignore
import { LionTabs } from "@lion/ui/tabs.js";
import { css } from "lit";
import { customElement, queryAll, state } from "lit/decorators.js";
import { ColorModeMixin } from "../Mixins/ColorModeMixin";

//@ts-ignore
@customElement("custom-lion-tabs")
export class MyTabs extends ColorModeMixin(LionTabs) {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }
        ::slotted([slot="tab"]) {
          cursor: pointer;
          padding: 8px;
          border: none;
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 1.25;
          letter-spacing: 0.02857em;
          text-transform: uppercase;
          max-width: 360px;
          min-width: 90px;
          color: var(--color, rgba(0, 0, 0, 0.6));
          background-color: transparent;
          margin: 2px;
        }
        ::slotted([slot="tab"][selected]) {
          //   border-bottom: 2px solid blue;
          color: #1976d2;
          //   transition: border 1000ms linear;
          transition: color 1000ms linear;
        }
        ::slotted([slot="panel"]) {
          display: none;
          padding: 16px;
          color: var(--color, black);
          margin-top: 20px;
          border: 1px solid #ccc;
        }
        ::slotted([slot="panel"][selected]) {
          display: block;
        }
        .tabs {
          display: flex;
          flex-direction: column;
          min-width: 800px;
          background: var(--background, white);
          //   min-height: 500px;
          text-align: start;
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
          //   background: red;
          transition: width 0.3s;
          transition: left 200ms linear;
        }
        .line {
          position: sticky;
          height: 2px;
          display: block;
          color: black;
          background: var(--line-background, black);
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
    console.log("first", e);
    this.width = e.srcElement.offsetWidth;
    this.x = e.srcElement.offsetLeft - this.offsetLeft;
    console.log(this);
    console.log(this.width);
    console.log(this.x);
    this.style.setProperty("--line-width", this.width + "px");
    this.style.setProperty("--line-left", this.x + "px");
  }
  // @ts-ignore
  @queryAll("slot[name=tab]")
  tabButtons: any;

  firstUpdated() {
    super.firstUpdated();
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
