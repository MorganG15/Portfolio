import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-white text-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-4'>
              <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-center '>Skills</p>
              <p className='py-6 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text'>
              <div className='rounded-md shadow-md '>
                  <p className='my-4'>Figma</p>
              </div>
              <div className='rounded-md shadow-md'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-md shadow-md'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-md shadow-md'>
                  <p className='my-4'>JavaScipt</p>
              </div>
              <div className='rounded-md shadow-md'>
                  <p className='my-4'>React</p>
              </div>
              <div className='rounded-md shadow-md'>
                  <p className='my-4'>Python</p>
              </div>
              <div className='rounded-md shadow-md'>
                  <p className='my-4'>C</p>
              </div>
              <div className='rounded-md shadow-md'>
                  <p className='my-4'>Java</p>
              </div>
              {/*<div className='rounded-md shadow-md shadow-[#3a423b] hover:scale-110 duration-500 bg-[#a3b899]'>
                  <p className='my-4'></p>
              </div>
              <div className='rounded-md shadow-md shadow-[#3a423b] hover:scale-110 duration-500 bg-[#a3b899]'>
                  <p className='my-4'></p>
              </div>
              <div className='rounded-md shadow-md shadow-[#3a423b] hover:scale-110 duration-500 bg-[#a3b899]'>
                  <p className='my-4'></p>
              </div>
              <div className='rounded-md shadow-md shadow-[#3a423b] hover:scale-110 duration-500 bg-[#a3b899]'>
                  <p className='my-4'></p>
              </div>
              */}
          </div>
      </div>
    </div>
  );
};
export default Skills;