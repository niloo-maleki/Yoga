import React from 'react'
import MyButton from "../MyButton";
import yoga from "../../assets/images/yoga_mo1.png";

const YogaContent = () => {
  return (
    <section>
        <div className="grid grid-cols-2 px-7">
          <img src={yoga} alt="yoga" className="flex justify-center mx-auto" />
          <div className="bg-slate-900	flex items-center w-11/12 ">
            <div className="grid justify-center px-32 m-auto">
              <h2 className="text-left pb-8 font-bold text-5xl text-white flex">
                Mind in Balance
              </h2>
              <p className="text-left font-normal text-base  text-white pb-9 flex">
                Mind in Balance Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptu
              </p>
              <hr />
              <div className="pt-10 flex">
                <MyButton classes="text-white hover:bg-white hover:text-yellow-500 bg-yellow-500 font-medium  text-xl px-16 py-2.5 text-center mb-2">
                  Read More
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default YogaContent