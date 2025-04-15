import React, { useEffect, useState } from "react";
import Subheader from "../components/Subheader";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Testimonial from "../components/Testimonal";
import Footer from "../components/Footer";

const slides = [
  {
    number: "01",
    title: "Data Center Service",
    description:
      "We provide secure, scalable, and high-performance data center solutions for your business growth.",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "02",
    title: "Web Hosting",
    description:
      "Reliable and fast web hosting services with 99.9% uptime and 24/7 support.",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Custom web development services to create high-quality, responsive websites tailored to your needs.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "04",
    title: "Corporate Hosting",
    description:
      "Enterprise-level hosting solutions designed for high performance and security.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "05",
    title: "Clustered Hosting",
    description:
      "Clustered hosting for seamless scalability and maximum uptime for your applications.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "06",
    title: "Search Engine Optimization",
    description:
      "Improve your online presence with our SEO strategies that drive traffic and boost rankings.",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Servicing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Subheader />
      <Navbar />

      {/* Services Header */}
      <section className="relative w-full text-center py-20 px-5 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://webworldhub.in/wp-content/uploads/2020/01/about-bg-img.jpg')" }}>
        <h2 className="text-5xl font-bold text-black">Services</h2>
        <h3 className="mt-2 text-lg text-black">We provide a wide range of Services</h3>
        <h2 className="text-blue-500 mt-2 text-lg">
          Best Website Company In Delhi, India, Uttar Pradesh, West Bengal
        </h2>
        <p className="mt-3 text-sm max-w-2xl mx-auto text-black">
          Dynamic Website Customize Website, software, applications, branding, SEO, Web World Hub provides services including website design, development, marketing, and branding.
        </p>
      </section>

      {/* Slider Section */}
      <div className="relative py-16">
        <h2 className="text-center text-4xl font-bold">How Can We Help You?</h2>

        {/* Slider Container */}
        <div className="overflow-hidden w-full max-w-3xl mx-auto mt-6 relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center text-center rounded-lg shadow-lg overflow-hidden relative"
              >
                {/* Slide Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                <div className="relative p-10">
                  <h4 className="text-2xl font-semibold mt-2">{slide.title}</h4>
                  <p className="text-gray-200 mt-3 px-10">{slide.description}</p>
                  <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-600"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            )
          }
        >
          ◀
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-600"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
        >
          ▶
        </button>
      </div>

      <section className="relative bg-gray-900 py-16">
  {/* Dark Overlay for Better Text Visibility */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative max-w-4xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold text-white mb-4">Our Customers</h2>
    <p className="text-lg text-gray-300 leading-relaxed">
      Web World Hub Company has a great team for creative design and makes projects perfect
      for clients. We specialize in 
      <span className="text-yellow-400 font-semibold"> Website Designing</span>, 
      <span className="text-yellow-400 font-semibold"> Development</span>, 
      <span className="text-yellow-400 font-semibold"> SEO</span>, 
      <span className="text-yellow-400 font-semibold"> Social Media Optimization</span>, 
      <span className="text-yellow-400 font-semibold"> Application Development</span>, 
      and more.
    </p>
  </div>
</section>
<div>
<ContactSection/>
</div>
<div>
<Testimonial/>
</div>
<div>
    <Footer/>
</div>

    </div>
  );
};

export default Servicing;
