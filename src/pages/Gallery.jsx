import React, { useState } from "react";
import Subheader from "../components/Subheader";
import Navbar from "../components/Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";

const galleryImages = [
  "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/30910180/pexels-photo-30910180/free-photo-of-professional-food-photography-studio-setup.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://webworldhub.in/wp-content/uploads/2023/02/istockphoto-519749080-612x612-1.jpg",
  "https://webworldhub.in/wp-content/uploads/2023/02/istockphoto-1051616786-612x612-1.jpg",
  "https://webworldhub.in/wp-content/uploads/2023/02/istockphoto-1183301892-612x612-1.jpg",
  "https://webworldhub.in/wp-content/uploads/2023/02/istockphoto-1322906072-612x612-1.jpg",
  "https://webworldhub.in/wp-content/uploads/2023/02/istockphoto-683617400-612x612-1.jpg",
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div>
      {/* Header Section */}
      <div>
        <Subheader />
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40"></div>
        <h2 className="relative text-3xl md:text-4xl font-bold text-white">Gallery</h2>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Image Slider (First 3 Images) */}
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 z-10 text-white  z p-2 rounded-full shadow-md hover:bg-opacity-70 transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <div className="w-full flex justify-center overflow-hidden">
            {galleryImages.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`w-full sm:w-[80%] md:w-[60%] lg:w-[50%] h-[200px] md:h-[300px] object-cover rounded-lg shadow-md transition-opacity ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 z-10 text-white bg-black bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-70 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Image Grid (Remaining 6 Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {galleryImages.slice(3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 4}`}
              className="w-full h-[200px] md:h-[250px] object-cover rounded-lg shadow-md transition-transform hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
