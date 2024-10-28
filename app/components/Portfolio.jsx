"use client"
import React, { useState } from "react";
import Container from "./Container";
import Taitel from "./Taitel";
import FontRoboto from "./fontComponents/FontRoboto";
import Image from "next/image";
import PortImage1 from "../assets/portImage1.png";
import PortImage2 from "../assets/portImage2.png";
import PortImage3 from "../assets/portImage3.png";
import PortImage4 from "../assets/portImage4.png";
import PortImage5 from "../assets/portImage5.png";
import PortImage6 from "../assets/portImage6.png";

import { FaArrowDown } from "react-icons/fa";

const Portfolio = () => {
  const allImages = [
    PortImage1,
    PortImage2,
    PortImage3,
    PortImage4,
    PortImage5,
    PortImage6,
    PortImage1,
    PortImage2,
    PortImage3,
    PortImage4,
    
  ];

  const [displayImages, setDisplayImages] = useState(allImages.slice(0, 6)); // Display first 6 images initially
  const [viewedAll, setViewedAll] = useState(false); // Track if all images are shown

  // Function to display the remaining images
  const handleViewMore = () => {
    setDisplayImages(allImages); // Show all images
    setViewedAll(true); // Update the state to indicate all images have been shown
  };

  return (
    <section className="pb-[104px]">
      <Container>
        <Taitel name="Over 1,00,000 Photos Shot" />
        <FontRoboto>
          <ul className="text-[16px] sm:text-[18px] text-[#757575] font-bold flex flex-wrap gap-[20px] sm:gap-[40px] lg:gap-[56px] mt-[40px] sm:mt-[60px] justify-center mb-[40px] sm:mb-[80px]">
            <li className="relative group hover:text-[#005DFF] duration-100">
              Home
              <span className="absolute bottom-[-4px] left-0 right-0 mx-auto h-[3px] w-0 bg-[#005DFF] duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:text-[#005DFF] duration-100">
              How it works
              <span className="absolute bottom-[-4px] left-0 right-0 mx-auto h-[3px] w-0 bg-[#005DFF] duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:text-[#005DFF] duration-100">
              Reviews
              <span className="absolute bottom-[-4px] left-0 right-0 mx-auto h-[3px] w-0 bg-[#005DFF] duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:text-[#005DFF] duration-100">
              Works
              <span className="absolute bottom-[-4px] left-0 right-0 mx-auto h-[3px] w-0 bg-[#005DFF] duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:text-[#005DFF] duration-100">
              FAQs
              <span className="absolute bottom-[-4px] left-0 right-0 mx-auto h-[3px] w-0 bg-[#005DFF] duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </FontRoboto>
        <div className="flex justify-center flex-wrap gap-4">
          {displayImages.map((image, index) => (
            <div key={index} className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
              <Image src={image} alt={`Portfolio Image ${index + 1}`} />
            </div>
          ))}
        </div>
        {!viewedAll && (
          <button
            onClick={handleViewMore}
            className="rounded-full w-[255px] text-[#FF6A00] h-[46px] border-[1px] border-[#FF6A00] font-bold flex items-center gap-[10px] justify-center mt-10 mx-auto"
          >
            <FontRoboto>View portfolio</FontRoboto>
            <FaArrowDown />
          </button>
        )}
      </Container>
    </section>
  );
};

export default Portfolio;