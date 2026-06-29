import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-scroll";


export function MyButton() {
    return (
      <div>
            <Link to="work"
           className="group text-white w-fit px-6 py-3 my-2
          flex items-center rounded-md bg-black shadow-inner shadow-fuchsia-400 cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300 ml-3" >
            <BsArrowRight />
            </span>
          </Link>
          </div>
  
    )
  }