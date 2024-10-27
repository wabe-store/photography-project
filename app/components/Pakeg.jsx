import React from "react";
import Container from "./Container";
import Taitel from "./Taitel";
import PakegItem from "./PakegItem";
import Devider from "./Devider";

const Pakeg = () => {
  return (
    <>
      <Container>
        <Taitel name="Our Packages" />
        <div className="gap-10 mx-[10px] flex flex-col sm:flex-row justify-center sm:justify-between mt-[61px] sm:flex-wrap xl:flex-nowrap">
          <PakegItem
            pakegName="Basic"
            prizeColor="text-[#005DFF]"
            divBg="bg-[#E6EFFF]"
            prize="$9"
            perContent="/ per image"
            perColor="text-[#005DFF]"
            list1="High quality images"
            list2="Single Revision"
            list3="10 Products per order"
            list4="Not providing softcopy"
            list5="Free return shipment"
            buttonStyle="border-[#005DFF] text-[#005DFF]"
          />
          <PakegItem
            pakegName="Avarage"
            prizeColor="text-[#FF6A00]"
            divBg="bg-[#FFEFE6]"
            prize="$19"
            perContent="/ per image"
            perColor="text-[#FF6A00]"
            list1="High quality images"
            list2="3 Revisions"
            list3="25 Products per order"
            list4="Provides softcopy"
            list5="Free return shipment"
            buttonStyle="border-[#FF6A00] text-[#FF6A00]"
          />
          <PakegItem
            pakegName="Professional"
            prizeColor="text-[#28A154]"
            divBg="bg-[#E5FAED]"
            prize="$29"
            perContent="/ per image"
            perColor="text-[#28A154]"
            list1="High quality images"
            list2="5 Revisions"
            list3="50 Products per order"
            list4="Provides softcopy & PSD"
            list5="Free return shipment"
            buttonStyle="border-[#28A154] text-[#28A154]"
          />
        </div>
        <Devider />
      </Container>
    </>
  );
};

export default Pakeg;
