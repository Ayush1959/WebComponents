import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lifecycle-demo")
class LifecycleDemo extends LitElement {
  @property({ type: String }) message = "Hello, world!";

  constructor() {
    super();
    console.log("Constructor");
  }

  override connectedCallback() {
    super.connectedCallback();
    console.log("Connected callback");
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    console.log("Disconnected callback");
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
  }

  override shouldUpdate(changedProperties: any) {
    console.log("Should update", changedProperties);
    return true;
  }

  override willUpdate(changedProperties: any) {
    console.log("Will update", changedProperties);
  }

  override update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    super.update(changedProperties);
    console.log("Updating", changedProperties);
  }

  override updated(changedProperties: any) {
    console.log("Updated", changedProperties);
  }

  override firstUpdated(changedProperties: any) {
    console.log("First updated", changedProperties);
  }

  override render() {
    return html`<p>${this.message}</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lifecycle-demo": LifecycleDemo;
  }
}
