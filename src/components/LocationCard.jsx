import React from 'react';

const LocationCard = () => {
  return (
    <div className="bg-[#f4f5ff] shadow-lg rounded-lg p-6 w-full mx-auto">
      <h3 className="text-lg font-semibold text-gray-900">Main Office</h3>
      <p className="text-gray-700 mt-1">Mr. Shan Malik</p>
      <p className="text-blue-600 font-bold">+91-9971001036</p>
      <p className="text-gray-600 mt-2 text-sm">
        Gurudwara Rd, Mohan Garden, Block F, Zaildar Enclave,
        Uttam Nagar, Delhi, 110066
      </p>
      <iframe
        className="w-full h-64 mt-4 rounded-lg shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.165622621626!2d77.04907157547273!3d28.626946183720807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05283a5f7ab5%3A0x34fc98a655ea5d99!2sGurudwara%20Rd%2C%20Mohan%20Garden%2C%20Block%20F%2C%20Zaildar%20Enclave%2C%20Uttam%20Nagar%2C%20Delhi%2C%20110066!5e0!3m2!1sen!2sin!4v1713263060092!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        title="Delhi Office"
      ></iframe>
    </div>
  );
};

export default LocationCard;
