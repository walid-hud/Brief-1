import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class ProxyStoreController implements ReactiveController {
  private unsubscribe?: () => void;

  constructor(
    private host: ReactiveControllerHost,
    private store: { state:any, subscribe: (cb: () => void) => () => void }
  ) {
    host.addController(this);
  }

  get state() {
    return this.store.state;
  }

  hostConnected() {
    this.unsubscribe = this.store.subscribe(() => {
      this.host.requestUpdate();  
      console.info("state changed")
      console.table(this.store.state)      
    });
  }

  hostDisconnected() {
    this.unsubscribe?.();
  }
}

