import React from "react";

const About = () => {
    return (
        <div name="about"
            className="w-full py-14 bg-gradient-to-b to-[#1B0227]  from-black">

            <div className="max-w-screen-lg px-8 py-8 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8 ">
                    <p className="text-4xl text-white font-bold inline border-b-4 border-gray-700">About</p>
                </div>

                <p className="text-1xl text-white">
                    I am a UX designer based in Stockholm with a Master’s degree in User Experience and Interactive Media Design, with a particular focus on AI development and human–AI co-creation.
                    My work today is strongly shaped by my Master’s thesis, where I explored interaction, user experience, and research-driven design methods through an in-depth engagement with a complex problem over time. This experience strengthened my interest in how emerging technologies, especially AI, can support more collaborative, adaptive, and meaningful user experiences.

                    <br /><br />

                    Through my studies and recent hands-on work, I have moved between user research, interaction design, and implementation, and I am comfortable working both conceptually and practically. I am particularly interested in how structure, systems, and constraints shape not only design decisions, but also how humans interact and co-create with intelligent systems.

                    <br /><br />

                    Earlier in my career, I completed an internship at Scania, where I worked alongside a UX team and contributed to design system documentation and mobile design guidelines. This gave me valuable insight into designing within large organisations and complex product environments.
                    I also have a background in media technology, front-end development, and visual exploration, including 3D, which continues to influence how I approach interaction, form, and usability, particularly in the context of designing for evolving, AI-driven systems.
                </p>

            </div>
        </div>
    )
}

export default About;