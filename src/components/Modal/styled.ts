import styled from "styled-components";
import colors from "../../colors";
import { BORDER_RADIUS } from "../../constants";
import { TSize } from "../../typings";

const height: { [x in TSize]: number } = {
  sm: 66,
  md: 74,
  lg: 82,
};

export const ModalHeader = styled.div`
  font-size: 20px;
  padding: 0 16px;
  height: 48px;
  background: ${colors.secondaryHover};
  display: flex;
  align-items: center;
  border-radius: ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0px 0;
`;

export const ModalFooter = styled.div<{ $size: TSize }>`
  border-top: 1px solid ${colors.border};
  padding: 0 16px;
  height: ${({ $size = "md" }) => height[$size]}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalInner = styled.div`
  max-width: 100%;
  overflow: auto;
  flex-direction: column;
  display: flex;
  flex: 1 1 auto;
  padding: 0 16px;
`;
