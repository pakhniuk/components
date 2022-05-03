import styled from "styled-components";
import { TSize } from "../../typings";
import colors from "../../colors";
import { BORDER_RADIUS } from "../../constants";

const fontSize: { [x in TSize]: number } = {
  sm: 12,
  md: 14,
  lg: 16,
};

const height: { [x in TSize]: number } = {
  sm: 32,
  md: 36,
  lg: 40,
};

const lineHeight: { [x in TSize]: number } = {
  sm: 18,
  md: 22,
  lg: 26,
};

const iconSize: { [x in TSize]: number } = {
  sm: 12,
  md: 16,
  lg: 20,
};

export const StyledButton = styled.button<{
  $disabled?: boolean;
  $size: TSize;
  $square: boolean;
}>`
  position: relative;
  display: block;
  padding: 0 8px;
  border: 1px solid transparent;
  border-radius: ${BORDER_RADIUS}px;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  color: #414141;
  outline: none;
  text-decoration: none;
  transition: all ease-in 150ms;
  white-space: nowrap;
  font-size: ${({ $size }) => fontSize[$size]}px;
  width: ${({ $size, $square }) => ($square ? `${height[$size]}px` : "100%")};
  height: ${({ $size }) => height[$size]}px;
  line-height: ${({ $size }) => lineHeight[$size]}px;

  svg path {
    fill: currentColor;
  }

  &.primary {
    background-color: ${colors.button};
    color: #fff;
    &:hover {
      background-color: ${colors.button};
      color: #fff;
    }
  }

  &.secondary {
    background-color: #e9e9e9;
    &:hover {
      background-color: #f1f1f1;
      color: #414141;
    }
  }

  &.outline {
    border-color: ${colors.button};
    background-color: #fff;

    &:hover {
      background-color: ${colors.button};
      color: #fff;
    }
  }

  &.transparent {
    background-color: #fff;
    border-color: ${colors.button};
    color: #414141;
  }

  &.link {
    color: #45688f;
    font-weight: 400;
    text-decoration: underline;
    border: none;

    &:hover {
      color: #6683a3;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const Icon = styled.span<{
  $size: TSize;
}>`
  display: flex;
  flex-shrink: 0;
  transition: transform ease-in 150ms;
  margin: 0 4px;
  width: ${({ $size }) => iconSize[$size]}px;
  height: ${({ $size }) => iconSize[$size]}px;
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const Label = styled.span`
  margin: 0 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
