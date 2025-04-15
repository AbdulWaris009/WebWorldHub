import React from 'react'
import Subheader from '../components/Subheader'
import Navbar from '../components/Navbar'
import ProcessSlider from '../components/ProcessSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
        <Subheader/>
        <Navbar/>
        <div>

    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('https://webworldhub.in/wp-content/uploads/2020/01/about-bg-img.jpg')" }}
      >
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center py-20 px-5">
        <h2 className="text-5xl font-bold">About Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Welcome to The Web World Hub. We know that simplicity speaks more than anything, 
          and we keep this idea as our soul aim. We are committed to structuring designs that
          are easy to grab by the people when they visit our website.
        </p>
      </div>

      {/* Mission, Vision, Goal Section */}
      <div className="relative z-10 bg-gray-100  px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-[#0a0f2c] px-8 py-15 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300">
              We believe in delivering high-quality services that empower businesses and individuals to succeed
              in the digital landscape. Our mission is to provide value-driven solutions that create lasting impact.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
              Read More
            </button>
          </div>

          {/* Vision */}
          <div className="bg-[#0a0f2c] px-8 py-15  shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-300">
              Our vision is to be a leading web solutions provider, delivering innovative and impactful services 
              that help our clients grow and succeed in a competitive digital world.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
              Read More
            </button>
          </div>

          {/* Goal */}
          <div className="bg-[#0a0f2c] px-8 py-15  shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Goal</h3>
            <p className="text-gray-300">
              Our goal is to ensure that every business has access to high-quality digital solutions that enhance
              their online presence and operational efficiency.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
             </section>
       </div>
    <div className='mt-2'>
        <ProcessSlider/>
    </div>
    <div className='mb-0'>
        <WhyChooseUs/>
    </div>
    <div className='mt-0'>
        <ContactSection/>
        <Footer/>
    </div>
    
</div>
  );
};

export default About