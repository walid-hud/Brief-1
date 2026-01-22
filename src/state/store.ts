import { get_data_rows } from "../services/localstorage";
import type { RowData } from "../utils";

type Listener = () => void;

function createReactiveStore<T extends object>(initial: T) {
  const listeners = new Set<Listener>();

  function notify() {
    for (const l of listeners) l();
  }

  function subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  // Recursive proxy generator
  function makeProxy(obj: any): any {
    return new Proxy(obj, {
      get(target, prop) {
        const value = target[prop];
        // If nested object, make it reactive too
        if (value && typeof value === 'object') {
          return makeProxy(value);
        }
        return value;
      },
      set(target, prop, value) {
        target[prop] = value;
        notify();
        return true;
      }
    });
  }

  return {
    state: makeProxy(initial) as T,
    subscribe
  };
}

const initial = get_data_rows()
const store = createReactiveStore(initial);
export {store }