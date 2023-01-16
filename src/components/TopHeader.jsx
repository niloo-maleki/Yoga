import React from "react";
import Header from "./Header";

const TopHeader = ({children}) => {
  return (
    <section className="grid  max-w-full h-auto ">
      <div className= "bg-indigo-600 h-24">
        <Header />
      </div>
      <div className="bg-slate-900 h-24 text-center text-white font-semibold text-4xl flex">
        <span className="m-auto">{children}</span></div>
    </section>
  );
};

export default TopHeader;
