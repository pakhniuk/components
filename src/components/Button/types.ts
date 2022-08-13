import { ReactNode, MouseEventHandler } from "react";
import { TSize, TButtonMode } from "../../typings";

export interface IProps {
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  mode?: TButtonMode;
  disabled?: boolean;
  size?: TSize;
  square?: boolean;
  children?: ReactNode | null;
  className?: string;
  width?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
}
