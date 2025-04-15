import React from "react";
import myImage from "../assets/hero.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-12"
      style={{
        backgroundImage:
          `url(${myImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center md:text-left max-w-3xl">
        <h4 className="text-lg md:text-xl font-bold uppercase tracking-wide">
          Fastest And Most Lightweight Websites
        </h4>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
          Create Amazing <span className="text-[#273272]">Websites</span>
        </h1>
        <p className="mt-4 text-sm md:text-lg leading-relaxed px-2 md:px-0">
          At Web World Hub, we believe simplicity speaks louder than complexity.
          Our web designs blend uniqueness with the latest technologies,
          ensuring superior performance and efficiency. We specialize in PHP,
          Core PHP, HTML, WordPress, and digital marketing to help you achieve
          the best results.
        </p>
        <Link to={'/'}>
        <button className="py-3 px-5 cursor-pointer rounded bg-blue-500 w-auto md:w-40 mt-5">
          GET STARTED
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
