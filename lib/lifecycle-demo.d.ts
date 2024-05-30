import { LitElement, PropertyValueMap } from "lit";
declare class LifecycleDemo extends LitElement {
    message: string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    shouldUpdate(changedProperties: any): boolean;
    willUpdate(changedProperties: any): void;
    update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    updated(changedProperties: any): void;
    firstUpdated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lifecycle-demo": LifecycleDemo;
    }
}
export {};
//# sourceMappingURL=lifecycle-demo.d.ts.map