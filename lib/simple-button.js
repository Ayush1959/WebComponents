var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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