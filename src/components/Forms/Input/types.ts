import { InputHTMLAttributes, ReactNode } from "react";
import { TSize } from "../../../typings";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  $size?: TSize;
  className?: string;
  icon?: ReactNode;
  message?: string;
}
