"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftList = ['Javascript', 'react', 'express'];
  const rightList = ['Typescript', 'Next', 'MongoDB'];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoPlay: copied,
    // animationData:animationData,
    renderSetting: {
      preserveAspectRatio: "xMidYMid slice",
    }
  }

  const handleCopy = () => {
    const text = "gm4063420@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  //123 lines of return code

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-blue-600 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    // style={{
    //   //   add these two
    //   //   color generated from here https://cssgradient.io/
    //   background: "rgb(4,7,29)",
    //   backgroundColor:
    //     "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    // }}
    >


      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-28`}>

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl w-full"></div>
          </BackgroundGradientAnimation>
        )}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            "  group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 ", titleClassName
          )}
        >
          <div className="font-light md:max-w-32 md:text-xs lg:text-base text-sm text-gray-800 z-10 font-Lato">
            {description}
          </div>
          <div
            className={cn(
              "font-Roboto text-lg lg:text-3xl max-w-96 font-bold z-10 "
            )}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftList.map((item, i) => (
                  <span
                    key={i}
                    className="text-black font-Lato lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#bfdadf]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 text-black font-Lato
                    lg:opacity-100 rounded-lg text-center bg-[#bfdadf]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"
                  }`}
              >
                <img src="/assets/confetti.gif" alt="confetti" />
              </div>

              <button
                className="relative inline-flex h-12 w-auto md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                onClick={handleCopy}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                {/* remove px-3 py-1, add px-5 gap-2 */}
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 `}
                >
                  {copied ? "Email Copied!" : "Copy my email"}
                </span>
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );


};
