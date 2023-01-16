import React from "react";
import Footer from "./Footer";
import TopHeader from "./TopHeader";
import ClassesContent from "./Contents/ClassesContent";
import ClassesForChildren from "./MyStyles/ClassesForChildren";

const Classes = () => {


  return (
    <>
      <TopHeader>CLASSES</TopHeader>
      <ClassesContent/>
      <div>
          <ClassesForChildren/>
        </div>
      <Footer/>
    </>
  );
};

export default Classes;
