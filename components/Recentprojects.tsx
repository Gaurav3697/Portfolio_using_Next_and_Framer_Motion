import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { ThreeDCardDemo } from './ui/3dcontainer';
import {Projectsdata} from '../data/index';

const words = [
  {
    text: "Recent ",
    className: "text-4xl text-black font-bold font-Roboto",
  },
  {
    text: "Projects",
    className: "text-4xl text-sky-500 font-bold font-Roboto",
  },
];

const Recentprojects = () => {
  return (
    <div id='recentProjects' className='h-auto bg-sky-100 dark:bg-gray-900 p-1 overflow-x-hidden'>
      <div className="flex justify-center m-auto">
      <TypewriterEffectSmooth words={words} />
      </div>
      <div className='w-full m-auto grid gap-0 lg:grid-cols-2'>
        {
          Projectsdata.map((item, i) => (
            <ThreeDCardDemo key={item.key} id={item.key} title={item.title} description={item.description} img={item.imgSrc} url={item.url}/>
          ))
        }
      </div>
    </div>
  )
}

export default Recentprojects
