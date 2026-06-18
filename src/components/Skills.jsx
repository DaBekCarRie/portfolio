import React from "react";
import StackIcon from "tech-stack-icons";
import { skills } from "../data/skill";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
  useGSAP(() => {
    gsap.from(".skill-card-container", {
      scrollTrigger: {
        trigger: "#skills-grid",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.04,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      name="skills"
      className="w-full text-gray-300 mb-20"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-6">These are some of my skills</p>
        </div>

        <div id="skills-grid" className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 uppercase">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card-container">
              <div
                className="skill-card shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 flex flex-col justify-between items-center rounded-md transition-all cursor-pointer h-full"
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <StackIcon 
                    name={skill.iconName} 
                    variant={skill.variant || "light"} 
                    className="w-16 h-16" 
                  />
                </div>
                <p className="mt-4 font-semibold tracking-wider text-sm">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
