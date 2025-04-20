import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello Visitors !! 
            <br className="hidden lg:inline-block" /> I'm Vineeth, I love developing applications, teaching and participate in coding competitions
          </h1>
          <p className="mb-8 leading-relaxed">
           I have started my career as Software Developer in July 2021 and will continue to be an Engineer and involve in developing applications. Also, I was a mentor for around 300 students and professionals in Advanced DSA. <br />
           <b><a href="https://topmate.io/vineeth_buddarapu"><i>Click Here</i></a> to book 1:1 call for Interview tips and Resume corrections.</b>
          </p>
          <div className="flex justify-center">
            <a
              href="/portfolio/#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Connect with Me
            </a>
            <a
              href="/portfolio/#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My project Works
            </a>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
 
export default About;