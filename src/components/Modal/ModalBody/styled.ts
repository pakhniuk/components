import styled from "styled-components";
import { TSize } from "../../../typings";
import Button from "../../Button";
import { BORDER_RADIUS } from "../../../constants";
import colors from "../../../colors";

const width: { [x in TSize]: number } = {
  sm: 500,
  md: 600,
  lg: 800,
};
export const StyledModalBody = styled.div<{ $size: TSize }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease-in;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: ${({ $size }) => width[$size]}px;
  width: 100%;
  height: auto;
  min-height: 225px;
  color: ${colors.text};
  background-color: ${colors.lightBg};
  border-radius: ${BORDER_RADIUS}px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  margin: auto;
`;

export const ModalBodyInner = styled.div`
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const ModalCloseButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
