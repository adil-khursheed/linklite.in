"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const heading = "Shorten Links, Maximize Impact.".split(" ");

const HeroTitle = () => {
  return (
    <h2 className="text-4xl sm:text-5xl font-bold text-center leading-12 sm:leading-16">
      {heading.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(5px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className={cn(
            "mr-2 inline-block text-transparent from-neutral-100 to-neutral-100/50 bg-gradient-to-b bg-clip-text",
            index === heading.length - 1
              ? "from-s-secondary to-s-secondary/50"
              : ""
          )}>
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

export default HeroTitle;
