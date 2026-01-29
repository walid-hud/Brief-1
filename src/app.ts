import { html,  } from "lit";
import { customElement,   } from "lit/decorators.js";
import TailwindElement from "./utils/TailwindElement";
import "./components/Table"
import "./components/Form"
import "./components/ToastContainer"
import "./components/Pagination"
@customElement("x-app")
class App extends TailwindElement {
  protected render() {
    return html`
    <x-toast-container></x-toast-container>
      <main
        class="min-h-screen px-4 py-2 bg-linear-180 from-primary/20 via-muted-foreground/20  to-secondary "
      >
        <nav class=" flex justify-between items-center">
          <div>
            <a href="/" class="text-3xl font-bold text-primary font-serif">
              HealthCare
            </a>
          </div>
          <div>
            <x-form></x-form>
          </div>
        </nav>
        <x-table>
        </x-table>
        <x-pagination></x-pagination>
      </main>
    `;
  }
}


export default App