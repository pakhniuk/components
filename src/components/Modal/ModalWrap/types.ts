import { ReactNode } from "react";

export interface IProps {
  isShown: boolean;
  onClose: () => void;
  children: ReactNode;
}
