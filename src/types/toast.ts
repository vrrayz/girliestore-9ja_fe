export type ToastType = "info" | "warning" | "failure" | "success";

export interface Toast {
  type?: ToastType;
  title: string;
  message: string;
}
