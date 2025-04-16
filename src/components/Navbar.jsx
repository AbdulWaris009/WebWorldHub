import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white w-full flex justify-between items-center py-4 px-6 shadow-md z-50 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://webworldhub.in/wp-content/uploads/2023/02/cropped-cropped-WhatsApp_Image_2023-02-01_at_8.05.08_PM-removebg-preview-300x193.png"
            alt="Web World Hub"
            className="h-20"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#273272] text-3xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-white/95 md:bg-transparent flex flex-col md:flex-row items-center md:static md:w-auto gap-6 
          text-[#273272] uppercase font-semibold tracking-wide text-md p-4 md:p-0 shadow-lg md:shadow-none
          transition-all duration-300 ease-in-out z-[1000] ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/service" },
            { name: "Pricing", path: "/pricing" },
            { name: "Gallery", path: "/gallery" },
            { name: "Video", path: "/video" },
            { name: "Contact", path: "/contact" },
            { name: "Certificate", path: "/certificate" },
          ].map((item, index) => (
            <li key={index} className="py-3 md:py-0 text-center border-b md:border-none">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-500 underline cursor-pointer"
                    : "hover:text-gray-500 cursor-pointer"
                }
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Close Button (Only in Mobile View) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-3xl text-[#273272] md:hidden"
          >
            <FaTimes />
          </button>
        </ul>

        {/* Search Icon */}
        <div
          onClick={() => setSearchOpen(true)}
          className="hidden md:flex w-10 h-10 items-center justify-center bg-[#273272] rounded-md cursor-pointer"
        >
          <FaSearch className="text-white" />
        </div>
      </nav>

      {/* Full-Screen Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-[2000] transition-all duration-500">
          <div className="w-full max-w-2xl px-6 relative">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 text-xl border-b-2 border-gray-400 outline-none focus:border-[#273272]"
              autoFocus
            />
            {/* Close Button */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-6 right-6 text-3xl text-[#273272]"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
