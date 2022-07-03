import React from "react";
import PricingCard from "./PricingCard";

function Pricing() {
  const properties = [
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
    "Lorem, ipsum dolor.",
  ];
  return (
    <div className="bg-[#0F172A] h-[850px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col justify-center items-center text-white gap-[20px]">
          <p className="text-slate-300 text-2xl mt-[70px]">PRICING</p>
          <h2 className="md:text-5xl text-4xl font-bold text-center">
            The right price for your research
          </h2>
          <p className="md:text-3xl text-2xl text-slate-300 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            non saepe ut aut pariatur molestias enim nihil sunt.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-8 mt-[70px]">
          <PricingCard
            type="STANDARD"
            priceWithPeriod={{ price: "49", period: "mo" }}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            properties={properties}
          />
          <PricingCard
            type="PREMIUM"
            priceWithPeriod={{ price: "99", period: "mo" }}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            properties={properties}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
