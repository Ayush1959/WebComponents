import { __decorate } from "tslib";
import { LitElement, html, css } from "lit";
import { customElement, property } from "./../node_modules/lit/decorators.js";
let MyButton = class MyButton extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.appearance = "default";
        // Handle button click
    }
    // ?disabled=${this.disabled === "false" ? false : true}
    render() {
        return html ` <slot> </slot> `;
    }
};
MyButton.styles = css `
    :host {
      padding: 8px 16px;
      font-size: 12px;
      background-color: #6200ea;
      color: blue;
      border-radius: 4px;
      cursor: pointer;
    }

    :host([disabled]) {
      background-color: #cccccc;
      color: white;
      cursor: not-allowed;
    }
    :host([appearance="primary"]) {
      background-color: red;
      color: blue;
    }
    :host([appearance="secondary"]) {
      background-color: black;
      color: white;
    }
  `;
__decorate([
    property({ type: Boolean })
], MyButton.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], MyButton.prototype, "appearance", void 0);
MyButton = __decorate([
    customElement("my-button")
], MyButton);
export { MyButton };
//# sourceMappingURL=my-button.js.map