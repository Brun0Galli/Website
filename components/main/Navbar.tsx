import { Socials } from "@/constants";
import Image from "next/image";
import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#b3b2b4]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
          <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <a
              href="#about-me"
              className="h-auto w-auto flex flex-row items-center"
            >
              <Image
                src="/Memoji.png"
                alt="logo"
                width={55}
                height={55}
                className="cursor-pointer hover:animate-slowspin object-cover rounded-full"
              />
    
              <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                BGH
              </span>
            </a>
    
            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
              <div className="flex items-center justify-between w-full h-auto border border-[#ded8f91f] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="#about-me" className="cursor-pointer">
                  About me
                </a>
                <a href="#skills" className="cursor-pointer">
                  Skills
                </a>
                <a href="#education" className="cursor-pointer">
                  Education
                </a>
                <a href="#projects" className="cursor-pointer">
                  Projects
                </a>
                <a href="#contact" className="cursor-pointer">
                  Contact
                </a>
              </div>
            </div>
    
            <div className="flex flex-row gap-5">
              {Socials.map((social) => (
                <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
                </a>
              ))}
              
            </div>
          </div>
        </div>
      );
    };

export default Navbar