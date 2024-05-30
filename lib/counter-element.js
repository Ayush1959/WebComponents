var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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