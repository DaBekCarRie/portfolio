import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f]/70 backdrop-blur-sm text-gray-300 z-50">
        {/* Logo */}
        <div>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:brightness-110 duration-300">
              JOE
            </span>
          </Link>
        </div>

        {/* menu จอปกติ */}
        <div className="hidden md:flex ">
          <ul className="md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} >
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-80}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="work" smooth={true} duration={500} offset={-80}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="activity" smooth={true} duration={500} offset={-80}>
                Activity
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile menu จอกลางขึ้นไป จะไม่ขึ้น */}
        <button onClick={handleClick} className="md:hidden z-10" aria-label="Toggle menu">
          {!nav ? <FaBars className="cursor-pointer" /> : <FaTimes />}
        </button>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f]/95 backdrop-blur-sm flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500} 
              offset={-80}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="work"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Experience
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="activity"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Activity
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* social icons */}
      <div 
        className="hidden lg:flex fixed flex-col left-0 z-50"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/chaini-mitrsatit-9aa99b254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2e2c2c]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/DaBekCarRie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#073554]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:chaini.mst@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#245a1f] rounded-br-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/Chaini_resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
