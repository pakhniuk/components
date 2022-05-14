import { IToaster, TToasterPosition } from "../../../typings";

export interface IProps {
  toaster: IToaster;
  removeToaster: (id: string) => void;
}
