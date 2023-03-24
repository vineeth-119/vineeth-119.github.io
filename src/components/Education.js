import React, { Component } from "react";
import {IoSchoolSharp} from "react-icons/io5";
import {education} from "../data";
class Education extends Component{
    render() {
        return (
            <section id="education" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center">
                    <div className="flex flex-col w-full mb-20">
                        <IoSchoolSharp className="mx-auto inline-block w-10 mb-4 size-2x" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            Academics
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            The best places on Earth, where I have learnt and experienced best skills !!
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {education.map((grade) => (
                         <div key={grade.title} className="sm:w-1/2 p-4">  
                            <div className="flex relative">
                                <div className="px-8 py-10 relative w-full border-1 border-gray-700 bg-gray-900">
                                
                                <h2 className="title-font text-lg font-medium text-white mb-3">
                                    {grade.college}
                                </h2>
                                <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {grade.location}
                                </h3>
                                <p className="leading-relaxed">{grade.study}</p>
                                <p className="leading-relaxed ">{grade.year}</p>
                                <i className="leading-relaxed ">Score - {grade.cgpa}</i>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
            </section>
        );
    }
}
export default Education;