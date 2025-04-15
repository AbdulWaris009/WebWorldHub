import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Background Image */}
        <div className="relative w-full md:w-1/2">
          <div
            className="absolute inset-0 bg-black opacity-50 rounded-lg"
          ></div>
          <img
            src="https://thumbs.dreamstime.com/b/man-laptop-16500418.jpg" // Replace with your actual image URL
            alt="Why Choose Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Web World Hub Company has a great team for creative design, ensuring the best results for clients. Our team specializes in <span className="font-semibold">Website Designing, Development, SEO, Social Media Optimization, App Development, Inventory Software, HRMS, and more.</span>
          </p>
          
          <p className="mt-4 text-gray-600 leading-relaxed">
            <span className="font-bold">Allowed To All Work:</span> We ensure innovative solutions that provide better performance and efficiency.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            <span className="font-bold">Commitment to Simplicity:</span> We focus on creating user-friendly designs that attract and retain visitors.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
