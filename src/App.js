import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from "react-icons/si";

function App() { 
  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Skills />
      {/*<Contact />*/}
      <footer>
        <div className='w-full h-[80px] flex justify-between items-center px-80 bg-black text-white'>
        <a href="mailto:m3goodfe@uwaterloo.ca">
          <MdEmail size={34} />
        </a>
        <a href="https://www.linkedin.com/in/morgan-goodfellow-89635922b/">
          <SiLinkedin size={28}/>
        </a>
        <a href="https://github.com/MorganG15">
          <SiGithub size={28}/>
        </a>
        </div>
      </footer>
    </div>
    
    </>
  );
}

export default App;
