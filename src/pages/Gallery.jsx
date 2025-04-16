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
     

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <img
          src="https://webworldhub.in/wp-content/uploads/2023/02/istockphoto-683617400-612x612-1.jpg"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-center"
        />
        <div className="absolute inset-0  bg-opacity-40"></div>
      
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-8">
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
