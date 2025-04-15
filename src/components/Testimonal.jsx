import React from 'react'

const Testimonial = () => {
    return (
      <div className="bg-gray-100 py-15 text-center px-5">
        <h2 className="text-2xl font-bold text-gray-800">"Amazing Designs and Quality Work!"</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Web World Hub Company has a great team for creative design and makes perfect for clients. They have top-tier employees skilled in website designing, website development, search engine optimization, social media optimization, application development, inventory software, HRMS software, billing software, and programming languages.
        </p>
        <div className="flex flex-col items-center mt-6">
          <img
            src="https://webworldhub.in/wp-content/uploads/2020/08/testimonial.jpg"
            alt="Shan Malik"
            className="w-16 h-16 rounded-full border-4 border-gray-300"
          />
          <h3 className="mt-2 text-blue-600 font-semibold">Shan Malik</h3>
          <p className="text-gray-500 text-sm">OWNER OF WEB WORLD HUB</p>
        </div>
      </div>
    );
  };

export default Testimonial;