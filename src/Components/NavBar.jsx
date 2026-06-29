import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";




export function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link:"about"
    },
    {
      id: 3,
      link:"work"
    },
    {
      id: 4,
      link:"experience"
    },
    {
      id: 5,
      link:"contact"
    },
    

  ]
  return (
    <header className="">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div><Link to="home"><a className="text-4xl font-signature ml-2 cursor-pointer">Matilda Viberg</a></Link>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li 
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-125 duration-100"
            >
             <Link to={link} smooth duration={500}> {link} </Link>
          </li>          
         ))} 
        </ul>
            {/* denna gör så att när ena ikonen är klickad förändrar den ikon */}
        <div onClick={() => setNav(!nav)} 
        className="cursor-pointer pr-4 z-10 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
            {/* när nav state förändras kommer den antingen visa meny texten eller inte  */}
        {nav && (
      <ul className="flex flex-col 
        justify-center items-center absolute 
        top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
        {links.map(({ id, link }) => (
      <li 
        key={id}
        className="p-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
      >
        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}> {link} </Link>
      </li>  
     ))}       
  </ul>

        )}
      
      </div>
    </header>
  );
}
