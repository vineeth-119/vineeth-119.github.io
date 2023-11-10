import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
class Home extends Component {
  render() {
    return (
      <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/portfolio/" className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/portfolio/#about" className="ml-3 text-xl">
            Vineeth Buddarapu
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      
          <a href="/portfolio/#education" className="mr-5 hover:text-white">
            Education
          </a>  
           <a href="/portfolio/#experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="/portfolio/#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="/portfolio/#skills" className="mr-5 hover:text-white">
            Skills
          </a>
         
        </nav>
        <a
          href="/portfolio/#contact"
          className="inline-flex items-center text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
          Hire Me
          <FaArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
    );
  }
}
 
export default Home;