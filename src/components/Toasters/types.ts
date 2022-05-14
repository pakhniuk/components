import { IToaster, TToasterPosition } from "../../typings";

export interface IProps {
  position?: TToasterPosition;
  toasters: IToaster[];
  showToaster: (id: string) => void;
  removeToaster: (id: string) => void;
  hideToaster: (id: string) => void;
}
