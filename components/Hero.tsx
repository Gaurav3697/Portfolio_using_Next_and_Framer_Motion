'use client';
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FaQuoteLeft } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Typewriter } from 'react-simple-typewriter';
import { BsArrowUpRight } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import animationData from "@/components/lottie/coding.json"


const Hero = () => {
  const router = useRouter();
  const projecthandleClick = () => {
    router.push('#recentProjects')
  }

  return (
    <div id='home'>
      <div className="hero-section bg-sky-100 dark:bg-gray-900 h-screen relative w-auto overflow-hidden">
        <Spotlight className='top-0 left-32 h-96 w-96' fill="#FFFFFF" />
        {/* <Spotlight className='top-0 right-32 h-[100vh] w-96' fill="#FFFFFF" /> */}
        <div className="intoductionHeading relative text-xl md:text-3xl md:tracking-wider lg:tracking-widest lg:text-5xl font-Roboto left-0 right-0 mx-auto text-center top-[14vh] h-40 w-[99vw] md:w-[50vw]  p-10">

          <img src="./assets/small.svg" alt="" className='w-10 absolute right-[1rem] top-0' />

          <div className='text-xl border border-black rounded-2xl w-24 m-auto'>Hello</div>

          <div className='heading relative'><TextGenerateEffect words={"I'm Gaurav"} className={"text-3xl md:text-5xl font-Roboto md:tracking-wider lg:tracking-widest lg:text-6xl"} wordNoStart={0} wordNoend={2} />

            <Typewriter
              words={[ 'MERN developer', 'React developer', 'Nodejs developer', 'Next developer']}
              loop={true}
            />
            <img src="./assets/big.svg" alt="" className='w-10 absolute -left-8 top-24' /></div>

        </div>
        <div className='gif-file w-[90vw] h-[60vh] md:w-[40vw] md:h-[50vh] absolute left-0 md:left-[30vw] top-[45vh] sm:top-52'>
          <Lottie
            animationData={animationData}
            height={400}
            width={400}
          />
        </div>

        <div className="extratexts font-Lato absolute top-[38vh] w-[80vw] right-[5vw] md:right-[15vw]">
          <div className="extraTextLeft hidden md:block w-44 left-[10vw]">
            <FaQuoteLeft />I am a web developer who develops websites using MERN and next.js. I also developes websites using wordpress
          </div>
          <div className="extraTextright absolute right-0 ">
            <img src="/assets/rating.svg" alt="" className='w-24' /><div className='font-Lato font-bold '>Unmatched Quality</div><div>Guaranteed</div>
          </div>
          {/* <TextGenerateEffect words={} />; */}
        </div>

        <div className="pictureSection top-[50vh]  left-0 right-0 relative">

          {/* <img src='./assets/my_photo-removebg-preview.png' className='absolute z-10 -bottom-[28vh] md:-bottom-[40vh] left-1/2 transform -translate-x-1/2 h-[30rem] md:h-[30rem] h-md:h-[35rem] h-lg:h-[45rem]' /> */}


          <div className='button z-20 border border-white rounded-3xl backdrop-blur-xl w-72 py-1 px-1 inset-x-0 mx-auto top-[16vh] h-md:top-[22vh] relative overflow-hidden'>

            <button className="z-20 relative inline-flex h-12 overflow-hidden rounded-full p-[1px]" onClick={projecthandleClick}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white[#00A0E1] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" >
                View Projects<BsArrowUpRight />
              </span>
            </button>
            <button className="p-[3px] relative z-20" >
              <a href="mailto:gm4063420@gmail.com">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-[#bfe1ee] rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                  Hire Me
                </div>
              </a>
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
