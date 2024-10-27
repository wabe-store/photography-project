import React from "react";
import FontPtSerif from "./fontComponents/FontPtSerif";
import FontRoboto from "./fontComponents/FontRoboto";
import { FaCheckCircle } from "react-icons/fa";

const PakegItem = ({
  divBg,
  prize,
  prizeColor,
  perColor,
  perContent,
  list1,
  list2,
  list3,
  list4,
  list5,
  buttonStyle,
  pakegName,
}) => {
  return (
    <div className={`${divBg} xl:w-[369px]  h-[553px] rounded-lg`}>
      <div className="px-[48px] py-[48px]">
        <h2 className="text-[#616161] text-[18px] font-bold mb-[16px]">
          <FontPtSerif>{pakegName}</FontPtSerif>
        </h2>
        <span className={`${prizeColor} text-[57px] font-bold tracking-[1px]`}>
          <FontPtSerif>{prize}</FontPtSerif>
        </span>
        <p className={`${perColor} text-[14px] font-bold mb-[30px]`}>
          <FontRoboto>{perContent}</FontRoboto>
        </p>
        <FontRoboto>
          <ul>
            <li className="text-black text-[18px] font-normal mb-[16px] flex items-center gap-[8px]">
              <FaCheckCircle className="text-[#616161] text-[18px]" />
              {list1}
            </li>
            <li className="text-black text-[18px] font-normal mb-[16px] flex items-center gap-[8px]">
              <FaCheckCircle className="text-[#616161] text-[18px]" />
              {list2}
            </li>
            <li className="text-black text-[18px] font-normal mb-[16px] flex items-center gap-[8px]">
              <FaCheckCircle className="text-[#616161] text-[18px]" />
              {list3}
            </li>
            <li className="text-black text-[18px] font-normal mb-[16px] flex items-center gap-[8px]">
              <FaCheckCircle className="text-[#616161] text-[18px]" />
              {list4}
            </li>
            <li className="text-black text-[18px] font-normal mb-[16px] flex items-center gap-[8px]">
              <FaCheckCircle className="text-[#616161] text-[18px]" />
              {list5}
            </li>
          </ul>
          <button
            className={`${buttonStyle} text-[18px] font-bold w-[273px] h-[46px] border-[1px] rounded-full active:bg-green-300 mt-[20px]`}
          >
            <FontRoboto>Choose plan</FontRoboto>
          </button>
        </FontRoboto>
      </div>
    </div>
  );
};

export default PakegItem;
