import React from "react";
import { PRICINGCART } from "../constant/Index";
import Footer from "./Footer";
import MyButton from "./MyButton";
import TopHeader from "./TopHeader";

const Pricing = () => {
  return (
    <div>
      <TopHeader>PRICING</TopHeader>
      <section className="container grid mx-auto my-24">
        <div className="justify-center mx-auto">
          <p className="font-bold font-mono  pb-10 ml-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
          </div>
        <div className="grid grid-flow-col auto-cols-max mx-auto">
          {PRICINGCART.map((item,index) => (
            <div className={item.borderClasss} key={index}>
              <div className="text-center grid">
                <div className=" p-6 max-w-sm bg-white rounded-lg shadow-md hover:bg-gray-100">
                  <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <h2>STARTER PLAN</h2>
                    <h3 className="mt-4 text-7xl pb-2 font-bold">
                      <span className="text-yellow-600">$</span>
                      60
                    </h3>
                  </div>                  
                  <hr className="border-y-4 rounded-md ml-28 border-indigo-600 w-1/4 mb-9"/>
                  <div className="bg-purple-800 mr-72">
                  </div>
                  <p className="text-gray-700 font-medium mb-8">
                 {item.textCard}
                  </p>
                  <MyButton classes="text-white bg-slate-900 hover:bg-yellow-500 font-medium text-xl px-6 py-2.5 text-center mt-6 mb-3">
                    PRICING
                  </MyButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Pricing;
