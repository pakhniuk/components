import styled from "styled-components";

export const Modal = styled.div`
  display: none;
  overflow: auto;
  transition: all 0.4s ease-in;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 100%;

  &.isShown {
    display: flex;
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.3);
`;
