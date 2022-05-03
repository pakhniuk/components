import { forwardRef } from "react";

import { IProps } from "./types";
import { InputWrap, Message } from "../Input/styled";
import { StyledTextarea } from "./styled";

const Textarea = forwardRef<HTMLTextAreaElement, IProps>(
  ({ invalid = false, className = "", message, ...restProps }, ref) => (
    <InputWrap>
      <StyledTextarea $invalid={invalid} ref={ref} className={className} {...restProps} />
      {message && <Message $invalid={invalid}>{message}</Message>}
    </InputWrap>
  )
);

export default Textarea;
