import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
function PlatformProp(props) {
  return (
    <div className="relative flex flex-col gap-2">
      <CheckIcon className="absolute top-0 -left-10 w-8 text-green-600" />
      <h3 className="md:text-left text-center text-[20px] font-bold">
        {props.prop}
      </h3>
      <p className="md:text-left text-center text-[18px] text-slate-700">
        {props.description}
      </p>
    </div>
  );
}

export default PlatformProp;
