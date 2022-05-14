import { TToasterPosition } from "../../typings";
import styled from "styled-components";

export const ToastersWrap = styled.div<{ $position: TToasterPosition }>`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  max-width: 400px;
  width: 400px;
`;
