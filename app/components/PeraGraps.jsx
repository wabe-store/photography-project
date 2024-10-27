import React from "react";
import FontRoboto from "./fontComponents/FontRoboto";

const PeraGraps = ({ content, className }) => {
  return (
    <>
      <FontRoboto>
        <p
          className={`${className} text-center text-[18px] font-normal text-[#757575]`}
        >
          {content}
        </p>
      </FontRoboto>
    </>
  );
};

export default PeraGraps;
