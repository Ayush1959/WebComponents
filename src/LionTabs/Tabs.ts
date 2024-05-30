import { css, html } from "lit";
// @ts-ignore
import { LionTabs } from "@lion/ui/tabs.js";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

// @ts-ignore
@customElement("custom-lion-tabs")
export class MyTabs extends LionTabs {
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

  @state() width = 90;
  @state() x = 0;

  updateLinePosition(e: any) {
    this.width = e.srcElement.offsetWidth;
    this.x = e.srcElement.offsetLeft;
  }

  render() {
    return html` <div class="tabs">
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
}
