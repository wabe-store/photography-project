import React from "react";
import Container from "./Container";
import PeraGraps from "./PeraGraps";
import Taitel from "./Taitel";
import DelevarItem from "./DelevarItem";
import Devider from "./Devider";

const Deliver = () => {
  return (
    <>
      <Container>
        <PeraGraps className="mb-[11px]" content="How it happens" />
        <Taitel name="You deliver-We Click" />

        <div className="mx-[10px] flex gap-10 flex-col sm:flex-row flex-wrap justify-center xl:justify-between mt-[61px]">
          <DelevarItem
            h2color="text-[#005DFF]"
            h2="Inform us about your product"
            className="bg-[#E6EFFF] text-[#005DFF]"
            number="1"
            pera="Introduce your product, select through the pricing plan and let us know if you have any references in mind"
          />
          <DelevarItem
            h2color="text-[#FF6A00]"
            h2="Deliver your products"
            className="bg-[#FFEFE6] text-[#FF6A00]"
            number="2"
            pera="Deliver the sujects at our doorstep, we will click perfect shots in no time and make it online ready"
          />
          <DelevarItem
            h2color="text-[#28A154]"
            h2="Reviewing the shots"
            className="bg-[#E5FAED] text-[#28A154]"
            number="3"
            pera="After the photoshoot, you will get to review the shots and let us know if there any modification needed."
          />
        </div>
        <Devider />
      </Container>
    </>
  );
};

export default Deliver;
