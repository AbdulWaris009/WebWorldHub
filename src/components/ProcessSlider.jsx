import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProcessSlider = () => {
  const steps = [
    { number: "01.", title: "Discover", description: "We analyze your needs." },
    { number: "02.", title: "Define", description: "We plan the project." },
    { number: "03.", title: "Design", description: "We create the UI/UX." },
    { number: "04.", title: "Develop", description: "We build the solution." },
    { number: "05.", title: "Deploy", description: "We launch the project." },
    { number: "06.", title: "Deliver", description: "We provide support." }
  ];

  return (
    <div className="bg-[#0a0f2c] text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Our 6-D Process</h2>
      <div className="max-w-6xl mx-auto px-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Desktops
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto slide every 1 sec
          speed={800}
          navigation
          loop={true}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#0a0f2c] p-6 rounded-md text-center shadow-lg">
                <h3 className="text-5xl font-bold text-gray-300">{step.number}</h3>
                <h4 className="text-xl font-semibold mt-3">{step.title}</h4>
                <p className="text-gray-400 mt-2">{step.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProcessSlider;
