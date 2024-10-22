import React from 'react';
import { FaFootballBall, FaLaptopCode, FaBrain } from 'react-icons/fa'; 
import { IoMdSchool } from 'react-icons/io'; 

const About = () => {
  return (
    <div className='relative h-full bg-gradient-to-b from-gray-700 to-gray-900 text-gray-100'>
      <div
        className='absolute top-[50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-clip-text 
        text-transparent bg-gradient-to-r from-blue-500 to-grey-500 font-bold rounded-full text-4xl'>
        About Me
      </div>

      <div className='flex justify-center items-center h-full'>
        <div className='w-4/5 max-w-[1200px] p-12 bg-gradient-to-b from-gray-800 to-gray-600 rounded-2xl shadow-2xl'>
          <h2 className='text-3xl font-extrabold mb-6 text-white-400'>My Journey</h2>
          <ul className='list-disc list-inside mb-8'>
            <li className='mb-4'>
              <strong>2020:</strong> Completed School with a score of 96.4%.
            </li>
            <li className='mb-4'>
              <strong>2022:</strong> Completed High School from RFS and scored 78%.
            </li>
            <li className='mb-4'>
              <strong>2022:</strong> Joined VESIT pursuing Information Technology.
            </li>
            <li className='mb-4'>
              <strong>2024:</strong> Building full-stack applications in MERN stack.
            </li>
          </ul>

          <h2 className='text-3xl font-extrabold mb-6 text-white-400'>Achievements</h2>
          <div className='flex items-center gap-6 mb-8'>
            <IoMdSchool className='text-5xl text-green-400' />
            <div>
              <p className='text-lg'>
                Avg pointer up to 4 semesters = 8.89
              </p>
              <p className='text-lg'>
                Debate and poetry champion
              </p>
            </div>
          </div>

          <h2 className='text-3xl font-extrabold mb-6 text-white-400'>Interests</h2>
          <div className='flex gap-10'>
            <div className='text-center'>
              <FaLaptopCode className='text-5xl mb-2 text-blue-400' />
              <p className='text-lg'>Web Development</p>
            </div>
            
            <div className='text-center'>
              <FaBrain className='text-5xl mb-2 text-purple-400' />
              <p className='text-lg'>AI & ML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
