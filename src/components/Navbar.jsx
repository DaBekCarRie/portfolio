import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes ,FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300'>
    
      {/* menu */}
      <div className='hidden md:flex'>
      <ul className='md:flex'>
        <li>
          <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li>
          <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li>
          <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li>
          <Link  to="work"  smooth={true}  duration={500} >
          Work
        </Link>
        </li>
        <li>
          <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>
      </ul>
      </div>

      {/* hhh */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars className='cursor-pointer'/> : <FaTimes/>}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
          Work
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
        </li>

      </ul>


      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/chaini-mitrsatit-9aa99b254/' target='blank'>LinkedIn <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2e2c2c]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/DaBekCarRie' target='blank'>Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#073554]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='mailto:chaini.mst@gmail.com' target='blank'>Email <HiOutlineMail size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#245a1f] rounded-br-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://resume-e1b93.web.app' target='blank'>Resume <BsFillPersonLinesFill size={30}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar