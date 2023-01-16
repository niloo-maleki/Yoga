import React from 'react'
import { YOGACLASSES } from '../../constant/Index';
import MyButton from "../MyButton";



const ClassesContent = () => {
  return (
    <section className="container grid mx-auto">
        <div className="container flex justify-center mx-auto pt-10">
          <div className="pb-10 text-center">
            <h2 className="text-5xl font-bold">Our Classes</h2>
            <p className="text-lg pt-8 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <div className="container mx-auto grid">
          {YOGACLASSES.map((item, index) => (
            <div
              key={index}
              className={`${item.class} container mx-auto text-center`}
            >
              <img src={item.urlImage} alt={item.alt} className="mx-auto" />
              <h3 className="text-3xl mt-8 font-bold">{item.name}</h3>
              <span className="text-slate-600 text-lg font-bold">
                {item.describtion}
              </span>
            </div>
          ))}
        </div>
        <div className="pt-10 text-center">
          <MyButton classes="text-white bg-slate-900 hover:bg-yellow-500  font-medium rounded-3xl text-xl px-20 py-2.5 text-center mb-2">
            Read More
          </MyButton>
        </div>
      </section>
  )
}

export default ClassesContent