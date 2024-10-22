import React from 'react';
import tribe from '../assets/tribevibepg.png';
import stockhub from '../assets/stockhub.png';
import unifind from '../assets/unifind.png';

const projects = [
  {
    name: 'Tribe Vibe',
    image: tribe,
    description:
      'A community-focused platform that connects people by allowing them to join or create communities.',
    githubLink: 'https://github.com/yourusername/tribe-vibe',
  },
  {
    name: 'Unifind',
    image: unifind,
    description:
      'A college finder java webapp tht sorts and filters out college for you in few clicks according to your requirement.',
    githubLink: 'https://github.com/yourusername/food-haven',
  },
  {
    name: 'Stockhub',
    image: stockhub,
    description:
      'A Python-based webaapp designed to help users analyse stockers, learn stock market and invest with fun features.',
    githubLink: 'https://github.com/yourusername/medisync',
  },

];

const Projects = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white'>
      <div className='text-center pt-12'>
        <h2 className='px-8 py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 font-extrabold text-4xl'>
          Projects
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 px-4'>
        {projects.map((project, index) => (
          <div key={index} className='p-4 transition-transform duration-300 transform hover:scale-105 rounded-lg bg-gray-800 shadow-lg'>
            <img src={project.image} alt={project.name} className='w-full h-32 object-cover rounded-lg' />
            <h3 className='mt-2 text-lg font-semibold text-blue-300'>{project.name}</h3>
            <p className='mt-1 text-sm'>{project.description}</p>
            <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
              <button className='mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'>
                View on GitHub
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
