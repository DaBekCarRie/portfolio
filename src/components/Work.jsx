import React from "react";
import { works } from "../data/works";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Work = () => {
  const worksList = works;

  useGSAP(() => {
    gsap.from(".work-card", {
      scrollTrigger: {
        trigger: "#works-grid",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      name="work"
      className="w-full md:min-h-screen text-gray-300 mb-20 flex items-center"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-6">check out my term project and best practice projects</p>
        </div>

        {/* container */}
        <div id="works-grid" className="grid sm:grid-cols-2 gap-4">
          {worksList.map((work) => (
            <div
              key={work.id}
              className="work-card relative group overflow-hidden rounded-md h-[250px] flex justify-center items-center mx-auto w-full shadow-lg shadow-[#040c16] cursor-pointer"
            >
              {/* Card Background Image */}
              <div
                style={{ backgroundImage: `url(${work.image})` }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
              />

              {/* Gradient Overlay matching the original theme but transitioning smoothly */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#709dff]/90 to-[#5d56db]/90"
              />

              {/* Hover Content */}
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center px-6 w-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white tracking-wider block">
                  {work.name}
                </span>
                
                {/* Short Detail */}
                <p className="text-sm text-gray-200 mt-2 mb-4 leading-relaxed max-w-[320px]">
                  {work.description}
                </p>

                <div className="text-center">
                  {work.demo && (
                    <a href={work.demo} target="blank">
                      <button className="text-center rounded-lg px-4 py-2.5 m-1.5 bg-white text-gray-700 font-bold text-base hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer">
                        {work.type === "experience" ? "Website" : "Demo"}
                      </button>
                    </a>
                  )}
                  {work.github && (
                    <a href={work.github} target="blank">
                      <button className="text-center rounded-lg px-4 py-2.5 m-1.5 bg-white text-gray-700 font-bold text-base hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer">
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
