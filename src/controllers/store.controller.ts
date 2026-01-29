import type { ReactiveController, ReactiveControllerHost } from 'lit';
export class ProxyStoreController<State> implements ReactiveController {
  private unsubscribe?: () => void;

  constructor(
    private host: ReactiveControllerHost,
    private store: { state:State, subscribe: (cb: () => void) => () => void }
  ) {
    host.addController(this);
  }
  
  hostConnected() {
    this.unsubscribe = this.store.subscribe(() => {
      this.host.requestUpdate();
    });
  }

  hostDisconnected() {
    this.unsubscribe?.();
  }
}

