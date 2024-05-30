import { LitElement } from "lit";
export declare class MyButton extends LitElement {
    static styles: import("lit").CSSResult;
    disabled: boolean;
    appearance: "primary" | "secondary" | "default";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-button": MyButton;
    }
}
//# sourceMappingURL=my-button.d.ts.map