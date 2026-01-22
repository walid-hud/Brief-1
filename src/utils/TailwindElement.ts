import { LitElement,  } from "lit";
// import tailwindStyles from "../index.css?inline";
// Importing tailwind like this does work but any font imports are disabled, so we just opt out of shadow dom and let the global 
// styles take effect for now

class TailwindElement extends LitElement {
  // static styles = css`
    // ${unsafeCSS(tailwindStyles)}
  // `;
  
  protected createRenderRoot() {
    return this;
  }
}

export default TailwindElement;
