import React from "react";
import FontPtSerif from "./fontComponents/FontPtSerif";

const Taitel = ({ name }) => {
  return (
    <h1 className="text-[#212121] text-[40px] xl:text-[57px] font-bold text-center">
      <FontPtSerif>{name}</FontPtSerif>
    </h1>
  );
};

export default Taitel;
