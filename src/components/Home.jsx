import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me2.jpeg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-white"
    >
    <div className="max-w-screen-lg mx-auto my-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center my-10">
        <h2 className="text-4xl md:text-7xl font-bold text-black">
          Morgan Goodfellow
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
            I am a coop student at the University of Waterloo, studying Computational Mathematics and Computer Science. I am interested in UX design and software development.    
        </p>
        <a href="/Morgan Goodfellow Resume Jan 2023.pdf" download className='text-blue-500 underline'>
          Resume
        </a>
        <div className="flex flex-row items-center gap-4">
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-blue-500 bg-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
          <a href="/Morgan Goodfellow Resume Jan 2023.pdf" download className='text-gray-500 border-2 border-blue-500 group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer'>
          Resume
          </a>
        </div>
        
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-full mx-auto w-2/3 md:w-full  max-w-sm md:max-w-md"
        />
      </div>
  </div>
  </div>
  );
};
export default Home;