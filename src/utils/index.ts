import type ToastContainer from "../components/ToastContainer";

const $ = <T extends HTMLElement>(selector: string): T =>
  document.querySelector<T>(selector)!;

type RowData = {
  id: number;
  fn: string;
  ln: string;
  email: string;
  tel: number | string;
  reason: string;
  date: string;
};

function toast(message:string, duration:number , variant:"success"|"error" ) {
  let container = $<ToastContainer>('x-toast-container')!;
  container.add_toast(message , duration , variant)
}


export { $ , type RowData , toast };
