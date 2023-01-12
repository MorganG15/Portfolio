import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#dde6d5] text-white sm:pt-1/4"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#667b68] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#a3b899]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Morgan Goodfellow, welcome to my portfolio. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                As a UX Designer and software developer, I have a passion for creating user-centered designs and developing efficient and effective solutions. My experience includes creating wireframes and high-fidelity mockups using Figma, as well as hands-on software development experience. I strive to understand user needs and create solutions that improve the overall user experience and performance. I am constantly seeking opportunities to learn and grow in the field of UX design and software development, and I look forward to applying my skills and knowledge to real-world projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;