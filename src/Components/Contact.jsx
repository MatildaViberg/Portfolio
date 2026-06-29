import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


  

export default function Contact(){
  const links = [
    
    {
      id: 1,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:matildawiberg93@gmail.com",
    },
    {
      id: 2,
      child: (
        <>
          Download resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/matilda.viberg.resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/matilda-viberg/",
      style: "rounded-tr-md",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-24" name="contact"
   
>
<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center  md:w-1/2">
            
            <div className="pb-8 ">
                <p className="text-4xl text-white font-bold inline border-b-4 border-gray-700">Contact</p>
            </div>

             
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-around shadow-inner shadow-[#7F7FEA] w-full h-14 px-4 m-4 rounded-md duration-300 bg-black" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-center gap-4 items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
    
    
    </div>
      
    </section>
  );
};
