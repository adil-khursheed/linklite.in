"use client";

import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      const header = document.querySelector("header") as HTMLElement;

      if (header) {
        if (scrolled) {
          header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
          header.style.backdropFilter = "blur(12px)";
          header.style.boxShadow =
            "0 1px 3px 0px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)";
        } else {
          header.style.backgroundColor = "transparent";
          header.style.backdropFilter = "none";
          header.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
};

export default ScrollHandler;
