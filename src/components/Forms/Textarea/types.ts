import { TextareaHTMLAttributes } from "react";

export interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  className?: string;
  message?: string;
}
