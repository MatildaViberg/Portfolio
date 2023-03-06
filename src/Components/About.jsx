import React from "react";

const About = () => {
    return (
    <div name="about" 
    className="w-full py-14 bg-gradient-to-b to-[#1B0227]  from-black">
        
        <div className="max-w-screen-lg px-8 py-8 mx-auto flex flex-col justify-center w-full h-full">
            
            <div className="pb-8 ">
                <p className="text-4xl text-white font-bold inline border-b-4 border-gray-700">About</p>
            </div>
            <p className="text-1xl text-white ">My name is Matilda and I currently live in Stockholm, Sweden.<br></br>
            I am an outgoing and energetic person who thrives on learning new things.
            I have a bachelor's degree in media technology from Södertörn University. 
            During my internship at Scania I got to see behind the scenes when their UX team developed and 
            wrote the manual for their new design system.
            <br></br><br></br>
            Over the years, I have worked with all Adobe programs, both to produce sketches but also film and animation for various projects. 
            I am currently learning more about 3D graphics and animation in my spare time. 
            In addition to this portfolio, which is developed with React and styled with Tailwind, 
            I have created websites for clients with the webbuilder tool Wix and Wordpress.</p>
           </div>
    </div>
)}

export default About;