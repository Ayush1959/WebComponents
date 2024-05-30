var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html } from "lit";
// @ts-ignore
import { LionTabs } from "@lion/ui/tabs.js";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
// @ts-ignore
let MyTabs = class MyTabs extends LionTabs {
    constructor() {
        super(...arguments);
        this.width = 90;
        this.x = 0;
    }
    static get styles() {
        return [
            super.styles,
            css `
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
          color: rgba(0, 0, 0, 0.6);
          background-color: transparent;
          margin: 2px;
        }
        ::slotted([slot="tab"][selected]) {
          border-bottom: 2px solid blue;
          color: #1976d2;
          transition: border 1000ms linear;
          transition: color 1000ms linear;
        }
        ::slotted([slot="panel"]) {
          display: none;
          padding: 16px;
          color: black;
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
          background: white;
          min-height: 500px;
          text-align: start;
        }
        .line {
          position: sticky;
          height: 20px;
          display: block;
          color: black;
          background: black;
          transition: width 0.3s;
          transition: left 200ms linear;
        }
      `,
        ];
    }
    updateLinePosition(e) {
        this.width = e.srcElement.offsetWidth;
        this.x = e.srcElement.offsetLeft;
    }
    render() {
        return html ` <div class="tabs">
      <div>
        <slot name="tab" @click=${this.updateLinePosition}> </slot>
        <span
          style=${styleMap({ left: this.x + "px", width: this.width + "px" })}
          class="line"
        ></span>
        <slot name="panel"></slot>
      </div>
    </div>`;
    }
};
__decorate([
    state()
], MyTabs.prototype, "width", void 0);
__decorate([
    state()
], MyTabs.prototype, "x", void 0);
MyTabs = __decorate([
    customElement("custom-lion-tabs")
], MyTabs);
export { MyTabs };
//# sourceMappingURL=Tabs.js.map