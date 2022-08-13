import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
`;

export const LoaderSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  path {
    fill: #ddd;
    transition: fill 0.3s ease-in-out;
  }
  rect {
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    fill: #171717;
    animation: 3s fill-bottom infinite;
  }
  @keyframes fill-bottom {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
