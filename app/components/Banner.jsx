import React from "react";
import Container from "./Container";
import Taitel from "./Taitel";
import PeraGraps from "./PeraGraps";
import FontRoboto from "./fontComponents/FontRoboto";
import { AiFillCamera } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="xl:mt-[108px] mt-[35px] mx-[10px]">
          <Taitel name=" San Francisco Based Product Photography Services" />

          <PeraGraps
            className="mt-[22px]"
            content="Get high-quality aesthetic photographs of your valuable products within
        few days"
          />
          <FontRoboto>
            <button className=" mt-[57px] w-[242px] h-[46px] rounded-[80px] bg-[#FF6A00] text-white flex items-center gap-[10px] justify-center font-bold  tracking-[1px] mx-auto hover:bg-transparent hover:border-[#FF6A00] hover:border-[1px] hover:text-black duration-200">
              <AiFillCamera className="text-[15px]" />
              Book a photoshoot
            </button>
          </FontRoboto>
        </div>
      </Container>
    </>
  );
};

export default Banner;
