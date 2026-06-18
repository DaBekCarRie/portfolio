import React from "react";
import { activities } from "../data/activities";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Activities = () => {
  const activitiesList = activities;

  useGSAP(() => {
    gsap.from(".activity-card", {
      scrollTrigger: {
        trigger: "#activities-grid",
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
      name="activity"
      className="w-full md:min-h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Activity
          </p>
          <p className="py-6">these are some of my activities</p>
        </div>

        {/* container */}
        <div id="activities-grid" className="grid sm:grid-cols-2 gap-4">
          {activitiesList.map((activity, index) => (
            <div
              key={index}
              className="activity-card relative group overflow-hidden rounded-md h-[250px] flex justify-center items-center mx-auto w-full shadow-lg shadow-[#040c16] cursor-pointer"
            >
              {/* Card Background Image */}
              <div
                style={{ backgroundImage: `url(${activity.image})` }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
              />

              {/* Gradient Overlay matching the original theme but transitioning smoothly */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#709dff]/90 to-[#5d56db]/90"
              />

              {/* Hover Content */}
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center px-6 w-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white tracking-wider block">
                  {activity.name}
                </span>

                {/* Short Detail */}
                <p className="text-sm text-gray-200 mt-2 leading-relaxed max-w-[320px]">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
