import styled from "styled-components";
import { BORDER_RADIUS } from "../../../constants";
import colors from "../../../colors";

export const Label = styled.label<{
  $disabled?: boolean;
  $reversed?: boolean;
  $checked?: boolean;
  $unselect?: boolean;
}>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  min-height: 20px;
  font-weight: 400;
  line-height: 22px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  overflow: hidden;
  max-width: 100%;
  flex-direction: ${({ $reversed }) => ($reversed ? "row-reverse" : "row")};

  &:hover .shape {
    border-color: ${({ $checked, $unselect }) => ($checked && !$unselect ? "transparent" : colors.border)};
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  &:focus ~ .shape {
    box-shadow: 0 0 0 1px ${colors.lightBg}, 0 0 0 3px #d4d4d4;
    outline: 0;
  }
`;

export const Shape = styled.span<{ $checked?: boolean; $unselect?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  margin: 3px;
  border-radius: ${BORDER_RADIUS}px;
  border: 1px solid ${({ $checked, $unselect }) => ($checked && !$unselect ? "transparent" : colors.border)};
  background-color: ${colors.lightBg};
  overflow: hidden;
  width: 16px;
  height: 16px;
  transition: 150ms;
  user-select: none;

  svg path {
    fill: ${({ $checked, $unselect }) => ($checked ? ($unselect ? colors.text : colors.main) : colors.border)};
  }
`;

export const Text = styled.span`
  margin: 0 8px;
  font-size: 14px;
  color: ${colors.text};
  user-select: none;
`;
