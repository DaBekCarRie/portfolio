import { cn } from "../lib/util";
import { skills } from "../data/skill";
const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:min-h-screen bg-[#0a192f] text-gray-300 mb-20"
    >
      {/* containner */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are some of my skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 uppercase ">
          {skills.map((skill) => (
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
              <img
                className={cn(
                  "w-20 mx-auto ",
                  skill.css ? skill.css : "pt-[20px]"
                )}
                src={skill.img}
                alt={`${skill.name} icon`}
              />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
