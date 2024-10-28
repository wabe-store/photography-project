"use client";
import React, { useState } from "react";
import Container from "./Container";
import Logo from "../assets/Logo.png";
import Image from "next/image";
import FontRoboto from "./fontComponents/FontRoboto";

const NaveBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-between mt-[27px] mx-[10px]">
          {/* Logo */}
          <Image src={Logo} alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <FontRoboto>
              <ul className="text-[18px] text-[#757575] font-bold flex gap-[56px]">
                <li className="hover:text-[#212121] duration-100">Home</li>
                <li className="hover:text-[#212121] duration-100">
                  How it works
                </li>
                <li className="hover:text-[#212121] duration-100">Reviews</li>
                <li className="hover:text-[#212121] duration-100">Works</li>
                <li className="hover:text-[#212121] duration-100">FAQs</li>
              </ul>
            </FontRoboto>
            <button className="w-[136px] h-[46px] bg-commonBlue rounded-[4px] text-white text-[18px] ml-[56px]">
              <FontRoboto>Get started</FontRoboto>
            </button>
          </div>

          {/* Mobile Menu Toggle (Custom Hamburger Icon with Two Bars) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none mt-[10px]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-8 h-6">
                {/* First bar */}
                <div
                  className={`w-full h-[4px] bg-[#757575] rounded transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                ></div>
                {/* Second bar */}
                <div
                  className={`w-full h-[4px] bg-[#757575] rounded mt-[10px] transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when menuOpen is true) */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out transform overflow-hidden bg-gray-200 mt-2 absolute w-full ${
            menuOpen ? "max-h-[400px]" : "max-h-0"
          }`}
          style={{ transition: "max-height 0.5s ease-in-out" }}
        >
          <ul className="flex flex-col items-start text-[18px] text-[#757575] font-bold gap-4 mt-4 p-4">
            <li className="hover:text-[#212121] duration-100">Home</li>
            <li className="hover:text-[#212121] duration-100">How it works</li>
            <li className="hover:text-[#212121] duration-100">Reviews</li>
            <li className="hover:text-[#212121] duration-100">Works</li>
            <li className="hover:text-[#212121] duration-100">FAQs</li>
            <button className="w-full h-[46px] bg-commonBlue rounded-[4px] text-white text-[18px] mt-4">
              <FontRoboto>Get started</FontRoboto>
            </button>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default NaveBar;
