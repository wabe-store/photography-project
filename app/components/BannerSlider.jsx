import React from "react";
import SlideContainer from "./SlideContainer";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SlideImage1 from "../assets/heroImage.png";
import SlideImage2 from "../assets/SlideImage2.png";
import SlideImage3 from "../assets/SlideImage3.png";
import SlideImage4 from "../assets/SlideImage4.png";
import SlideImage5 from "../assets/SlideImage5.png";
import portImage1 from "../assets/portImage1.png";
import portImage2 from "../assets/portImage2.png";
import portImage3 from "../assets/portImage3.png";
import portImage4 from "../assets/portImage4.png";
import portImage5 from "../assets/portImage5.png";
import portImage6 from "../assets/portImage6.png";
import PeraGraps from "./PeraGraps";
import Container from "./Container";
import Devider from "./Devider";
import CompaniOne from "../assets/companiOne.png";
import CompaniTow from "../assets/companiTow.png";
import CompaniThree from "../assets/companiThree.png";
import CompaniFour from "../assets/companiFour.png";
import CompaniFive from "../assets/companiFive.png";

const BannerSlider = () => {
  // Create an array of images
  const images = [
    SlideImage1,
    portImage1,
    SlideImage2,
    portImage2,
    SlideImage3,
    portImage3,
    SlideImage4,
    portImage4,
    SlideImage5,
    portImage5,
    portImage6,
  ];

  // Duplicate the images array 4 times
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="mt-[60px]">
      <SlideContainer>
        <Marquee gradient={true} gradientColor="white" pauseOnHover speed={80}>
          {duplicatedImages.map((src, index) => (
            <div key={index} className="mx-2">
              <Image src={src} alt="slide image" width={200} height={300} />
            </div>
          ))}
        </Marquee>
        <PeraGraps
          className="mt-[70px]"
          content="Commercial product photography agency
      praised by over 5,000 brands."
        />
      </SlideContainer>
      <Container>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 mt-[64px]">
          <Image src={CompaniOne} className="w-[120px] md:w-auto" />
          <Image src={CompaniTow} className="w-[120px] md:w-auto" />
          <Image src={CompaniThree} className="w-[120px] md:w-auto" />
          <Image src={CompaniFour} className="w-[120px] md:w-auto" />
          <Image src={CompaniFive} className="w-[120px] md:w-auto" />
        </div>

        <Devider />
      </Container>
    </div>
  );
};

export default BannerSlider;
