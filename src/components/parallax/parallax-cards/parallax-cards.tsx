"use client";

import React, { useRef } from "react";
import { CardInfo } from "./cards-data";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

type ParallaxCardProps = CardInfo & {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const ParallaxCards = ({
  title,
  description,
  src,
  color,
  i,
  progress,
  range,
  targetScale,
}: ParallaxCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-[100vh] items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-10% + ${25 * i}px)`,
          backgroundColor: color,
        }}
        className="relative top-[-10%] flex h-[350px] w-[700px] flex-col items-center justify-between rounded-2xl p-4 gap-4"
      >
        <h2 className="mt-2 text-xl font-bold">{title}</h2>
        <div className="w-full h-full grid grid-cols-2 gap-4">
          <p className="px-2 pt-10 text-justify text-sm leading-tight">
            {description}
          </p>
          <div className="h-[100%] w-[100%] overflow-hidden rounded-2xl">
            <motion.div style={{ scale: imageScale }} className="h-full w-full">
              <Image
                src={src}
                alt={title}
                width={500}
                height={500}
                className="h-full w-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxCards;
