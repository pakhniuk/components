import { MouseEventHandler, ChangeEventHandler, RefObject, ReactNode } from "react";

export interface IProps {
  checked: boolean;
  unselect?: boolean;
  text?: string;
  disabled?: boolean;
  reversed?: boolean;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLLabelElement>;
  onMouseLeave?: MouseEventHandler<HTMLLabelElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checkboxRef?: RefObject<HTMLSpanElement>;
  textRef?: RefObject<HTMLSpanElement>;
  children: ReactNode;
}
