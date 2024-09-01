"use client";

import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BsArrowUpRight } from "react-icons/bs";
import Image from 'next/image';

const Footer = () => {
        // router.push('/contact')

    return (
        <div className='footer w-screen h-auto bg-sky-100 pt-[3rem] overflow-x-hidden'>
            <div className='text-2xl w-2/3 mx-auto'>
                <TextGenerateEffect words={"Bring your digital Presence to next Level"} className={"text-2xl font-Roboto text-center font-bold pt-4"} wordNoStart={1} wordNoend={4} />
                <span className='mt-4 flex text-sm font-Lato font-thin w-full mx-auto justify-center md:text-2xl'>Lets Talk about Your next project</span>
            </div>

            <div className='flex justify-center mx-auto py-2'>
                <button className="z-20 relative inline-flex h-12 overflow-hidden rounded-full p-1">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white[#00A0E1] px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                        Get in touch<BsArrowUpRight />
                    </span>
                </button>
            </div>

            <div className="social-media-handlers mt-5">
                <div className="icons mx-auto w-[50vw] pb-5 flex justify-between">
                    {/* Add your social media icons */}
                    <a href='https://www.instagram.com/gaurav42456'>
                    <Image  
                    src={"./assets/instagram.svg"}
                    height={50}
                    width={50}
                    alt={"instagram"}
                    />
                    </a>

                    <a href='https://www.linkedin.com/in/gaurav-mahato-0a2aa7265/'>
                    <Image 
                    src={"./assets/linkedin.svg"}
                    height={50}
                    width={50}
                    alt={"LinkedIn"}
                    />
                    </a>

                    <a href='https://www.fiverr.com/gauravmahato819'>
                    <Image 
                    src={"./assets/fiverr.svg"}
                    height={50}
                    width={50}
                    alt={"fiverr"}
                    />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer
