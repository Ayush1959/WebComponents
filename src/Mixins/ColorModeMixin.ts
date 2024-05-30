import { Constructor, dedupeMixin } from "@open-wc/dedupe-mixin";
import { css, LitElement } from "lit";
import { property } from "lit/decorators.js";

type ColorModeType = "dark" | "light" | "dim" | "bright";

export type ColorModeMixinType<T extends Constructor<LitElement>> = T &
  Constructor<{ mode: ColorModeType }>;

export const ColorModeMixin = dedupeMixin(
  <T extends Constructor<LitElement>>(superClass: T) => {
    class ColorModeClass extends superClass {
      @property({ reflect: true })
      mode?: ColorModeType = "light";

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

    return ColorModeClass as ColorModeMixinType<T>;
  }
);
