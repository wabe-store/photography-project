import Container from "./Container";
import React from "react";
import FontPtSerif from "./fontComponents/FontPtSerif";
import FontRoboto from "./fontComponents/FontRoboto";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GiEternalLove } from "react-icons/gi";

const Footer = () => {
  return (
    <section className="pt-[100px]">
      <Container>
        <div className="flex flex-col xl:flex-row mx-[10px] ">
          <div className="flex  justify-between flex-wrap gap-10 flex-row xl:flex-row xl:w-[60%]">
            <div className="">
              <h2 className="text-[18px] font-bold text-black mb-[24px]">
                <FontPtSerif>Why Us</FontPtSerif>
              </h2>
              <FontRoboto>
                <ul>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Channel
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Engagement
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Scale
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Watch Demo
                  </li>
                </ul>
              </FontRoboto>
            </div>

            <div className="">
              <h2 className="text-[18px] font-bold text-black mb-[24px]">
                <FontPtSerif>Product</FontPtSerif>
              </h2>
              <FontRoboto>
                <ul>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Features
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Integrations
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Enterprise
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Solutions{" "}
                  </li>
                </ul>
              </FontRoboto>
            </div>

            <div className="">
              <h2 className="text-[18px] font-bold text-black mb-[24px]">
                <FontPtSerif>Resources</FontPtSerif>
              </h2>
              <FontRoboto>
                <ul>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Partners
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Developers
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Apps
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Blogs{" "}
                  </li>
                </ul>
              </FontRoboto>
            </div>

            <div className="">
              <h2 className="text-[18px] font-bold text-black mb-[24px]">
                <FontPtSerif>Company</FontPtSerif>
              </h2>
              <FontRoboto>
                <ul>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    About Us
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Leadership
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Investor Relations
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    News{" "}
                  </li>
                </ul>
              </FontRoboto>
            </div>

            <div className="">
              <h2 className="text-[18px] font-bold text-black mb-[24px]">
                <FontPtSerif>Pricing</FontPtSerif>
              </h2>
              <FontRoboto>
                <ul>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Plans
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[56px] mb-[11px]">
                    Paid vs. Free
                  </li>
                </ul>
              </FontRoboto>
            </div>
          </div>
          <div className="xl:w-[40%] flex xl:justify-end mx-[10px] mt-10 xl:mt-0">
            <div className="">
              <h2 className="text-[18px] font-bold text-black mb-[24px]">
                <FontPtSerif>Contact</FontPtSerif>
              </h2>
              <FontRoboto>
                <ul>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[18px] mb-[11px]">
                    <FaPhoneAlt className=" text-commonBlue" />
                    +214556905345
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[18px] mb-[11px]">
                    <MdEmail className="text-[#FF6A00]" />
                    something@email.com{" "}
                  </li>
                  <li className="hover:text-[#212121] duration-100 text-[14px] text-[#757575] font-bold flex gap-[18px] mb-[11px]">
                    <FaLocationDot className="text-[#28A154]" />
                    567, Kansas, San Francisco, USA
                  </li>
                </ul>
              </FontRoboto>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#E1E6ED] mt-[100px]"></div>
        <div className="flex flex-col xl:flex-row justify-between items-center py-[20px]">
          <div>
            <span className="text-[14px] font-semibold">
              <FontPtSerif>
                All rights Reserved &copy; Your Company, 2021
              </FontPtSerif>
            </span>
          </div>
          <div>
            <span>
              <FontPtSerif>
                <span className="text-[14px] font-semibold flex items-center gap-[5px]">
                  Made with <GiEternalLove className="text-red-500" />
                  by :
                </span>
              </FontPtSerif>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
