import React, { useEffect } from "react";
import VisitorCounter from "./VisitorCounter";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRedditAlien,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,fr,de,es,zh,ru,it,ja,ko,ar,pt,tr,pl,th,nl,sv,vi,bn,gu,kn,ml,mr,ta,te,ur",
          layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL, // <-- this is the dropdown
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <footer
      className="relative text-white bg-center"
      style={{
        backgroundImage:
          "url('https://webworldhub.in/wp-content/uploads/2020/06/portfolio4-1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 bg-opacity-80 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-lg py-6">
        {/* About Section */}
        <div>
          <img
            src="https://webworldhub.in/wp-content/uploads/2023/02/cropped-cropped-WhatsApp_Image_2023-02-01_at_8.05.08_PM-removebg-preview-300x193.png"
            alt="Web World Hub Logo"
            className="w-32 mb-4"
          />
          <p className="text-white text-md mb-4">
            About our work procedure”When we think about websites, the very first thing
            which clicks our mind is that it should not be the image of the company only,
            instead it should reflect our soul, motto , aim, message and many other vital
            things which the reader just not read but feel also.”
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 flex-wrap text-white text-xl mt-15">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaRedditAlien /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="#" className="hover:text-red-600"><FaPinterestP /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col space-y-2">
  <h3 className="text-lg font-semibold text-black">Company</h3>
  <a href="/" className="text-white hover:text-gray-200">Home</a>
  <a href="/about" className="text-white hover:text-gray-200">About</a>
  <a href="/services" className="text-white hover:text-gray-200">Services</a>
  <a href="/contact" className="text-white hover:text-gray-200">Contact</a>

  {/* WebMail Button */}
  <div className="pt-4">
    <a
      href="mailto:info@webworldhub.in"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-medium rounded-full shadow-md transition duration-300"
    >
      📧 WebMail
    </a>
  </div>
</div>
        

        {/* Business Section */}
        <div className="flex flex-col space-y-2">
  <h3 className="text-lg font-semibold text-black">Business</h3>
  <a href="#" className="text-white hover:text-white">Our Mission</a>
  <a href="/our-team" className="text-white hover:text-white">Our Team</a>
  <a href="#" className="text-white hover:text-white">Our Vision</a>
  <a href="/pricing" className="text-white hover:text-white">Pricing</a>

  {/* Visitor Counter placed here */}
  <div className="mt-4">
    <VisitorCounter />
  </div>
</div>

        {/* Contact & Translator Section */}
        <div>
          <h3 className="text-lg font-semibold text-black">Get In Touch</h3>
          <p className="text-white text-md mt-2">
            A-1 3rd Floor Gurudwara Rd, Mohan Garden, Block F, Zaildar Enclave, Uttam Nagar, Delhi, 110066
            Webworldhub@gmail.com info@webworldhub.in
            +91 9971001036
            +91 8448623836,+91 8285927937
          </p>
          <p className="text-white text-sm">+91 9971001036</p>

          {/* Google Translate Widget */}
        
            <div id="google_translate_element" className="p-2 bg-white rounded-md shadow-md"></div>
          </div>
        </div>
      

     

      {/* Bottom Bar */}
      <div className="relative z-10 mt-6  h-[6rem] border-gray-300 text-center pt-6 text-sm text-white bg-black bg-opacity-60">
      Copyright © 2025 Web World Hub | Website Development | Graphics Designing | Digital Marketing | Google ADS | IT Services | Powered by Web World Hub | Website Development | Graphics Designing | Digital Marketing | Google ADS | IT Services
      </div>
    </footer>
  );
};

export default Footer;
