import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const FontRoboto = ({ children }) => {
  return <span className={roboto.className}>
    {children}</span>;
};

export default FontRoboto;
