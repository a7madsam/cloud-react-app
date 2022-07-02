import React from "react";

function AboutState(props) {
  const cls = props.className || "";
  return (
    <div
      className={`${cls} flex flex-col justify-center items-center gap-3 bg-white drop-shadow-xl border border-slate-200 rounded-xl`}
    >
      <p className="md:text-6xl text-5xl flex justify-center items-center px-4 pt-4 font-bold text-indigo-600">
        {props.title}
      </p>
      <p className="text-1xl pb-4 flex justify-center items-center text-slate-600">
        {props.description}
      </p>
    </div>
  );
}

export default AboutState;
