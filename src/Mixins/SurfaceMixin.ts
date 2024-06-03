import { LitElement } from "lit";
import { property } from "lit/decorators.js";

type SurfaceType = "default" | "light" | "heavy";
type Constructor<T = {}> = new (...args: any[]) => T;

export type SurfaceMixinType<T extends Constructor<LitElement>> = T &
  Constructor<{ surface: SurfaceType }>;

export const SurfaceMixin = <T extends Constructor<LitElement>>() => {
  class SurfaceClass extends LitElement {
    @property({ type: Boolean, reflect: true })
    isSurface = true;

    @property({ reflect: true })
    surface?: SurfaceType = "default";
  }

  return SurfaceClass as unknown as SurfaceMixinType<T>;
};
