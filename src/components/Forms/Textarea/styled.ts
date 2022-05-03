import styled from "styled-components";
import colors from "../../../colors";
import { BORDER_RADIUS } from "../../../constants";

export const StyledTextarea = styled.textarea<{ $invalid: boolean }>`
  flex: 1 1 auto;
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ $invalid }) => ($invalid ? colors.error : colors.border)};
  border-radius: ${BORDER_RADIUS}px;
  outline: 0;
  color: #414141;
  font-family: "Open Sans";
  font-size: 14px;
  transition: all ease-in 150ms;
  word-break: normal;
  font-weight: 400;
  box-sizing: border-box;

  &:hover {
    border-color: gray;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${colors.lightBg}, 0 0 0 3px #d4d4d4;
    border-color: gray;
  }
`;
