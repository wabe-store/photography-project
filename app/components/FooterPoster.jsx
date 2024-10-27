import React from "react";
import Container from "./Container";
import FontPtSerif from "./fontComponents/FontPtSerif";
import FontRoboto from "./fontComponents/FontRoboto";
import { FaCheck } from "react-icons/fa";

const FooterPoster = () => {
  return (
    <section>
      <Container>
        <div className="footerBg w-full max-w-[1139px] h-auto bg-[#FFEFE6] py-[40px] md:py-[75px] px-5 md:px-0 mx-auto">
          <h2 className="text-[24px] md:text-[40px] text-center font-bold">
            <FontPtSerif>
              Get your commercial product <br className="hidden md:block" /> images today that matter
            </FontPtSerif>
          </h2>
          <button className="rounded-full w-[200px] md:w-[255px] text-white h-[46px] border-[1px] border-[#FF6A00] font-bold flex items-center gap-[10px] bg-[#FF6A00] justify-center mt-8 md:mt-10 mx-auto tracking-[1px]">
            <FontRoboto>View portfolio</FontRoboto>
            <FaCheck />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FooterPoster;
