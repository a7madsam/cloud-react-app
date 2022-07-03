import React from "react";
import supportImg from "../assets/support.jpg";
import { PhoneIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import SupportOptions from "./SupportOptions";

function Support() {
  return (
    <div>
      <div className="w-full h-[700px] absolute -z-10 bg-gray-900/90">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col justify-center items-center text-white gap-[20px]">
          <p className="text-2xl mt-[100px]">SUPPORT</p>
          <h2 className="md:text-5xl text-4xl font-bold">
            Finding the right team
          </h2>
          <p className="md:text-3xl text-2xl text-slate-300 md:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            non saepe ut aut pariatur molestias enim nihil sunt, necessitatibus
            culpa inventore magnam, aliquam maiores accusamus est ipsam, nisi
            facilis expedita.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 justify-center mt-[100px] mx-[10px]">
          <SupportOptions
            usedIcon={
              <PhoneIcon className="w-[60px] absolute -top-[30px] left-8 text-white bg-indigo-600 rounded-xl p-4" />
            }
            title="Sales"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
        saepe ut aut pariatur molestias enim nihil sunt."
          />
          <SupportOptions
            usedIcon={
              <SupportIcon className="w-[60px] absolute -top-[30px] left-8 text-white bg-indigo-600 rounded-xl p-4" />
            }
            title="Technical Support"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
        saepe ut aut pariatur molestias enim nihil sunt."
          />
          <SupportOptions
            usedIcon={
              <ChipIcon className="w-[60px] absolute -top-[30px] left-8 text-white bg-indigo-600 rounded-xl p-4" />
            }
            title="Media Inquiries"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
        saepe ut aut pariatur molestias enim nihil sunt."
          />
        </div>
      </div>
    </div>
  );
}

export default Support;
