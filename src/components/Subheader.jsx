import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaSkype,
} from "react-icons/fa";

const Subheader = () => {
  const icons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaPinterestP />, link: "#" },
    { icon: <FaSkype />, link: "#" },
  ];

  return (
    <div className="w-full bg-[#273272] py-3 text-white px-3 text-sm">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
        {/* Centered Contact Info */}
        <div className="flex items-center gap-2 text-center w-full">
          <span>
            <FaPhoneVolume />
          </span>{" "}
          <a href="tel:+919971001036" className=" hover:text-gray-300">
            +91 9971001036
          </a>{" "}
          <span>
            <MdEmail />
          </span>{" "}
          <a href="mailto:info@webworldhub.in" className=" hover:text-gray-300">
            info@webworldhub.in
          </a>
        </div>

        {/* Social Icons - Only on Desktop */}
        <div className="hidden md:flex gap-3">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-7 h-7 flex items-center justify-center bg-white text-[#273272] rounded-md shadow-md hover:bg-gray-100 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subheader;
