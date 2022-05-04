import { MouseEventHandler, ReactNode } from "react";
import { TButtonMode, TSize } from "../../../typings";

export interface IProps {
  actions: {
    label: string;
    icon?: ReactNode;
    mode?: TButtonMode;
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }[];
  size?: TSize;
}
