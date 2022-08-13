import styled from "styled-components";
import colors from "../../colors";
import { BORDER_RADIUS } from "../../constants";
import { TPlace, TTheme } from "../../typings";

export const TooltipWrap = styled.div`
  position: relative;
`;

export const TooltipTarget = styled.div``;

export const TooltipBox = styled.div<{ place: TPlace; theme: TTheme; centered: boolean; width: string }>`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background-color: ${colors.darkBg};
  color: ${colors.lightText};
  border-radius: ${BORDER_RADIUS}px;
  font-size: 14px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 4px 8px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    width: 1px;
    height: 1px;
    border: 5px solid;
    border-color: ${colors.darkBg} transparent transparent transparent;
  }
`;
