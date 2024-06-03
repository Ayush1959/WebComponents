import { __decorate } from "tslib";
import { LitElement, css, html } from "./../node_modules/lit";
import { customElement, property } from "./../node_modules/lit/decorators.js";
let SimpleButton = class SimpleButton extends LitElement {
    constructor() {
        super(...arguments);
        this.name = "World";
    }
    render() {
        return html `<p>Hello, ${this.name}!</p>`;
    }
};
SimpleButton.styles = css `
    :host {
      color: blue;
    }
  `;
__decorate([
    property()
], SimpleButton.prototype, "name", void 0);
SimpleButton = __decorate([
    customElement("simple-button")
], SimpleButton);
export { SimpleButton };
//# sourceMappingURL=simple-button.js.map