import React from 'react';
import code from '../assets/code2.png';
import portfolio from '../assets/webPortfolio.png';
import weNote from '../assets/weNote.png'

const Works = () => {
  return (
    <section name='projects' className='w-full py-10 bg-white'>
      <div className='max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 flex flex-col justify-center items-center'>
          <h3 className=' text-4xl text-black font-bold inline border-b-4 border-blue-500'>
            Projects
          </h3>
          <p className='py-6 text-2xl text-black'>
            Check out some of my most recent projects
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap mx-auto px-4 max-w-xl lg:max-w-screen-lg">
          <div className="basis-1/3 flex-1 hover:scale-105 duration-500">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img 
              className="rounded-lg object-cover shadow-lg shadow-gray-400 cursor-pointer"
              width={"100%"} 
              height={"100%"}
              layout="responsive"
              src={portfolio}
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1 hover:scale-105 duration-500">
            <a href="https://www.figma.com/file/FlBndRR8MqPXLmSHfTruqr/Technova?node-id=0%3A1&t=UT7OsXR4pKSXZgRA-1" target="_blank" rel="noopener noreferrer">
              <img 
              className="rounded-lg object-cover shadow-lg shadow-gray-400 cursor-pointer"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={weNote}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Works;