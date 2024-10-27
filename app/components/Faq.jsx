import React from "react";
import Container from "./Container";
import Taitel from "./Taitel";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section className="pb-[100px]">
      <Container>
        <Taitel name="FAQ" />
        <div className="flex flex-col md:flex-row mt-[61px]">
          <div className="w-full md:w-[50%] px-[20px] md:px-[52px]">
            <FaqItem
              Qcontent="What's the turnabout time?"
              Qperagraph="Generally the turnabout time depends on the scheme of pricing you are selecting. The tentative turnaround time for orders less than 100 images is up to 12 business days from the time we receive your products and payment. Reach our support to get better insight."
              Qcolor="text-[#005DFF]"
            />
            <FaqItem
              Qcontent="What are the delivery options?"
              Qperagraph="Deliver your products by using the labeling with the help of any courier service or just drop it at our doorstep at the Biancca Studio, San Francisco."
              Qcolor="text-[#28A154]"
            />
            <FaqItem
              Qcontent="Will my products be returned?"
              Qperagraph="That’s totally up to you. If you want the product back, then you have to include that option in registration time. Else, it will be stored in our storage and you can pick that whenever you wish."
              Qcolor="text-[#FF6A00]"
            />
          </div>
          <div className="bg-[#EEEEEE] h-[1px] md:h-auto md:w-[1px] w-full my-[20px] md:my-0"></div>
          <div className="w-full md:w-[50%] px-[20px] md:px-[52px]">
            <FaqItem
              Qcontent="Can I provide references?"
              Qperagraph="Absolutely! If clients provide any sort of references, that is highly appreciated by our creative team."
              Qcolor="text-[#FF6A00]"
            />
            <FaqItem
              Qcontent="Can I be present during the shoot?"
              Qperagraph="Sorry, we currently do not support that under any pricing scheme. Usually any other person than the creative team is not allowed to attend the photoshoot. Otherwise, it has effects on others and time & effort get wasted as we conduct the process on a fixed plan. We hope that people would understand and respect our creative process."
              Qcolor="text-[#005DFF]"
            />
            <FaqItem
              Qcontent="Do you support revisions?"
              Qperagraph="Yes, based on the pricing plan, you will have several revision options. If you want to bring more than 90% change, then you will have to pay further."
              Qcolor="text-[#28A154]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
