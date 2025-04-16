import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Footer from './Footer';
import shuaib from "../assets/shuaib.jpg";
import waris from "../assets/waris.jpg";


const teamMembers = [
    {
      name: "Mr. Shan Malik",
      image: "https://webworldhub.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-14-at-11.01.54-AM-768x1024.jpeg",
      role: "Director",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Abdul waris",
      image: waris,
      role: "web developer",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Mohd Shuaib Anwar",
      image: shuaib,
      role: "Web developer",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Daksh Saini",
      image: "https://webworldhub.in/wp-content/uploads/2023/09/Daksh-Sain-768x1024.png",
      role: "Website Designer",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
        name: "Manthan Saini",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Manthan-Saini-768x1024.png",
        role: "Website Developer",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Shalini",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Shalini-768x1024.png",
        role: "Website Designer",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Fiza Sehwar",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Fiza-768x1024.png",
        role: "Marketing Manager",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Sofia Khan",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Sofia-Khan-768x1024.png",
        role: "Search Engine Optimization",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Monika Sinha",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Monika-Sinha-768x1024.png",
        role: "Social Media Optimization",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Pratibha Rajpoot",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Pratibha-Rajpoot-768x1024.png",
        role: "Website Designer",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Mohd Shoeb Khan",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Shoeb-Khan-768x1024.png",
        role: "Website Designer",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Parvez Ahmad",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Pravez-768x1024.png",
        role: "Website Designer",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Nisha Kumari",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Nisha-Kumari-768x1024.png",
        role: "Website Designer",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Amit Kohra",
        image: "https://webworldhub.in/wp-content/uploads/2023/09/Amit-Khora-768x1024.png",
        role: "Markting",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Mohd Rashid",
        image: "https://th.bing.com/th/id/OIP.M9fdumH3qEcdIzMijA2xwwHaHV?w=251&h=248&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        role: "Website Developer",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Fatima Shan",
        image: "",
        role: "Markting",
        social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
    
  ];
const OurTeam = () => {
  return (
    <div>
       
        <section className="bg-[#0A0A2A] text-white py-12">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Meet our dedicated team who bring expertise and innovation to our work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#1A1A3D] p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-50 mx-auto rounded-sm object-center border-2 border-black"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
              <div className="flex justify-center mt-3 space-x-3">
                <a href={member.social.facebook} className="text-blue-500 hover:text-blue-700">
                  <FaFacebook size={20} />
                </a>
                <a href={member.social.twitter} className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={20} />
                </a>
                <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={20} />
                </a>
                <a href={member.social.instagram} className="text-pink-500 hover:text-pink-700">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div>
        <Footer/>
    </div>
    </div>
  )
}

export default OurTeam





   



