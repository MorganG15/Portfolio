import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me2.jpeg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    id="home"
    className="h-screen w-full bg-white"
    >
    <div className="max-w-screen-lg mx-auto flex gap-4 flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-bold text-black">
          Morgan Goodfellow
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
            I am a coop student at the University of Waterloo, studying Computational Mathematics and Computer Science. I am interested in UX design and software development.    
        </p>
        <div className="pb-4">
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-full mx-auto w-2/3 md:w-3/4 max-md"
        />
      </div>
  </div>
  </div>
  );
};
export default Home;