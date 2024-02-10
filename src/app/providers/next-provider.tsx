import { type FC, type ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

const NextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextProvider;
