import React from "react";
import Footer from "./Footer";
import Craousel from "./Craousel";
import YogaContent from "./Contents/YogaContent";
import AboutContents from "./Contents/AboutContents";
import ClassesContent from "./Contents/ClassesContent";

const Home = () => {
  return (
    <>
      <Craousel/>
      <div className="py-16">
      <ClassesContent/>
      </div>
      <div>
        <AboutContents/>
      </div>
      <div  className="py-16">
      <YogaContent/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
