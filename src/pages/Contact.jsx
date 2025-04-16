import React from 'react'
import Subheader from '../components/Subheader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
       
        <section className="relative w-full text-center py-20 px-5 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://webworldhub.in/wp-content/uploads/2020/01/about-bg-img.jpg')" }}>
        <h2 className="text-5xl font-bold">Contact Us</h2>
        <h3 className="mt-2 text-lg">Web World Hub Feel Free To Call Us Anytime 24/7 (+91) 9971001036</h3>
        <h2 className="text-blue-500 mt-2 text-lg">
          Best Website Company In Delhi, India, Uttar Pradesh, West Bengal
        </h2>
        <p className="mt-3 text-sm max-w-2xl mx-auto px-6">
          
                Contact Us
                Web World Hub Feel Free To Call Us Anytime 24/7 (+91) 9971001036
                Great Work Here Web World Hub .Web World Hub Feel Free To Call Us Anytime 24/7 Web Designing We give you the best and unique design and New Technologies Work on many new technologies which help in better performance with good efficiency. Digital marketing Many types of Digital marketing is available to give you the best result
        </p>
      </section>
      <div className="bg-gradient-to-b from-white to-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Section - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Request Free Consultation
          </h2>
          <form>
            <input
              type="text"
              placeholder="Your name*"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your email*"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your message*"
              rows="4"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Reach Us</strong><br />
              A-1 3rd Floor Gurudwara Rd, Mohan Garden, Block F, Zaildar Enclave, 
              Uttam Nagar, Delhi, 110066
            </p>

            <p className="flex items-center space-x-2 text-gray-600">
              📧 <span>Webworldhub@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-600">
              📧 <span>info@webworldhub.in</span>
            </p>

            <p className="flex items-center space-x-2 text-gray-600">
              📞 <span>+91 9971001036</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-600">
              📞 <span>+91 8448623836</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-600">
              📞 <span>+91 8285927937</span>
            </p>

            <p className="text-blue-700 font-bold text-lg">
              Call us Toll Free <br />
              <span className="text-2xl text-blue-800">+91 8285927937</span>
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="bg-white py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900">
          Create success campaign with <span className="text-blue-600">Web World Hub</span>
        </h2>
        <p className="text-lg font-bold text-gray-800 mt-2">
          Web World Hub Feel Free To Call Us Anytime 24/7 (+91) 8448623836
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Web Designing We give you the best and unique design and new technologies. 
          Work on many new technologies which help in better performance with good efficiency. 
          Digital marketing offers many types of strategies to give you the best results.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mt-12">
          {/* Media Contact */}
        {/* Media Contact */}
<div>
 
  <p className="text-gray-700 mt-1">Mr. Shan Malik</p>
  <p className="text-blue-600 font-bold">+91-9971001036</p>
  <p className="text-gray-600 mt-2 text-sm">
    Plot No. A-1, 3rd Floor, Gurudwara Road, Mohan Garden, Block F, Zaildar Enclave, Uttam Nagar, Delhi, 110066
  </p>
  <iframe 
    className="w-full h-64 mt-4 rounded-lg shadow-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.7313863008438!2d77.06189795635282!3d28.618271845505073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0513d1d2b45d%3A0xa4a3e5a88a0a96f4!2sWeb%20World%20Hub!5e0!3m2!1sen!2sin!4v1713262151693!5m2!1sen!2sin"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

{/* Technical Contact */}
<div>
  
  <p className="text-gray-700 mt-1">Ms. Shan Malik</p>
  <p className="text-blue-600 font-bold">+91-8285927937</p>
  <p className="text-gray-600 mt-2 text-sm">
    Shop No. 4, Ground Floor, Aicher Market, Ram Lila Ground, Ch Raghuveer Singh Bhati Rd, Accher, Pi I & II, Greater Noida, Uttar Pradesh 201310
  </p>
  <iframe 
    className="w-full h-64 mt-4 rounded-lg shadow-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14125.457582706424!2d77.4316795871582!3d28.549138600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe3ed2a0d6d%3A0x23431d07cb04586f!2sWeb%20World%20Hub%20Noida!5e0!3m2!1sen!2sin!4v1713262309615!5m2!1sen!2sin"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

{/* Billing Contact */}
<div>
  
  <p className="text-gray-700 mt-1">Mr. Shan Malik </p>
  <p className="text-blue-600 font-bold">+91-8448623836</p>
  <p className="text-gray-600 mt-2 text-sm">
    House No. 4/1088, Ground Floor, Hamdard Nagar (B), Nearby Chand Masjid, Jamalpur, Aligarh, Uttar Pradesh, 202002
  </p>
  <iframe 
    className="w-full h-64 mt-4 rounded-lg shadow-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7070.147021469349!2d78.07659135867522!3d27.923961760737295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a58167364417%3A0x78d52d481b951485!2sWeb%20World%20Hub%20Jamalpur!5e0!3m2!1sen!2sin!4v1713262493096!5m2!1sen!2sin"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

        </div>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-indigo-700 text-center">
        Would you like to start a project with us?
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Web World Hub Feel Free To Call Us Anytime 24/7 (+91) 8448623836
      </p>
      <div className="flex justify-center mt-4">
        <a
          href="tel:+918285927937"
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
        >
          +91 8285927937
        </a>
      </div>
    </div>

    <Footer/>

    </div>
  )
}

export default Contact