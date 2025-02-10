"use client";
import { store } from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

export interface Props {
  children: ReactNode;
}
const ProviderRedux: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux;
