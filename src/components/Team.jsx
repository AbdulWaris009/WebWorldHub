import React from 'react'
import { Link } from 'react-router-dom';

const teamMembers = [
    {
      name: "Shan Malik",
      role: "Director",
      image: "https://webworldhub.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-14-at-11.01.54-AM.jpeg",
    },
    {
      name: "Manthan Saini",
      role: "Website Developer",
      image: "https://webworldhub.in/wp-content/uploads/2023/09/Manthan-Saini.png",
    },
    {
      name: "Daksh Saini",
      role: "Website Designer",
      image: "https://webworldhub.in/wp-content/uploads/2023/09/Daksh-Sain.png",
    },
  ];
const Team = () => {
    return (
      <div className="bg-[#0a0f2c] text-white py-12 text-center px-5">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 max-w-2xl mx-auto px-5">
          Web World Hub Company has a great team. Each section has specialized
          employees in website designing, development, SEO, social media
          optimization, and software programming.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-15 px-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[80vh] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-black">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              <div className="flex justify-center gap-4 mt-2 text-gray-300">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          ))}
        </div>
        <Link to={'/our-team'}>
        <button  className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          VIEW ALL
        </button>
        </Link>
      </div>
    );
  };

export default Team