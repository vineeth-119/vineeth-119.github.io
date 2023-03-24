import React, { Component } from "react";
import {FaAddressCard,FaCode,FaGitSquare,FaInstagramSquare,FaLinkedin,FaPeopleArrows,FaPhoneAlt, FaWhatsappSquare,} from "react-icons/fa";
import {  GrMail } from "react-icons/gr";
import {SiLeetcode,SiCodechef,SiHackerrank,SiGeeksforgeeks} from "react-icons/si";
class Contact extends Component {
  render() {
    return (
      <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 px-6">
              <FaAddressCard className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </span>
              <p className="mt-1">
                7-6, Brahmana Wada Chennur<br />
                Telangana, India 504201
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <GrMail className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                  <br/>
                </span>
              <a className="text-indigo-400 leading-relaxed" href="mailto:vineetsharma30@gmail.com">
                vineethsharma30@gmail.com
              </a>
              <FaPhoneAlt className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-semibold text-white tracking-widest text-xs">
                  PHONE
                </span>
              <p className="leading-relaxed">+917993366900</p>
            </div>
          </div>

          <div className="container  px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 px-6">
              <FaPeopleArrows className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-semibold text-white tracking-widest text-xs">
                  SOCIAL MEDIA 
                  <br/>
                </span>
              <span className="flex gap-5 title-font font-semibold text-white tracking-widest text-xs">
                <a href="https://www.instagram.com/vineeth_buddarapu/" className="ml-0 text-xs">
                  <FaInstagramSquare size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/> 
                </a>
                <a href="https://wa.me/+917993366900" className="ml-0 text-xs">
                  <FaWhatsappSquare size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/> 
                </a>
                <a href="https://www.linkedin.com/in/vineethsharma27" className="ml-0 text-xs">
                  <FaLinkedin size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>   
                </a>
                <a href="https://github.com/vineeth-119/" className="ml-0 text-xs">
                  <FaGitSquare size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>   
                </a>
            </span>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <FaCode className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-semibold text-white tracking-widest text-xs">
                  CODING PROFILES
                  <br/>
                </span>
              <span className="flex gap-5 title-font font-semibold text-white tracking-widest text-xs">
                  <a href="https://leetcode.com/vineeths119/" className="ml-0 text-xs">
                    <SiLeetcode size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/> 
                  </a>
                  <a href="https://www.codechef.com/users/vineethsharma7" className="ml-0 text-xs">
                    <SiCodechef size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/> 
                  </a>
                  <a href="https://www.hackerrank.com/vineethsharma30" className="ml-0 text-xs">
                    <SiHackerrank size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/> 
                  </a>
                  <a href="https://auth.geeksforgeeks.org/user/vineethsharma" className="ml-0 text-xs">
                    <SiGeeksforgeeks size="2x" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/> 
                  </a>
              </span>
            </div>
          </div>
    </section>
    );
  }
}
 
export default Contact;