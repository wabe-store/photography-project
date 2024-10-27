import React from "react";
import FontPtSerif from "./fontComponents/FontPtSerif";

const DelevarItem = ({ className, number, h2, h2color, pera }) => {
  return (
    <div className="flex flex-col items-center w-[310px]">
      <div
        className={`${className} rounded-full flex items-center justify-center w-[85px] text-[57px] font-bold h-[85px]`}
      >
        <FontPtSerif>{number}</FontPtSerif>
      </div>
      <h2 className={`${h2color} font-bold text-[18px] mt-[34px] mb-[15px]`}>
        <FontPtSerif>{h2}</FontPtSerif>
      </h2>
      <p className="text-[18px] font-normal text-[#616161] text-center">{pera}</p>
    </div>
  );
};

export default DelevarItem;
