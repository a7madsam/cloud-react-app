import React from "react";
import AboutState from "./AboutState";

function About() {
  return (
    <div name="about" className="flex justify-center items-center my-6">
      <div className="flex flex-col justify-center items-center min-h-[550px] w-[70%]">
        <h2 className="md:text-5xl text-3xl font-bold py-4 text-center">
          Trusted by developers across the world
        </h2>
        <p className="md:text-3xl py-4 text-1xl text-center text-slate-600">
          Lorem ipsum dolor sit amet connect, adipiscing elit. Cumque asperiores
          am placeat veritatis dignissimos itaque.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-1 w-full justify-center">
          <AboutState title="100%" description="Completion" />
          <AboutState title="24/7" description="Delivery" />
          <AboutState title="100K" description="Transactions" />
        </div>
      </div>
    </div>
  );
}

export default About;
