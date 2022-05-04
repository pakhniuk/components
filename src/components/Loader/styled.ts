import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  z-index: 101;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const LoaderInner = styled.div`
  position: absolute;
  z-index: 102;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

export const LoaderMessage = styled.div`
  margin-top: 8px;
  color: #454545;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  user-select: none;
`;

export const LoaderSpinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    display: block;
    width: 46px;
    height: 46px;
    border: 5px solid #454545;
    border-color: #454545 transparent #454545 transparent;
    margin: 1px;
    animation: lds-dual-ring 1.2s linear infinite;
    border-radius: 50%;
    content: " ";
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
