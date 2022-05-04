import { useEffect } from "react";

type THiddenType = "modal" | "loader";

const store: Record<THiddenType, boolean> = { modal: false, loader: false };

export const useBodyOverflowHidden = (type: THiddenType, hidden: boolean) => {
  useEffect(() => {
    store[type] = hidden;
    if (Object.values(store).some((item) => item)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [type, hidden]);
};
