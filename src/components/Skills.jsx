import html from "../assets/skillpic/html.png";
import react from "../assets/skillpic/react.png";
import tailwind from "../assets/skillpic/tailwind.png";
import python from "../assets/skillpic/python.png";
import c from "../assets/skillpic/c.png";
import javascript from "../assets/skillpic/javascript.png";
import firebase from "../assets/skillpic/firebase.png";
import github from "../assets/skillpic/github.webp";
import nextjs from "../assets/skillpic/nextjs.png";
import typescript from "../assets/skillpic/typescript.png";
import css from "../assets/skillpic/css.png";
import bootstrap from "../assets/skillpic/bootstrap.png";
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
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={html}
              alt="html icon"
            />
            <p className="my-4">html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img className="w-20 mx-auto pt-[20px]" src={css} alt="css icon" />
            <p className="my-4">css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={react}
              alt="react icon"
            />
            <p className="my-4">reactjs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={nextjs}
              alt="nextjs icon"
            />
            <p className="my-4">nextjs</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={javascript}
              alt="javascript icon"
            />
            <p className="my-4">javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={typescript}
              alt="typescript icon"
            />
            <p className="my-4">typescript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[40px]"
              src={tailwind}
              alt="tailwind icon"
            />
            <p className="my-6">tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={bootstrap}
              alt="bootstrap icon"
            />
            <p className="my-4">bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={python}
              alt="python icon"
            />
            <p className="my-4">python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img className="w-20 mx-auto pt-[20px]" src={c} alt="c icon" />
            <p className="my-4">c</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={github}
              alt="github icon"
            />
            <p className="my-4">github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-400">
            <img
              className="w-20 mx-auto pt-[20px]"
              src={firebase}
              alt="firebase icon"
            />
            <p className="my-4">firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
