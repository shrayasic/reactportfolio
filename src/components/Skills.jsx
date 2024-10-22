import React from 'react';

const Skills = () => {
  
  const skills = [
    { name: 'HTML', level: 1 },
    { name: 'CSS', level: 0.75 },
    { name: 'JavaScript', level: 0.8 },
    { name: 'React', level: 0.9 },
    { name: 'Node.js', level: 0.7 },
    { name: 'MongoDB', level: 0.6 },
    { name: 'Redux', level: 0.6 },
    { name: 'Git', level: 0.7 },
    { name: 'Tailwind CSS', level: 0.8 }
  ];

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white'>
      <h1 className='text-4xl mb-6 font-extrabold text-white-300'>
        Skills
      </h1>

      <div className='w-4/5 max-w-[800px] p-4 bg-gradient-to-b from-gray-800 to-gray-600 rounded-2xl shadow-2xl'>
        <div className='flex flex-col gap-4'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col'>
              <div className='flex justify-between mb-1'>
                <span className='text-lg font-bold text-white-300'>{skill.name}</span>
                <span className='text-lg font-bold text-blue-300'>{`${Math.round(skill.level * 100)}%`}</span>
              </div>
              <div className='w-full bg-gray-300 rounded-full h-3'>
                <div
                  className='bg-blue-500 rounded-full h-full'
                  style={{ width: `${skill.level * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
