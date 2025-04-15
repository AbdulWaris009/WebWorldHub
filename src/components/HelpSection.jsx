import React from "react";
import Carousel from "./Carousel";

const HelpSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 md:px-10 py-10">
      {/* Text Section */}
      <div className="text-center w-full md:w-[60%] lg:w-[50%]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#273272]">
          How can we help you?
        </h1>
        <p className="text-black text-sm md:text-md mt-2 px-2">
          Because Web World Hub Company has an excellent team for creative design 
          and makes perfect for the clients, shaping employees like Website Designing experts.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="mt-8 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[800px]">
        <Carousel autoSlide={true} interval={3000} />
      </div>
    </div>
  );
};

export default HelpSection;
