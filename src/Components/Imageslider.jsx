import React from 'react';
import Starbucks from "../images/CasesCoverImg/starbucks.png"
import Pucko from "../images/CasesCoverImg/pucko.png"
import Globe from "../images/CasesCoverImg/globe.png"
import Room from "../images/CasesCoverImg/room.png"


export default function Imageslider(){
  const pics =[
    {
      id:1,
      url: Starbucks,
      title: 'Starbucks tent',
      },
      {
      id:2,
      url: Pucko,
      title: 'Pucko container',
      },
      {
        id:3,
        url: Globe,
        title: 'Globe in sunset',
        },

        {
          id:4,
          url: Room,
          title: 'Sushi',
          },

  ]
  return (
    <><div
    name=""
    className="bg-gradient-to-b from-black via-black to-black w-full  text-white py-24"
  >
    <div className="max-w-screen-lg px-8 py-8 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          3D graphics
        </p>
        <p className="py-6">Created in Blender</p>
      </div>

    
    <div className='max-w-screen m-auto px-4 grid lg:grid-cols-1 gap-4 '>
      {/* Left Side */}
      <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2'>
      {pics.map(({ id, url, title }) => (
       <div key={id}>
       <img
          className='row-span-3 object-fit w-full h-full p-2 duration-200 hover:scale-150'
          src={url}
          alt='/'
        />
       
        </div>
        ))}

      </div>
     </div>
     </div>
     </div>
     </>
     
  );
};