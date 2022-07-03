import React from "react";
import PlatformProp from "./PlatformProp";

function Platform() {
  return (
    <div className="max-w-[1240px] mx-auto mb-[70px]">
      <div className="flex flex-col items-center mt-[100px] gap-8">
        <h2 className="md:text-5xl text-4xl font-bold">All-In-One Platform</h2>
        <p className="text-2xl text-slate-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit. Unde dolore dignissimos
          laborum, veniam odio optio, nostrum temporibus ipsa eaque voluptas
          illo quaerat totam.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-16 justify-center mt-[50px] mx-[10px]">
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
        <PlatformProp
          prop="Notifications"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          rerum quam perspiciatis ab eos reprehenderit."
        />
      </div>
    </div>
  );
}

export default Platform;
