import { __decorate } from "tslib";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let CounterElement = class CounterElement extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `
      <p>Count: ${this.count}</p>
      <button @click=${this.increment}>Increment</button>
    `;
    }
    increment() {
        this.count += 1;
    }
};
CounterElement.styles = css `
    button {
      font-size: 20px;
    }
  `;
__decorate([
    property({ type: Number, reflect: true })
], CounterElement.prototype, "count", void 0);
CounterElement = __decorate([
    customElement("counter-element")
], CounterElement);
//# sourceMappingURL=counter-element.js.map