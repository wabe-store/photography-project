import React from "react";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FontPtSerif = ({ children }) => {
  return <span className={ptSerif.className}>{children}</span>;
};

export default FontPtSerif;
