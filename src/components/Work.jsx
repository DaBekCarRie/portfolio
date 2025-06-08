import React from "react";
import { works } from "../data/works";
import kbtg from "../assets/workpic/kbtg.JPG";
const Work = () => {
  const worksList = works;
  return (
    <div
      name="work"
      className="w-full md:min-h-screen text-gray-300 bg-[#0a192f] mb-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-6">
            check out my term project and best practice projects
          </p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* md:grid-cols-3  */}
          {/* grid item */}
          {/* 1 */}
          {worksList.map((work, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${work.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover */}
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  {work.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={work.demo} target="blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={work.github} target="blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{ backgroundImage: `url(${kbtg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
