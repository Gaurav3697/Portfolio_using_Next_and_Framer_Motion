"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FaQuoteLeft } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Typewriter } from 'react-simple-typewriter';
import { BsArrowUpRight } from "react-icons/bs";


const Hero = () => {
  return (
    <div>
      <div className="hero-section bg-sky-100 h-screen relative w-auto overflow-hidden">

        <Spotlight className='top-12 left-5 h-64 w-64' fill="#00A0E1" />
        <Spotlight className='top-10 left-3/4 h-52 w-52 ' fill="#00A0E1" />
        <Spotlight className='top-32 left-1/2 h-64 w-64 ' fill="#00A0E1" />
        <div className="intoductionHeading absolute text-3xl font-Roboto left-0 right-0 mx-auto text-center top-[16vh]">
          <div className='hello flex relative'><div className='text-xl border border-black rounded-2xl w-24 m-auto'>Hello</div><img src="./assets/small.svg" alt="" className='w-10 absolute left-[37vh] -top-8' /></div>
          <div className='heading relative'><TextGenerateEffect words={"I'm Gaurav"} className={"text-4xl font-Roboto"} />
            <Typewriter
              words={['wordpress developer', 'MERN developer', 'React developer', 'Nodejs developer', 'Next developer']}
              loop={true}
            />
            <img src="./assets/big.svg" alt="" className='w-10 absolute left-[2vh] top-20' /></div>
        </div>
        <div className="extratexts font-Lato absolute top-[38vh] w-[80vw] left-[15vw]">
          <div className="extraTextLeft hidden ">
            <FaQuoteLeft />I am a web developer who develops websites using MERN and next.js. I also developes websites using wordpress
          </div>
          <div className="extraTextright absolute right-0">
            <img src="/assets/rating.svg" alt="" className='w-24' /><div className='font-Lato font-bold '>Unmatched Quality</div><div>Guaranteed</div>
          </div>
          {/* <TextGenerateEffect words={} />; */}
        </div>

        <div className="pictureSection top-[70vh] left-0 right-0 relative ">
          <img src='./assets/my_photo-removebg-preview.png' className='absolute z-10 -top-[172px]' />
          <div className="elipse bg-[#00A0E1] h-[80vh] w-[100vw] absolute inset-x-0 mx-auto rounded-full"></div>

          <div className='button z-20 border border-white rounded-3xl backdrop-blur-xl w-72 py-1 px-1 inset-x-0 mx-auto top-24 relative overflow-hidden'>
            <button className="z-20 relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white[#00A0E1] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View Projects<BsArrowUpRight />
              </span>
            </button>
            <button className="p-[3px] relative z-20">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-[#bfe1ee] rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                Hire Me
              </div>
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
