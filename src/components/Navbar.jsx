import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-gray-800 shadow-lg z-50'>
      <div className='container mx-auto'>
        <div className='flex justify-around items-center h-16'>
          <ScrollLink 
            to="home" 
            activeClass='active'
            spy={true} 
            smooth={true} 
            duration={500}
            className='flex flex-col items-center text-white transition duration-300 hover:bg-gray-700 rounded-lg p-2 focus:outline-none'>
            <BiHomeAlt className='text-2xl' />
            <span className='text-sm'>Home</span>
          </ScrollLink>

          <ScrollLink 
            to="about" 
            activeClass='active'
            spy={true} 
            smooth={true} 
            duration={500}
            className='flex flex-col items-center text-white transition duration-300 hover:bg-gray-700 rounded-lg p-2 focus:outline-none'>
            <BiUser className='text-2xl' />
            <span className='text-sm'>About</span>
          </ScrollLink>

          <ScrollLink 
            to="skills" 
            activeClass='active'
            spy={true} 
            smooth={true} 
            duration={500}
            className='flex flex-col items-center text-white transition duration-300 hover:bg-gray-700 rounded-lg p-2 focus:outline-none'>
            <BsClipboardData className='text-2xl' />
            <span className='text-sm'>Skills</span>
          </ScrollLink>

          <ScrollLink 
            to="projects" 
            activeClass='active'
            spy={true} 
            smooth={true} 
            duration={500}
            className='flex flex-col items-center text-white transition duration-300 hover:bg-gray-700 rounded-lg p-2 focus:outline-none'>
            <BsBriefcase className='text-2xl' />
            <span className='text-sm'>Projects</span>
          </ScrollLink>

          <ScrollLink 
            to="contact" 
            activeClass='active'
            spy={true} 
            smooth={true} 
            duration={500}
            className='flex flex-col items-center text-white transition duration-300 hover:bg-gray-700 rounded-lg p-2 focus:outline-none'>
            <BsChatSquare className='text-2xl' />
            <span className='text-sm'>Contact</span>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
