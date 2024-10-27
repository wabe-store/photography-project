import Banner from "./components/Banner";
import BannerSlider from "./components/BannerSlider";
import Deliver from "./components/Deliver";
import Faq from "./components/Faq";
import FooterPoster from "./components/FooterPoster";
import OurServices from "./components/OurServices";
import Pakeg from "./components/Pakeg";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Banner />
      <BannerSlider />
      <Deliver />
      <Pakeg />
      <Portfolio />
      <OurServices />
      <Faq />
      <FooterPoster />
    </>
  );
}
