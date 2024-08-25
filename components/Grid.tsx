import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <div id='about' className='h-auto py-20 bg-sky-100 p-1 '>
      <BentoGrid className='w-full py-5 h-[200vh]'>
        {
            gridItems.map((item,i)=>(
              <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
            ))
        }
      </BentoGrid>
    </div>
  )
}

export default Grid
