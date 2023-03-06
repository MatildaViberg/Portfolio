import React from "react";
import HeroImage from "../images/ballong.jpeg"
import { MyButton } from "./MyButton";



export function Home() {
  return (
    <div name="home" 
    className="h-fit md:h-screen w-full pt-24 md:pt-4 bg-gradient-to-b from-[#1B0227]   to-black" >
      
      {/* denna fungerar inte i mobile bg-cover bg-no-repeat bg-hero-pattern*/}
      <div className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">
          
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl text-white pr-4">I'm a developing <h1 className="text-fuchsia-400">UX-designer</h1></h1>
       
          <p className="text-gray-200 py-4 pr-4 max-w-md text-1xl lg:text-2xl">I create designs that simplify everyday life for everyone.</p>
        
          <MyButton />
          </div>
        
        
        <div>
          <img src={HeroImage} alt="profile" className="rounded-2xl shadow-md shadow-gray-900 md:h-80 mx-auto w-2/3 md:w-full mb-4" />
          </div>
        </div>
        </div>
        
      
    
  );
}
