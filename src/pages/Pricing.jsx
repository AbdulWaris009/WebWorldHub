import React from 'react'
import Subheader from '../components/Subheader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';



const plans = [
    {
      title: "Standard Plan",
      price: "INR 8,999",
      duration: "1 Year",
      features: [
        "1 Theme Based UI Design",
        "Product Upload & Display",
        "Basic Page for Product Listing",
        "Admin Panel for Inventory",
        "Basic Enquiry Form",
        "Visitor Counter Activity",
        "Social Media Links",
      ],
    },
    {
      title: "Dynamic Plan",
      price: "INR 18,999",
      duration: "1 Year",
      features: [
        "1 Theme Based UI Design",
        "Unlimited Pages with Features",
        "Unlimited Category Pages",
        "Product Upload & Display",
        "Admin Panel with Inventory",
        "Custom Product Page Design",
        "Visitor Counter Activity",
        "Social Media Links",
      ],
    },
    {
      title: "Customize Plan",
      price: "INR 30,999",
      duration: "1 Year",
      features: [
        "Custom UI Design",
        "Unlimited Pages & Features",
        "Advanced Admin Panel",
        "Unlimited Category Pages",
        "Product Upload & Display",
        "Custom Product Page Design",
        "Social Media Links",
        "Visitor Counter Activity",
        "SEO Audit Login With Website",
      ],
    },
  ];

const Pricing = () => {
  return (
    <div>
       
        <div className="bg-gradient-to-b from-[#0a0c29] to-[#030617] min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white text-center p-6 rounded-2xl shadow-lg w-full max-w-xs ${
              index === 1 ? "scale-110" : "scale-100"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800">{plan.title}</h3>
            <p className="text-2xl font-semibold text-blue-600">{plan.price}</p>
            <p className="text-sm text-gray-500">{plan.duration}</p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Pricing