import { FC } from "react";
import CloseIcon from "../../..//assets/svg/16/cross-lg.svg";

import { StyledModalBody, ModalBodyInner, ModalCloseButton } from "./styled";
import { IProps } from "./types";

export const ModalBody: FC<IProps> = ({ onClose, children, size = "md" }) => {
  return (
    <StyledModalBody $size={size}>
      <ModalCloseButton onClick={onClose} icon={<CloseIcon />} mode="transparent" square />
      <ModalBodyInner>{children}</ModalBodyInner>
    </StyledModalBody>
  );
};
