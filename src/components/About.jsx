import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(()=>{
   gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    })
    .fromTo("#right-about", {x:200, opacity:0 },{
      x:0,
      opacity:1,
      duration:1.5,
      ease:'power1.inOut'
    },0)
    .fromTo("#left-about", {x:-200, opacity:0 },{
      x:0,
      opacity:1,
      duration:1.5,
      ease:'power1.inOut'
    },0)

  },[])
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div id="about" className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div id="left-about" className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Joe, nice to meet you. Please take a look around.</p>
          </div>
          <div id='right-about'>
            <p className="pt-1">
             My name is Chaini Mitrsatit, a Computer Engineering graduate from Kasetsart University. I am currently working as a software developer, passionate about building high-quality digital solutions and continuously expanding my skills in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
