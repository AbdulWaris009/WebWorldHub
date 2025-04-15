import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    gsap.to(".loader-image", {
      opacity: 0.2,
      repeat: -1, 
      yoyo: true, 
      duration: 0.8,
    });

   
    gsap.to(".loader-screen", {
      y: "-100%",
      duration: 1.5,
      ease: "power4.inOut",
      delay: 2, 
      onComplete: () => {
        setLoading(false);
        onComplete(); 
      },
    });
  }, [onComplete]);

  if (!loading) return null;  

  return (
    <div className="loader-screen fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[1000]">
      <img
        src="https://webworldhub.in/wp-content/uploads/2023/02/cropped-cropped-WhatsApp_Image_2023-02-01_at_8.05.08_PM-removebg-preview-300x193.png"
        alt="Loading..."
        className="loader-image w-70 md:w-70"
      />
    </div>
  );
};

export default Loader;
