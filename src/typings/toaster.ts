export type TToasterType = "success" | "error" | "info" | "warning";
export type TToasterPosition =
  | "top"
  // | 'right'
  // | 'left'
  // | 'bottom'
  // | 'top-left'
  // | 'bottom-left'
  // | 'bottom-right'
  | "top-right";
export interface IToaster {
  id: string;
  type: TToasterType;
  timeoutId?: any;
  isVisible?: boolean;
  title?: string;
  message?: string;
  icon?: TToasterType;
}

export interface IToastersState {
  [key: string]: IToaster;
}
