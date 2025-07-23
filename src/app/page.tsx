import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <div className="px-5 pb-2 flex flex-col max-w-[1440px] w-full h-full mx-auto">
        <header className="py-5">
          <h1 className="text-xl font-bold text-neutral-100">LinkLite.in</h1>
        </header>
        <div className="relative flex-1 bg-black rounded-3xl flex flex-col justify-center items-center p-3 md:p-10 space-y-3 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="350"
            viewBox="0 0 24 24"
            fill="black"
            stroke="black"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-triangle-icon lucide-triangle fill-neutral-500 blur-2xl absolute -top-20 -right-30 rotate-45">
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-100 text-center">
            Simplify your online life, one link at a time.
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-neutral-300 text-center">
            Create, share, and manage your links in a distraction-free
            environment.
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="350"
            viewBox="0 0 24 24"
            fill="black"
            stroke="black"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-triangle-icon lucide-triangle fill-neutral-500 blur-2xl absolute -bottom-20 -left-30 rotate-135">
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
