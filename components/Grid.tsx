import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'

const words = [
  {
    text: "About ",
    className: "text-4xl text-black font-bold font-Roboto",
  },
  {
    text: "Me",
    className: "text-4xl text-sky-500 font-bold font-Roboto",
  },
];

const Grid = () => {
  return (
    <div id='about' className='h-auto py-20 bg-sky-100 dark:bg-gray-900 p-1 overflow-x-hidden'>
      <div className='flex justify-center m-auto'>
        <TypewriterEffectSmooth words={words} />
      </div>
      <BentoGrid className='w-full py-5 h-[200vh]'>
        {
          gridItems.map((item) => (
              <BentoGridItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                img={item.img}
                spareImg={item.spareImg}
              />
          ))
        }
      </BentoGrid>
    </div>
  )
}

export default Grid
