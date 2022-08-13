import { ReactNode, Ref } from "react";
import { TPlace, TTheme } from "../../typings";

export interface IProps {
  text: string;
  theme?: TTheme;
  place?: TPlace;
  centered?: boolean;
  width?: string;
  ref: Ref<HTMLDivElement>;
  children: ReactNode;
}
