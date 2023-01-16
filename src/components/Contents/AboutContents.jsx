import React from "react";
import MyButton from "../MyButton";
import aboutImg from "../../assets/images/about.png";

const AboutContents = () => {
  return (
    <section className="container grid mx-auto">
      <div className="container flex justify-center mx-auto pt-10">
        <div className="pb-10 text-center">
          <p className="text-lg  font-normal ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </p>
          <p className="text-lg font-normal ">dolore magna aliquyam erat, sed diam voluptu</p>
        </div>
      </div>
      <div className="grid">
        <img
          src={aboutImg}
          alt="aboutImg"
          className="text-sm h-auto max-w-full text-center"
        />
      </div>
      <div className="pt-10 text-center">
        <MyButton classes="text-white bg-slate-900 hover:bg-yellow-500  font-medium rounded-3xl text-xl px-20 py-2.5 text-center mb-2">
          Read More
        </MyButton>
      </div>
    </section>
  );
};

export default AboutContents;
