import styled from "styled-components";

import { TSize } from "../../../typings";
import colors from "../../../colors";
import { BORDER_RADIUS } from "../../../constants";

const size: { [x in TSize]: number } = {
  sm: 32,
  md: 36,
  lg: 40,
};

export const StyledInput = styled.input<{ $invalid?: boolean; $size: TSize }>`
  flex: 1 1 auto;
  width: 100%;
  padding: 0 8px;
  border: 1px solid ${({ $invalid }) => ($invalid ? colors.error : colors.border)};
  border-radius: ${BORDER_RADIUS}px;
  outline: 0;
  color: #414141;
  font-size: 14px;
  transition: all ease-in 150ms;
  word-break: normal;
  font-weight: 400;
  height: ${({ $size }) => size[$size]}px;
  line-height: ${({ $size }) => size[$size]}px;
  box-sizing: border-box;

  &:hover {
    border-color: gray;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${colors.lightBg}, 0 0 0 3px #d4d4d4;
    border-color: gray;
  }

  &::placeholder {
    color: ${colors.border};
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IconWrap = styled.div<{ $withIcon?: boolean }>`
  position: relative;
  width: 100%;

  input {
    padding-left: ${({ $withIcon }) => ($withIcon ? "32px" : "8px")};
  }
`;
export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  padding: 8px;
  display: flex;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Message = styled.span<{ $invalid: boolean }>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ $invalid }) => ($invalid ? colors.error : colors.border)};
  padding-top: 4px;
`;
