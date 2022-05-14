import { TToasterPosition, TToasterType } from "../../../typings";
import styled from "styled-components";
import Button from "../../Button";
import { BORDER_RADIUS } from "../../../constants";
import colors from "../../../colors";

const bgColor: { [x in TToasterType]: string } = {
  success: colors.success,
  error: colors.error,
  info: colors.info,
  warning: colors.warning,
};

export const ToasterWrap = styled.div<{
  $isVisible: boolean;
  $type: TToasterType;
}>`
  position: relative;
  display: flex;
  width: calc(100% - 24px);
  min-height: 72px;
  flex-direction: row;
  align-content: stretch;
  margin: 10px auto 0;
  backface-visibility: hidden;
  border-radius: ${BORDER_RADIUS}px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-out;
  background-color: ${({ $type }) => bgColor[$type]};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`;

export const ToasterContainer = styled.div`
  display: flex;
  width: calc(100% - 10px);
  align-items: center;
  padding: 20px 16px;
  border-radius: ${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px;

  path {
    fill: #fff;
  }
`;

export const ToasterContent = styled.div`
  width: 90%;
`;

export const ToasterStatusIcon = styled.span`
  display: flex;
  min-width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;

  path {
    fill: #fff;
  }
`;

export const ToasterTitle = styled.div`
  overflow: hidden;
  margin: 0 0 0 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ToasterMessage = styled.div`
  margin: 0 0 0 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;
  color: #fff !important;
`;
