import React from "react";


const portfolioItems = [
  "https://webworldhub.in/wp-content/uploads/2020/06/portfolio1-300x300.jpg",
  "https://webworldhub.in/wp-content/uploads/2020/06/portfolio2-300x300.jpg",
  "https://webworldhub.in/wp-content/uploads/2020/06/portfolio3-300x300.jpg",
  "https://webworldhub.in/wp-content/uploads/2020/06/portfolio4-1.jpg",
];

const Portfolio = () => {
  return (
    <div className="bg-[#0a0f2c] text-white py-12 text-center px-5 ">
      <h2 className="text-6xl font-bold mb-4 mt-10">Portfolio</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mt-5">
        Web World Hub provides the services of public relations for websites
        and has great experience in building the best websites in Odisha.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-15 px-15">
        {portfolioItems.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Portfolio Item"
            className="w-full h-60 object-cover rounded-sm shadow-lg"
          />
        ))}
      </div>
      <button className="mt-12 bg-blue-500 text-white px-6 py-2 rounded-sm hover:bg-blue-600 transition">
        EXPLORE MORE
      </button>
    </div>
  );
};

export default Portfolio;
