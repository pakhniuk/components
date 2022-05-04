import { FC } from "react";
import { useBodyOverflowHidden } from "../../../hooks/useBodyOverflowHidden";

import { Modal, ModalOverlay } from "./styled";
import { IProps } from "./types";

export const ModalWrap: FC<IProps> = ({ isShown, onClose, children }) => {
  useBodyOverflowHidden("modal", isShown);

  return (
    <Modal className={`${isShown ? "isShown" : ""}`}>
      <ModalOverlay onClick={onClose}></ModalOverlay>
      {children}
    </Modal>
  );
};
