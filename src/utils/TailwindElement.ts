import { LitElement,  } from "lit";
// import tailwindStyles from "../index.css?inline";

class TailwindElement extends LitElement {
  // static styles = css`
    // ${unsafeCSS(tailwindStyles)}
  // `;
  
  protected createRenderRoot() {
    return this;
  }
}

export default TailwindElement;
