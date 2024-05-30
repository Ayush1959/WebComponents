import { css } from "lit";
import { property } from "lit/decorators.js";

type ColorModeType = "dark" | "light" | "dim" | "bright";

export const ColorModeMixin = (superClass: any) => {
  class ColorModeClass extends superClass {
    @property({ reflect: true })
    mode?: ColorModeType = "light";

    static get styles() {
      return [
        super.styles,
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
    // @state()
    // styles = {
    //   "--background": "black",
    //   "--color": "white",
    //   "--line-background": "white",
    // };
    // @state()
    // dimStyles = {
    //   "--background": "#242424",
    //   "--color": "white",
    //   "--line-background": "red",
    // };
    // render() {
    //   return this.renderWithMode(super.render());
    // }
    // renderWithMode(content: unknown) {
    //   return html` <div
    //     style=${styleMap(
    //       this.mode === "dark"
    //         ? this.styles
    //         : this.mode === "dim"
    //         ? this.dimStyles
    //         : {}
    //     )}
    //   >
    //     ${content}
    //   </div>`;
    // }
  }

  return ColorModeClass as any;
};
