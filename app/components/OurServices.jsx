import React from "react";
import Taitel from "./Taitel";
import Image from "next/image";
import OurImageOne from "../assets/ourOne.png";
import OurImageTow from "../assets/ourTow.png";
import FontPtSerif from "./fontComponents/FontPtSerif";
import FontRoboto from "./fontComponents/FontRoboto";
import Container from "./Container";
import { FaArrowRight } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="pb-[83px]">
      <Container>
        <Taitel name="Our services" />

        {/* Service 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-[#E6EFFF] px-[20px] md:px-[70px] py-[28px] mt-[61px] rounded-[16px]">
          <div className="w-full md:w-[50%] mt-[24px] md:mt-0">
            <Image src={OurImageOne} alt="Service Image 1" />
          </div>
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h2 className="text-[24px] sm:text-[32px] font-bold text-commonBlue mb-[16px]">
              <FontPtSerif>Photo Preview</FontPtSerif>
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal text-black">
              <FontRoboto>
                Invest in your commercial product photography with a visual
                story created by our creative team. Each click at the most
                reasonable price will pay you more.
              </FontRoboto>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-[40px] sm:mt-[56px] gap-[16px] sm:gap-[29px]">
              <button className="text-[16px] sm:text-[18px] font-bold text-commonBlue flex items-center gap-[8px]">
                <FontRoboto>Explore service</FontRoboto>
                <FaArrowRight />
              </button>
              <button className="text-[16px] sm:text-[18px] font-bold text-commonBlue flex items-center gap-[8px]">
                <FontRoboto>Pricing</FontRoboto>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-[#E5FAED] px-[20px] md:px-[70px] py-[28px] mt-[61px] rounded-[16px]">
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h2 className="text-[24px] sm:text-[32px] font-bold text-[#28A154] mb-[16px]">
              <FontPtSerif>Product Revision</FontPtSerif>
            </h2>
            <p className="text-[16px] sm:text-[18px] font-normal text-black">
              <FontRoboto>
                It's not just another edge-correcting service. A team trusted by
                more than 5,000 brands will work on your product with care and
                creativity.
              </FontRoboto>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-[40px] sm:mt-[56px] gap-[16px] sm:gap-[29px]">
              <button className="text-[16px] sm:text-[18px] font-bold text-[#28A154] flex items-center gap-[8px]">
                <FontRoboto>Explore service</FontRoboto>
                <FaArrowRight />
              </button>
              <button className="text-[16px] sm:text-[18px] font-bold text-[#28A154] flex items-center gap-[8px]">
                <FontRoboto>Pricing</FontRoboto>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="w-full md:w-[50%] mt-[24px] md:mt-0 flex justify-center md:justify-end">
            <Image src={OurImageTow} alt="Service Image 2" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
