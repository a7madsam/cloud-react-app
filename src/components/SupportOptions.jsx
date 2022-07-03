import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
function SupportOptions(props) {
  return (
    <div className="flex flex-col bg-white drop-shadow-2xl border rounded-lg">
      {props.usedIcon}
      <div className="flex flex-col gap-[25px] px-[30px] pb-[30px]">
        <p className="text-3xl font-bold mt-[70px] text-black">{props.title}</p>
        <p className="text-2xl text-slate-600">{props.description}</p>
      </div>
      <div className="flex gap-2 items-center px-[20px] py-[10px] w-full bg-[#F1F5F9] text-indigo-600 cursor-pointer">
        <span>Contact Us</span>
        <ArrowSmRightIcon className="w-[20px]" />
      </div>
    </div>
  );
}
export default SupportOptions;
