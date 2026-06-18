import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const GooeyHome = () => {
  useGSAP(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const homeSplit = new SplitText("#home-text", { type: "lines" })
    gsap.from(homeSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.5,
    })
  }, [])

  return (
    <div name="home" className="relative w-full h-screen">
      {/* Content (background is the shared GlobalBackground) */}
      <div
        id="home-text"
        className="relative z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className="text-pink-400 text-lg mb-2">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Chaini Mitrsatit
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer.
        </h2>
        <div className="mt-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-colors duration-200 cursor-pointer">
              view experience
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" aria-hidden="true" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GooeyHome
