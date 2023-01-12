import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me2.jpeg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#dde6d5]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl sm:text-7xl font-bold text-[#667b68]">
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
            className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-[#a3b899] to-[#667b68] cursor-pointer"
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
          className="rounded-2xl mx-auto w-2/3 md:w-3/4"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;