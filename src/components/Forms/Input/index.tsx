import { forwardRef } from "react";

import { IProps } from "./types";
import { StyledInput, InputWrap, IconWrap, Icon, Message } from "./styled";

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ $size = "md", invalid = false, className = "", icon, message, ...restProps }, ref) => (
    <InputWrap>
      <IconWrap $withIcon={!!icon}>
        <StyledInput ref={ref} className={className} $size={$size} $invalid={invalid} {...restProps} />
        {icon && <Icon>{icon}</Icon>}
      </IconWrap>
      {message && <Message $invalid={invalid}>{message}</Message>}
    </InputWrap>
  )
);

export default Input;
