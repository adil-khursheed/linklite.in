import React from "react";
import Hero from "./_components/Hero";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <Hero />

      <div className="relative z-40 pb-10 px-4">
        <div className="border rounded-xl p-2 -mt-12 max-w-[800px] mx-auto">
          <div className="w-full h-auto">
            <Image
              src={"/dashboard.png"}
              alt="Dashboard"
              width={800}
              height={800}
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
