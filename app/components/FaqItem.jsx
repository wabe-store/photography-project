import React from "react";
import FontRoboto from "./fontComponents/FontRoboto";
import FontPtSerif from "./fontComponents/FontPtSerif";

const FaqItem = ({ Qcontent, Qcolor, Qperagraph }) => {
  return (
    <div className="mb-[48px]">
      <h2 className={`${Qcolor} text-[32px] font-bold mb-[29px]`}>
        <FontPtSerif>{Qcontent}</FontPtSerif>
      </h2>
      <p className="text-[18px] font-normal text-black">
        <FontRoboto>{Qperagraph}</FontRoboto>
      </p>
    </div>
  );
};

export default FaqItem;
