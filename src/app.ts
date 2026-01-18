import { html, LitElement } from "lit";
import { customElement, state,  } from "lit/decorators.js";
import TailwindElement from "./utils/TailwindElement";
import "./components/Table"

@customElement("x-app")
class App extends TailwindElement {
  protected render() {
    return html`
      <main
        class="min-h-screen px-4 py-2"
      >
        <nav>
          <div>
            <a href="/" class="text-3xl font-bold text-primary font-serif">
              HealthCare
            </a>
          </div>
          <div>

          </div>
        </nav>
        <x-table>
        </x-table>
      </main>
    `;
  }
}
