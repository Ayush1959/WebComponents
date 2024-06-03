import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
let LifecycleDemo = class LifecycleDemo extends LitElement {
    constructor() {
        super();
        this.message = "Hello, world!";
        console.log("Constructor");
    }
    connectedCallback() {
        super.connectedCallback();
        console.log("Connected callback");
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        console.log("Disconnected callback");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
    shouldUpdate(changedProperties) {
        console.log("Should update", changedProperties);
        return true;
    }
    willUpdate(changedProperties) {
        console.log("Will update", changedProperties);
    }
    update(changedProperties) {
        super.update(changedProperties);
        console.log("Updating", changedProperties);
    }
    updated(changedProperties) {
        console.log("Updated", changedProperties);
    }
    firstUpdated(changedProperties) {
        console.log("First updated", changedProperties);
    }
    render() {
        return html `<p>${this.message}</p>`;
    }
};
__decorate([
    property({ type: String })
], LifecycleDemo.prototype, "message", void 0);
LifecycleDemo = __decorate([
    customElement("lifecycle-demo")
], LifecycleDemo);
//# sourceMappingURL=lifecycle-demo.js.map