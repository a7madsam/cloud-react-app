import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
function PricingCard(props) {
  const { type, priceWithPeriod, description, properties } = props;
  return (
    <div className="flex flex-col bg-white rounded-xl drop-shadow-2xl p-8 gap-4 mx-[10px]">
      <div className="w-full">
        <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-3xl text-[15px]">
          {type}
        </span>
      </div>
      <div className="mb-5">
        <span className="text-6xl font-bold">${priceWithPeriod.price}</span>
        <span className="font-bold text-slate-600">
          /{priceWithPeriod.period}
        </span>
      </div>
      <p className="text-2xl text-slate-500">{description}</p>
      <ul className="flex flex-col gap-8 mt-6">
        {properties.map((item, idx) => {
          return (
            <li
              key={idx}
              className="flex gap-3 text-[25px] items-center text-slate-700"
            >
              <span>
                <CheckIcon className="w-[30px] text-green-600" />
              </span>
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <button className="border border-indigo-500 hover:border hover:border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition-all">
        Get Started
      </button>
    </div>
  );
}

export default PricingCard;
