import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Data = () => {
  const stats = [
    { value: "550",  label: "Satisfied Clients" },
    { value: "600", label: "Projects Completed" },
    { value: "66000", label: "Accolades Earned" },
    { value: "65478", label: "Lines of Code" },
  ];

  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { innerHTML: 0 },
        {
          innerHTML: stats[index].value,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 }, // Ensures whole numbers
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Start animation when 80% of element is in view
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#0a0f2c] text-white py-20 text-center px-5 flex flex-wrap justify-center gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-56 p-6 bg-opacity-20 rounded-lg shadow-lg"
        >
          <h3
            ref={(el) => (statRefs.current[index] = el)}
            className="text-3xl font-bold"
          >
            0
          </h3>
          <p className="text-gray-300 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
