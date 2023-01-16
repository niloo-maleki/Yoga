import "swiper/css";
import "swiper/css";
import "./Header.css";
import "./Craousel.css";
import React from "react";
import Header from "./Header";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MyButton from "./MyButton";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import { SLIDESWIPER } from "../constant/Index";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Craousel = () => {
  return (
    <div
      id="header"
      className=" bg-no-repeat bg-center container min-w-full h-auto"
    >
      <Header />
      <section>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          rewind={true}
          className="mySwiper"
          autoplay={{
            delay: 3000,
          }}
        >
          {SLIDESWIPER.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={item.slideImage}
                  className="text-sm h-auto max-w-full text-center"
                  alt={item.alt}
                />
                <h1>
                  <span className="text-2xl text-white flex">Now Started</span>
                  {SLIDESWIPER.map((item, index) => (
                    <strong
                      id="text-string"
                      key={index}
                      className={`${item.colorVord} text-9xl text-left mx-12`}
                    >
                      {item.vord}
                    </strong>
                  ))}
                </h1>
              </div>
              <div className="flex justify-center">
                <MyButton classes="text-white bg-slate-900 hover:bg-yellow-500  font-medium rounded-3xl text-xl px-20 py-2.5 text-center mb-2">
                  Contact US
                </MyButton>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Craousel;
