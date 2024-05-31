import { css, LitElement } from "lit";
import { property } from "lit/decorators.js";

type ModeType = "dark" | "light" | "dim" | "bright";
type Constructor<T = {}> = new (...args: any[]) => T;

export type ModeMixinType<T extends Constructor<LitElement>> = T &
  Constructor<{ mode: ModeType }>;

export const ModeMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class ModeClass extends superClass {
    @property({ reflect: true })
    mode?: ModeType = "light";

    static get styles() {
      return [
        // super.styles,
        (superClass as unknown as typeof LitElement).styles ?? [],
        css`
          :host([mode="dark"]) {
            --background: black;
            --color: white;
            --line-background: white;
          }
          :host([mode="dim"]) {
            --background: #242424;
            --color: white;
            --line-background: red;
          }
        `,
      ];
    }
  }

  return ModeClass as unknown as ModeMixinType<T>;
};
