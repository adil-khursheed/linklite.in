"use client";

import { motion } from "motion/react";

const HeroTitle = () => {
  return (
    <h2 className="text-4xl sm:text-5xl font-bold text-center leading-12 sm:leading-16">
      {"Simplify your online life, one link at a time."
        .split(" ")
        .map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(5px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="mr-2 inline-block text-transparent from-neutral-100 to-neutral-100/40 bg-gradient-to-b bg-clip-text">
            {word}
          </motion.span>
        ))}
    </h2>
  );
};

export default HeroTitle;
