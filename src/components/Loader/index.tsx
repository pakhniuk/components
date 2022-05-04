import { FC } from "react";

import { LoaderWrapper, LoaderInner, LoaderMessage, LoaderSpinner } from "./styled";

import { IProps } from "./types";

const Loader: FC<IProps> = ({ loading, message }) => {
  return (
    loading && (
      <LoaderWrapper>
        <LoaderInner>
          <LoaderSpinner />
          {message && <LoaderMessage>{message}</LoaderMessage>}
        </LoaderInner>
      </LoaderWrapper>
    )
  );
};

export default Loader;
