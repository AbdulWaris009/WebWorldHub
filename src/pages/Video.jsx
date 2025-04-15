import React from 'react'
import Subheader from '../components/Subheader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Video = () => {
    const videos = [
        "https://youtu.be/XHOmBV4js_E",
        "https://youtu.be/XHOmBV4js_E",
        "https://youtu.be/XHOmBV4js_E",
        "https://youtu.be/XHOmBV4js_E",
      ];
  return (
   <div>
    <div>
        <Subheader/>
        <Navbar/>
    </div>
    <section className="relative w-full text-center py-20 px-5 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://webworldhub.in/wp-content/uploads/2020/01/about-bg-img.jpg')" }}>
        <h2 className="text-5xl font-bold">Video</h2>
     
        <p className="mt-3 text-sm max-w-2xl mx-auto px-6">
          
                Contact Us
                Web World Hub Feel Free To Call Us Anytime 24/7 (+91) 9971001036
                Great Work Here Web World Hub .Web World Hub Feel Free To Call Us Anytime 24/7 Web Designing We give you the best and unique design and New Technologies Work on many new technologies which help in better performance with good efficiency. Digital marketing Many types of Digital marketing is available to give you the best result
        </p>
      </section>
    <section className="bg-gray-100 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Videos</h2>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6">
        {videos.map((videoId, index) => (
          <div key={index} className="relative w-full">
            <iframe
              className="w-full h-52 sm:h-64 md:h-72 rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Video ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
    <div>

    <Footer/>
    </div>
   </div>
  )
}

export default Video