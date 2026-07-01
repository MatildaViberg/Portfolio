import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Button } from "./Button";



export function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "work"
    },
    {
      id: 4,
      link: "experience"
    },
    {
      id: 5,
      link: "contact"
    },


  ]
  return (
    <header className="">
      <div className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center text-white backdrop-blur-md bg-black/30 z-5">

        <div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-base md:text-lg font-medium tracking-tight cursor-pointer"
          >
            Matilda Viberg
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm md:text-base">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-gray-300 hover:text-white transition-all duration-200 hover:-translate-y-[1px] cursor-pointer capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}

          {/* ✅ CTA button */}
          <li>
            <Button href="/CVMatildaViberg.pdf" type="secondary">
              View CV
            </Button>
          </li>
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
    top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm">

            {links.map(({ id, link }) => (
              <li
                key={id}
                className="p-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}

            {/* ✅ CTA at the bottom */}
            <li className="mt-8">
              <Button href="/CVMatildaViberg.pdf" type="secondary">
                View CV
              </Button>
            </li>

          </ul>
        )}




      </div>
    </header>
  );
}
