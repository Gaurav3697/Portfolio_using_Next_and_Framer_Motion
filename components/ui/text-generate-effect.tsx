"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  wordNoStart,
  wordNoend
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  wordNoStart:number;
  wordNoend:number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 0.1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={ (idx>wordNoStart && idx<wordNoend)?(`text-[#006087] dark:text-sky-200`): `dark:text-white text-black opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("")}>
      <div className="">
        <div className={` dark:text-white text-black text-4xl tracking-wide ${className}`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
