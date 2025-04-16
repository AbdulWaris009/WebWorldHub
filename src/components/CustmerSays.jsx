import React from 'react'

const testimonials = [
    {
      name: "Dhiaan Khan",
      role: "Owner, Fashion View",
      quote:
        "These guys are super professional and creative. They helped me build a fantastic site with great aesthetics and high functionality.",
      image: "https://webworldhub.in/wp-content/uploads/2023/04/pexels-photo-1438276.jpeg",
    },
    {
      name: "Aron Segen",
      role: "Owner, Golden Shop",
      quote:
        "Team Web World Hub is amazing. Very much alive, friendly, and they exceeded my expectations!",
      image: "https://img.freepik.com/free-photo/portrait-handsome-bearded-man-with-glasses-posing-white-wall_114579-47365.jpg?t=st=1744815302~exp=1744818902~hmac=7201512fcd28be8c0ad7ef219e7789d70b73ab498bd4b88158dc29d2cef40304&w=996",
    },
    {
      name: "Usmad Chaudhry",
      role: "Owner, Get Logistic Solutions",
      quote:
        "They are super talented in web development. My website now looks stunning and works perfectly.",
      image: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1744815368~exp=1744818968~hmac=a8c314c06ed270c4dd0907cf36476bab2853a8700e68d6231c47be47f8482a5a&w=996",
    },
    {
      name: "Rachel Harper",
      role: "Owner, Beauty Hub",
      quote:
        "Web World Hub has been a game changer for my business. The attention to detail and dedication is impressive.",
      image: "https://img.freepik.com/premium-photo/face-young-handsome-bearded-man_251136-35800.jpg?w=740",
    },
  ];

const CustmerSays = () => {
        return (
          <div
            className="bg-cover bg-center py-20 px-5 text-white text-center "
            style={{ backgroundImage: "url('https://webworldhub.in/wp-content/uploads/2023/02/pexels-fauxels-3183150-scaled.jpg')", opacity:"1" }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[blue] ">Customer Says</h2>
            <p className="max-w-2xl mx-auto text-white mb-8">
              Here are some client reviews who have shared their good words for our company.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border border-solid bg-opacity-10 px-6 py-15 rounded-lg shadow-lg">
                  <p className="text-white italic px-5">"{testimonial.quote}"</p>
                  <div className="flex  justify-center items-center mt-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-15 h-15 rounded-full mr-3" />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              VIEW MORE
            </button>
          </div>
        );
      };
export default CustmerSays