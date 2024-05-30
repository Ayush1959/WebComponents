import { LitElement } from "lit";
declare class CounterElement extends LitElement {
    count: number;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    increment(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "counter-element": CounterElement;
    }
}
export {};
//# sourceMappingURL=counter-element.d.ts.map