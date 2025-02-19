"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo(
  {
    id,
    title,
    description,
    img,
    url,
    isLive
  }: {
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img: string;
    url: string;
    isLive: boolean;
  }
) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-1"
        >
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          {/* <CardItem //prefer tech used
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-1 rounded-xl text-xs font-normal dark:text-white"
          >
            View it →
          </CardItem> */}
          {
            isLive ? (<CardItem
              translateZ={20}
              translateX={40}
              as="button"
              onClick={() => window.open(url, "_blank")}
              className="font-bold font-Roboto text-sky-600"
            >
              Live Preview →
            </CardItem>) : <span className="font-bold font-Roboto text- ">Coming Soon</span>
          }
        </div>
      </CardBody>
    </CardContainer>
  );
}
