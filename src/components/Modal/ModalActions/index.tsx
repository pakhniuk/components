import { FC } from "react";

import { StyledButton } from "./styled";
import { IProps } from "./types";

export const ModalActions: FC<IProps> = ({ actions, size = "md" }) => {
  return (
    <>
      {actions.map(({ label, ...restProps }) => (
        <StyledButton {...restProps} size={size}>
          {label}
        </StyledButton>
      ))}
    </>
  );
};
