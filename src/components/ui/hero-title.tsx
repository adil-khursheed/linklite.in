"use client";

import { motion } from "motion/react";

const HeroTitle = () => {
  return (
    <h2 className="text-4xl sm:text-5xl font-bold text-neutral-100 text-center">
      {"Simplify your online life, one link at a time."
        .split(" ")
        .map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="mr-2 inline-block">
            {word}
          </motion.span>
        ))}
    </h2>
  );
};

export default HeroTitle;
