import React from 'react';
import { Link } from 'react-router-dom'; 
import Shraeyaa from '../assets/shraeyaa.jpeg';
import Contact from '../components/Contact';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div>
      <div id='home' className='relative h-screen bg-black'>
        <div
          className='absolute flex justify-center items-center top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 bg-gray-800 w-3/4 
            max-w-[900px] h-[480px] py-7 px-3 rounded-lg shadow-lg'>
          <div
            className='relative flex justify-between items-center w-full p-10 h-[450px] 
              bg-black text-white text-xl rounded-lg'> 

            <div className='flex flex-col justify-center items-start gap-4'>
              <h1 className='text-5xl'>Shraeyaa Dhaigude</h1>
              <h1 className='text-4xl'>A curious developer and creative designer</h1>

              <div className='mt-6 flex gap-4'>
                <a href='#contact'>
                  <div
                    className='px-5 py-3 rounded-full w-40 text-lg text-white text-center font-semibold 
                      bg-gray-600 hover:bg-gray-500'>
                    Contact Me
                  </div>
                </a>

                
              </div>
            </div>

            <img
              src={Shraeyaa}
              alt='Ansh Sarfare'
              className='sm:hidden md:block md:rounded-lg w-[350px] h-[350px]'
            />
          </div>
        </div>
      </div>

      <div id='about' className='h-screen bg-lime-100'>
        <About />
      </div>

      <div id='skills' className='h-screen bg-white-400'>
        <Skills />
      </div>

      <div id='projects' className='h-screen bg-sky-500'>
        <Projects />
      </div>

      <div id='contact' className='h-screen bg-emerald-500'>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
