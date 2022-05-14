import { FC, ReactNode, useEffect, useState } from "react";

import SuccessIcon from "../../../assets/svg/32/success-in-circle.svg";
import ErrorIcon from "../../..//assets/svg/32/cross-in-circle.svg";
import InfoIcon from "../../..//assets/svg/32/info-in-circle-transparent.svg";
import WarningIcon from "../../..//assets/svg/32/warning-in-circle.svg";
import CloseIcon from "../../..//assets/svg/16/cross-lg.svg";

import { TToasterType } from "../../../typings";

import {
  ToasterWrap,
  ToasterContainer,
  ToasterContent,
  ToasterTitle,
  ToasterMessage,
  ToasterStatusIcon,
  StyledButton,
} from "./styled";
import { IProps } from "./types";
import { TOASTER_SHOW_DELAY, TOASTER_LOND_REMOVE_DELAY, TOASTER_SHORT_REMOVE_DELAY } from "../../../constants";

const toasterTitle: { [x in TToasterType]: ReactNode } = {
  info: "Info",
  warning: "Warning",
  success: "Success",
  error: "Error",
};
const toasterMessage: { [x in TToasterType]: ReactNode } = {
  info: "Info",
  warning: "Warning",
  success: "Success",
  error: "Oops, something went wrong!",
};
const toasrtIcon: { [x in TToasterType]: React.ReactNode } = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  success: <SuccessIcon />,
  error: <ErrorIcon />,
};

const Toaster: FC<IProps> = ({ toaster, removeToaster }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { id, icon, type, title, message } = toaster;

  useEffect(() => {
    const showTimerId = setTimeout(() => setIsVisible(true), TOASTER_SHOW_DELAY);

    return () => {
      clearTimeout(showTimerId);
    };
  }, []);

  useEffect(() => {
    const removeTimerId = setTimeout(
      () => removeToaster(id),
      type === "success" ? TOASTER_SHORT_REMOVE_DELAY : TOASTER_LOND_REMOVE_DELAY
    );

    return () => {
      clearTimeout(removeTimerId);
    };
  }, []);

  return (
    <ToasterWrap $isVisible={isVisible} $type={type}>
      <ToasterContainer>
        <ToasterStatusIcon>{toasrtIcon[icon || type]}</ToasterStatusIcon>
        <ToasterContent>
          <ToasterTitle>{title || toasterTitle[type]}</ToasterTitle>
          <ToasterMessage>{message || toasterMessage[type]}</ToasterMessage>
        </ToasterContent>
      </ToasterContainer>
      <StyledButton icon={<CloseIcon />} square mode="transparent" onClick={() => removeToaster(toaster.id)} />
    </ToasterWrap>
  );
};

export default Toaster;
