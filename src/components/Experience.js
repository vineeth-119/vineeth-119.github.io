import React, { Component} from "react";
import {ImOffice} from "react-icons/im";
import {workExperience} from "../data";

class Experience extends Component{

    render() {
        return (
            <section id="experience" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10  text-center mx-auto lg:px-40">
                    <div className="flex flex-col w-full  mb-20">
                        <ImOffice className="size-2x mx-auto inline-block w-10 mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            Professional Experience
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            <i>Choose a job you love, and you will never have to work!!</i>
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {workExperience.map((work) => (
              
                         <div key={work.title} className="sm:w-1/2 w-100 p-4">  
                            <div className="flex relative">
                             {/* <ModalHover onHover={this.RenderModal.RenderModal(work)}> */}
                             <div className="px-8 py-10 relative w-full border-1 border-gray-700 bg-gray-900 ">
                                
                                <h2 className="title-font text-lg font-medium text-white mb-3">
                                    {work.title}
                                </h2>
                                <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {work.company}
                                </h3>
                                <p className="leading-relaxed">{work.skill}</p>
                                </div>
                             {/* </ModalHover> */}
                              
                            </div>
                            </div>
                        ))}
                    </div>
                    </div>
            </section>
        );
    }
}
export default Experience;