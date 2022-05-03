import { forwardRef, ReactNode } from "react";
import SelectedIcon from "../../../assets/svg/16/checkbox-selected.svg";
import UnselectIcon from "../../../assets/svg/16/minus.svg";

import { IProps } from "./types";
import { Label, Input, Text, Shape } from "./styled";

const getIcon = (checked: boolean, unselect: boolean): ReactNode => {
  if (checked) {
    return unselect ? <UnselectIcon /> : <SelectedIcon />;
  }
  return null;
};

const Checkbox = forwardRef<HTMLLabelElement, IProps>(
  ({ checked, text, textRef, reversed, unselect, disabled, checkboxRef, children, onChange }, ref) => (
    <Label ref={ref} $disabled={disabled} $reversed={reversed} $checked={checked} $unselect={unselect}>
      <Input type="checkbox" disabled={disabled} checked={checked} onChange={onChange} />
      <Shape ref={checkboxRef} $checked={checked} $unselect={unselect} className="shape">
        {(checked || unselect) && getIcon(checked, unselect)}
      </Shape>
      {text && <Text ref={textRef}>{text}</Text>}
      {children}
    </Label>
  )
);
export default Checkbox;
