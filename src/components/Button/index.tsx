import { forwardRef } from "react";
import classNames from "classnames";

import { StyledButton, Content, Icon, Label } from "./styled";
import { IProps } from "./types";

const Button = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      mode = "primary",
      disabled,
      icon,
      size = "md",
      children,
      type = "button",
      className,
      square,
      onClick,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        type={type}
        className={classNames(mode, className)}
        disabled={disabled}
        onClick={onClick}
        $size={size}
        $disabled={disabled}
        $square={square}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <Content>
          {icon && <Icon $size={size}>{icon}</Icon>}
          {!square && <Label>{children}</Label>}
        </Content>
      </StyledButton>
    );
  }
);

export default Button;
