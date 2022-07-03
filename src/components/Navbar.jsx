import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className="flex items-center justify-between bg-[#e4e4e6] h-[70px] drop-shadow-md px-4">
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden gap-4 md:flex">
          <button className="border-none bg-transparent text-black">
            Sign In
          </button>
          <button className="border border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition-all">
            Sign Up
          </button>
        </div>
        {!clicked ? (
          <MenuIcon onClick={clickHandler} className="md:hidden w-6" />
        ) : (
          <XIcon onClick={clickHandler} className="md:hidden w-6" />
        )}
      </div>
      {clicked && (
        <div className="absolute w-screen bg-[#e4e4e6] px-3 z-10 md:hidden">
          <ul>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              Home
            </li>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              About
            </li>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              Support
            </li>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              Platforms
            </li>
            <li className="p-3 w-full hover:pl-4 transition-all">Pricing</li>
          </ul>
          <div className="flex flex-col gap-4 py-3">
            <button className="border border-indigo-500 bg-transparent text-indigo-500">
              Sign In
            </button>
            <button className="border border-indigo-500 hover:border hover:border-indigo-500 hover:bg-transparent hover:text-indigo-500 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
