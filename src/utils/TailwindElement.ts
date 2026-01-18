import { LitElement, css, unsafeCSS } from "lit";
// import tailwindStyles from "../index.css?inline";

class TailwindElement extends LitElement {
  // static styles = css`
    // ${unsafeCSS(tailwindStyles)}
  // `;
  
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
}

export default TailwindElement;
