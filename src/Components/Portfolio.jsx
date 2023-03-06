import React from "react";
import Arvered from "../images/CasesCoverImg/arvered.png"
import Asics from "../images/CasesCoverImg/Asics.png"
import Scania from "../images/CasesCoverImg/mobile.jpg"
import { HiExternalLink } from "react-icons/hi"


export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: "Arvered Kommunikation",
      description: "Client webpage build with Wix",
      casesImg: Arvered,
      web: "https://www.arveredkommunikation.se/",
      child: ( <>
        <HiExternalLink size={30} />
      </> )
    },
    {
      id: 2,
      title: "Booking site - ASICS",
      description: "Webdesign and functoinality",
      casesImg: Asics,
      web: "https://www.asicstrialtour.com/",
      child: ( <>
        <HiExternalLink size={30} />
      </>)
    },
    {
      id: 3,
      title: "Degree project - Scania",
      description: "This is a link to my old portfolio",
      casesImg: Scania,
      web:"https://matildawiberg93.myportfolio.com/",
      child: ( <>
      <HiExternalLink size={30} />
    </>
      )
    },
  ];
  

  return (

    <div
    name="work"
    className="bg-gradient-to-b to-black  from-[#1B0227]  w-full text-white py-24"
  >
    <div className="max-w-screen-lg px-8 py-8 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Work
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">
        {portfolios.map(({ id, title, description, casesImg, web, child }) => (
          <div key={id} className="shadow-md shadow-gray-900 rounded-lg">
            <img
              src={casesImg}
              alt="cases"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex flex-row items-center justify-center">
              <button className="w-full py-1 m-2 duration-200 hover:scale-105">
              <a href={web}> 
               <p className=" font-semibold"> {title} </p>{description} <p className="">{child}</p>
               </a> 
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};
