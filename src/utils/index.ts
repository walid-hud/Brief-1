const $ = <T extends HTMLElement>(selector: string): T =>
  document.querySelector<T>(selector)!;

export { $ };