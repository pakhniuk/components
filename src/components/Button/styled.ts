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
  color: ${colors.text};
  outline: none;
  text-decoration: none;
  transition: all ease-in 150ms;
  white-space: nowrap;
  font-size: ${({ $size }) => fontSize[$size]}px;
  width: ${({ $size, $square }) => ($square ? `${height[$size]}px` : "100%")};
  height: ${({ $size }) => height[$size]}px;
  line-height: ${({ $size }) => lineHeight[$size]}px;
  cursor: pointer;

  svg {
    cursor: inherit;
  }

  svg path {
    fill: currentColor;
    cursor: inherit;
  }

  span {
    cursor: inherit;
  }

  &.primary {
    background-color: ${colors.button};
    color: ${colors.lightText};
    &:hover {
      background-color: ${colors.button};
      color: ${colors.lightText};
    }
  }

  &.secondary {
    background-color: ${colors.secondary};
    &:hover {
      background-color: ${colors.secondaryHover};
      color: ${colors.text};
    }
  }

  &.outline {
    border-color: ${colors.button};
    background-color: ${colors.lightBg};

    &:hover {
      background-color: ${colors.button};
      color: ${colors.lightText};
    }
  }

  &.transparent {
    background-color: transparent;
    border-color: transparent;
    color: ${colors.text};
  }

  &.link {
    color: ${colors.linkColor};
    font-weight: 400;
    text-decoration: underline;
    border: none;

    &:hover {
      color: ${colors.linkHoverColor};
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
