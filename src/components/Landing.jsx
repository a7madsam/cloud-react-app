import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Landing = () => {
  return (
    <>
      <div
        className="flex w-full 
      justify-evenly items-center h-[calc(100vh-70px)] bg-zinc-300"
      >
        <div className="flex flex-col justify-center mb-[50px]">
          <p className="text-2xl mb-2">Unique Sequencing & Production</p>
          <p className="text-5xl md:text-6xl font-bold mb-2">
            Cloud <br /> Management
          </p>
          <p className="text-2xl mb-9">This is our Tech brand</p>
          <button>Get Started</button>
        </div>
        <div className="md:flex hidden w-[40%] mb-[50px]">
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 gap-4 mx-1 md:min-w-[760px] justify-center items-center md:left-[50%] bottom-[5%] md:bottom-[0] 
        md:translate-x-[-50%] md:translate-y-[-50%] px-[20px] bg-zinc-300 border border-zinc-300 rounded-md
        drop-shadow-lg"
        >
          <div>Data Services</div>
          <div className="flex gap-10 flex-wrap">
            <p className="flex gap-2 justify-center items-center text-slate-600">
              <CloudUploadIcon className="w-[25px] text-indigo-600" /> App
              Security
            </p>
            <p className="flex gap-2 justify-center items-center text-slate-600">
              <DatabaseIcon className="w-[25px] text-indigo-600" /> Dashboard
              Design
            </p>
            <p className="flex gap-2 justify-center items-center text-slate-600">
              <ServerIcon className="w-[25px] text-indigo-600" /> Cloud Data
            </p>
            <p className="flex gap-2 justify-center items-center text-slate-600">
              <PaperAirplaneIcon className="w-[25px] text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
