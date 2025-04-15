import React, { useState } from "react";
import { motion } from "framer-motion";

const carouselItems = [
  {
    title: "Design",
    description:
      "Web World Hub provides UI/UX design services and great experience in Delhi.",
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Development",
    description:
      "Web World Hub offers research & development services for the best websites in Jharkhand.",
    image:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Marketing",
    description:
      "Web World Hub has an expert marketing team for the best digital marketing solutions in Maharashtra.",
    image:
      "https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto min-h-[450px] flex flex-col items-center justify-center">
      {/* Carousel Wrapper */}
      <div className="relative flex items-center justify-center w-full">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-5 z-10 bg-gray-300 text-black p-2 md:p-3 rounded-full shadow-md hover:bg-gray-400 transition"
        >
          ◀
        </button>

        {/* Slide Container */}
        <div className="w-full flex justify-center items-center">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index === current ? 1 : 0.5,
                scale: index === current ? 1 : 0.85,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute w-[90%] sm:w-[60%] md:w-[45%] lg:w-[35%] xl:w-[30%] p-5 bg-white rounded-lg shadow-lg flex flex-col items-center transition-all ease-in-out ${
                index === current ? "block" : "hidden"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 md:h-52 object-cover rounded-lg"
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-md text-center mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-5 bg-gray-300 text-black p-2 md:p-3 rounded-full shadow-md hover:bg-gray-400 transition"
        >
          ▶
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex mt-5 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-[#273272]" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
