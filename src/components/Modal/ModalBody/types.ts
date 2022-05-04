import { ReactNode } from "react";
import { TSize } from "../../../typings";

export interface IProps {
  onClose: () => void;
  children: ReactNode;
  size?: TSize;
}
