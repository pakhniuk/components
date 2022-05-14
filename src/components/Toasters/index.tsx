import { FC } from "react";

import Toaster from "./Toaster";
import { ToastersWrap } from "./styled";

import { IProps } from "./types";

const Toasters: FC<IProps> = ({ position = "top-right", toasters, removeToaster }) => {
  const toastersList = toasters.reduceRight((accumulator, toaster) => {
    return accumulator.concat(<Toaster key={toaster.id} toaster={toaster} removeToaster={removeToaster} />);
  }, []);
  return <ToastersWrap $position={position}>{toastersList}</ToastersWrap>;
};

export default Toasters;
