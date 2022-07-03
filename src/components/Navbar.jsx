import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  const closeHandler = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className="fixed flex items-center justify-between w-full bg-[#e4e4e6] h-[70px] drop-shadow-md px-4 z-30">
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} offset={-50} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
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
        <div className="fixed top-[69px] w-screen bg-[#e4e4e6] px-3 z-30 md:hidden">
          <ul>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              <Link
                onClick={closeHandler}
                to="home"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              <Link
                onClick={closeHandler}
                to="about"
                smooth={true}
                offset={-80}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              <Link
                onClick={closeHandler}
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Support
              </Link>
            </li>
            <li className="p-3 border-b-2 border-zinc-300 w-full hover:pl-4 transition-all">
              <Link
                onClick={closeHandler}
                to="platforms"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Platforms
              </Link>
            </li>
            <li className="p-3 w-full hover:pl-4 transition-all">
              <Link
                onClick={closeHandler}
                to="pricing"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Pricing
              </Link>
            </li>
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
