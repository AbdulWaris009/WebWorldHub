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
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-2 md:gap-0">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="flex items-center gap-1">
            <FaPhoneVolume />
            <a href="tel:+919971001036" className="hover:text-gray-300">
              +91 9971001036
            </a>
          </span>
          <span className="flex items-center gap-1">
            <MdEmail />
            <a
              href="mailto:info@webworldhub.in"
              className="hover:text-gray-300"
            >
              info@webworldhub.in
            </a>
          </span>

          {/* Hidden on small screens */}
          <div className="hidden md:flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1">
              GSTIN:
              <span className="hover:text-gray-300">09ABYFM3139K1ZH</span>
            </span>
            <span className="flex items-center gap-1">
              UDYAM-UP-<span className="hover:text-gray-300">02-0005885</span>
            </span>
            <span className="flex items-center gap-1">
              UAM No-
              <span className="hover:text-gray-300">DL06E0024115</span>
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-3 mt-2 md:mt-0">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-7 h-7 flex items-center justify-center bg-white text-[#273272] rounded-md shadow-md hover:bg-gray-200 transition"
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
