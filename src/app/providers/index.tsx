import { type FC, type ReactNode } from "react";
import NextProvider from "~/app/providers/next-provider";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <NextProvider>{children}</NextProvider>;
};
