import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      <div className="w-3/4 max-w-[600px] p-8 bg-gradient-to-b from-gray-800 to-gray-600 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold mb-6 text-white-400 text-center">Contact Me</h2>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-5xl text-blue-500" />
            <a href="https://www.linkedin.com/in/shraeyaa-dhaigude" className="text-xl text-blue-400 hover:underline" target='_blank' rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-5xl text-gray-400" />
            <a href="https://github.com/shraeyaa" className="text-xl text-gray-300 hover:underline" target='_blank' rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaCode className="text-5xl text-orange-400" />
            <a href="https://leetcode.com/shraeyaa" className="text-xl text-orange-300 hover:underline" target='_blank' rel="noreferrer">
              LeetCode
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-5xl text-red-500" />
            <a href="mailto:shraeyaa.d2004@gmail.com" className="text-xl text-red-400 hover:underline">
              shraeyaa.d2004@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
