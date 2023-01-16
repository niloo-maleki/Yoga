import React from 'react'
import { CLASSFORCHILDRENCART } from '../../constant/Index'
import MyButton from '../MyButton'

const ClassesForChildren = () => {
  return (
    <div>
      <section className="container grid mx-auto my-24">
        <div className="justify-center mx-auto">
          <p className=" text-lg font-normal  pb-10 ml-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </div>
        <div className="grid grid-flow-col auto-cols-max mx-auto">
          {CLASSFORCHILDRENCART.map((item, index) => (
            <div className={item.borderClasss} key={index}>
              <div className="text-center grid">
                <div className=" p-6 max-w-sm bg-white rounded-lg shadow-md hover:bg-gray-100">
                  <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <h2>KIDS FOR YOGA</h2>
                  </div>
                  <img src={item.urlImage} alt={item.alt} className="mx-auto" />
                  <div className="bg-purple-800 mr-72"></div>
                  <p className="text-gray-700 font-medium mb-8 ">
                    {item.textCard}
                  </p>
                  <MyButton classes="text-white bg-slate-900 hover:bg-yellow-500 font-medium text-xl px-6 py-2.5 text-center mt-6 mb-3 rounded-md">
                    Register
                  </MyButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ClassesForChildren