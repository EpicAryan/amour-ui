"use client";

import { MotionValue, useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const ParallaxSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default ParallaxSection;

const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0,1], [0, -5]);
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 flex h-screen flex-col items-center justify-center bg-[#C72626] pb-[10vh] text-[3vw] text-white">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0,1], [-5, 0]);
  return (
    <motion.div style={{scale, rotate}} className="relative h-screen">
      <Image src="/parallax-scroll.webp" alt="image" fill />
    </motion.div>
  );
};
