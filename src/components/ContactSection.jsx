import React from 'react'

const ContactSection = () => {
   
        return (
          <div className="bg-[#f4f5ff] py-16 px-5 text-center">
            <div className="bg-white shadow-lg p-8 max-w-3xl mx-auto rounded-lg">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Would you like to start a project with us?</h2>
              <p className="text-gray-600 mb-6">
                Because Web World Hub Company has a great team for creative design and making perfect projects for clients.
                We have separate employees for Website Designing, Website Development, SEO, Social Media Optimization, 
                Application Development, Inventory Software, HRMS, Software Billing, and Programming.
              </p>
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition">
                +91 8285927937
              </button>
            </div>
          </div>
        );
      };

export default ContactSection