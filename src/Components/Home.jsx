import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs"

import { Button } from "./Button";



export function Home() {
  return (

    <div className="min-h-screen w-full bg-gradient-to-b from-[#1B0227] to-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-start gap-6">

        <p className="uppercase tracking-widest text-sm text-white">
          Matilda Viberg
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight max-w-3xl">
          UX Designer focused on
          <span className="block text-fuchsia-400 mt-3 font-medium">
            human–AI interaction
          </span>
        </h1>


        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
          I design user experiences grounded in research, with a focus on structure,
          systems, and how people interact with emerging technologies.
        </p>


        <div className="flex items-center gap-4 pt-2">
          <Button to="work" type="primary" icon={<BsArrowDown />}>
            Portfolio
          </Button>

          <Button href="/CVMatildaViberg.pdf" type="secondary" icon={<BsArrowUpRight />}>
            View CV
          </Button>
        </div>

      </div>
    </div>

  );
}
