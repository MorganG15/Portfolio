import React from 'react';
import {SiAdobephotoshop, SiAnsible, SiC, SiCplusplus, SiFigma, SiGit, SiHtml5, SiJavascript, SiJenkins, SiLinux, SiPython, SiR, SiReact, SiTailwindcss, SiTerraform, SiTypescript} from 'react-icons/si';

const Skills = () => {
  return (
    <div name='skills' className='w-full py-40  bg-white text-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-4'>
              <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-center '>Skills</p>
              <p className='py-6 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text'>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiCplusplus size={48}/>
                  <p className='my-4'>C++</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiC size={48}/>
                  <p className='my-4'>C</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiPython size={48}/>
                  <p className='my-4'>Python</p>
              </div>
              
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiFigma size={48}/>
                  <p className='my-4'>Figma</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiJavascript size={48}/>
                  <p className='my-4'>JavaScipt</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiTypescript size={48}/>
                  <p className='my-4'>TypeScript</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiReact size={48}/>
                  <p className='my-4'>React</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiGit size={48}/>
                  <p className='my-4'>Git</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiHtml5 size={48}/>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiTailwindcss size={48}/>
                  <p className='my-4'>TailwindCSS</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiTerraform size={48}/>
                  <p className='my-4'>Terraform</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiAnsible size={48}/>
                  <p className='my-4'>Ansible</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiJenkins size={48}/>
                  <p className='my-4'>Jenkins</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiR size={48}/>
                  <p className='my-4'>R</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiLinux size={48}/>
                  <p className='my-4'>Linux</p>
              </div>
              <div className='rounded-md shadow-md flex flex-col items-center'>
                  <SiAdobephotoshop size={48}/>
                  <p className='my-4'>Adobe Photoshop</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;