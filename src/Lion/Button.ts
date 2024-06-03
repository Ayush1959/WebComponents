import { LionButton } from "@lion/ui/button.js";
import { css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ModeMixin } from "../Mixins/ModeMixin";
@customElement("custom-lion-button")
export class MyButton extends ModeMixin(LionButton) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          margin: 20px;
          background-color: var(--background, blue);
          color: var(--color, red);
        }
        :host([active]) {
          background-color: red !important;
          color: blue !important;
        }
        :host(:hover),
        :host([hover]) {
          background-color: yellow;
          color: red;
        }
        :host([appearance="heavy"]) {
          --background: black;
          --color: white;
        }
        :host([appearance="default"]) {
          --background: red;
          --color: white;
        }
        :host([appearance="light"]) {
          --background: green;
          --color: white;
        }
      `,
    ];
  }

  @property({ reflect: true })
  appearance = "";

  connectedCallback() {
    super.connectedCallback?.();
    this.subscribeToParentSurface();
  }

  protected static findParentWithSurfaceMixin = (element: any): any => {
    if (!element) return null;
    let parent = null;
    if (element.assignedSlot && element.assignedSlot.parentElement) {
      parent = element.assignedSlot.parentElement;
    } else if (
      element.parentNode &&
      // to check if the parent is a shadow root
      element.parentNode.nodeType === 11 &&
      element.parentNode.host
    ) {
      parent = element.parentNode.host;
    } else if (element.parentNode) {
      parent = element.parentNode;
    }

    // return parent if it has surfaceValues otherwise recursively call findParentWithSurfaceMixin
    return parent?.isSurface
      ? parent.getAttribute("surface")
      : MyButton.findParentWithSurfaceMixin(parent);
  };
  private subscribeToParentSurface() {
    const parentWithAppearance = MyButton.findParentWithSurfaceMixin(this);
    if (parentWithAppearance) {
      this.appearance = parentWithAppearance;
    }
  }
}
