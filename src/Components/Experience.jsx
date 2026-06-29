import React from 'react'
import HTML from "../images/icons/html.png"
import CSS from "../images/icons/css.png"
import Blender from "../images/icons/blender.png"
import Reactlogo from "../images/icons/react.png"
import Tailwind from "../images/icons/tailwind.png"
import XD from "../images/icons/XD.png"
import AI from "../images/icons/AI.png"
import PS from "../images/icons/PS.png"
import PR from "../images/icons/PR.png"
import AE from "../images/icons/AE.png"
import AU from "../images/icons/AU.png"
import Figma from "../images/icons/Figma.png"






export function Experience() {
    const logos = [
        {
            id: 1,
            src: HTML,
            text: "HTML",
            style: "shadow-orange-900",
            size: "w-20 mx-auto"
        },
        {
            id: 2,
            src: CSS,
            text: "CSS",
            style: "shadow-blue-900",
            size: "w-20 mx-auto"
        },
        {
          id: 3,
          src: Reactlogo,
          text: "React",
          style:  "shadow-cyan-400",
          size: "w-20 mx-auto"
      },
        {
            id: 4,
            src: Blender,
            text: "Blender",
            style: "shadow-yellow-900",
            size: "w-20 mx-auto"
        },
        
        {
            id: 5,
            src: Tailwind,
            text: "Tailwind",
            style:  "shadow-sky-300",
            size: "w-20 mx-auto"

        },
        {
            id: 6,
            src: Figma,
            text: "Figma",
            style: "shadow-[#FF7262] ",
            size: "w-20 mx-auto"
        },

        {
          id: 7,
          src: XD,
          text: "Adobe Xd",
          style: "shadow-[#EE28B7] ",
          size: "w-20 mx-auto"
        },

        {
          id: 8,
          src: AI,
          text: "Illustrator",
          style: "shadow-[#CC6C1C]",
          size: "w-20 mx-auto"
      },

      {
        id: 9,
        src: PS,
        text: "Photoshop",
        style: "shadow-[#2FB5DD]",
        size: "w-20 mx-auto"
    },
    {
      id: 10,
      src: PR,
      text: "Premiere Pro",
      style: "shadow-[#AE62CC] ",
      size: "w-20 mx-auto"
  },
  {
    id: 11,
    src: AE,
    text: "After effects",
    style: "shadow-[#A57BCC] ",
    size: "w-20 mx-auto"
},


{
  id: 12,
  src: AU,
  text: "Audition",
  style: "shadow-[#7F7FEA] ",
  size: "w-20 mx-auto"
},
  ]
    
  return (
    <div
    name="experience"
    className="bg-gradient-to-b from-black to-black w-full text-white py-24"
  >
    <div className="max-w-screen-lg px-8 py-8 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Experience
        </p>
        <p className="py-6">Programs I have experience in</p>
      </div>
        <div>
            <div className="w-full m-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 
            gap-8 text-center py-8 px-12 ">
                {logos.map(({id, src, text, style, size }) => (
                    <div key={id}
                     className={`shadow-inner hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                    <img src={src} alt="logo" className={`w-20 mx-auto ${size}`}/>
                    <p>{text}</p>
                    </div>
                )
                )}
                
            </div>
        </div>

      </div>
      </div>


  )
}

