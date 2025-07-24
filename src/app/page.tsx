import { Button } from "@/components/ui/button";
import HeroTitle from "@/components/ui/hero-title";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <div className="px-4 pb-2 flex flex-col max-w-[1440px] w-full h-full mx-auto">
        <header className="py-5 flex items-center justify-between">
          <h1 className="text-xl font-bold text-neutral-100">LinkLite.in</h1>

          <div className="flex items-center gap-4">
            <Button variant="link" className="text-neutral-100 cursor-pointer">
              Login
            </Button>
            <Button className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-black">
              Sign Up
            </Button>
          </div>
        </header>

        <div className="relative flex-1 bg-black rounded-3xl p-3 md:p-10 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 24 24"
            fill="black"
            stroke="black"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-triangle-icon lucide-triangle fill-neutral-500 blur-2xl absolute -top-40 -right-36 rotate-45">
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>

          <div className="relative z-10 h-full flex flex-col justify-center items-center space-y-5">
            <HeroTitle />

            <p className="text-xl sm:text-2xl font-medium text-neutral-300 text-center">
              Create, share, and manage your links in a distraction-free
              environment.
            </p>

            <div className="bg-neutral-100 rounded-2xl p-5 max-w-3xl w-full mt-4">
              <div className="mb-4 space-y-1">
                <h4 className="text-2xl font-bold">Shorten Long Link</h4>
                <p className="text-neutral-500">No credit card required.</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="url" className="font-bold mb-2">
                    Paste your long URL here
                  </label>
                  <Input
                    placeholder="https://example.com/my-long-url"
                    id="url"
                    name="url"
                    className="h-14 rounded-xl sm:text-lg"
                  />
                </div>
                <Button className="rounded-xl h-12">
                  Get your free link here <ArrowRight />
                </Button>
              </form>
            </div>

            <div className="mt-4 space-y-3">
              <h5 className="text-lg sm:text-2xl text-center font-bold text-neutral-100 sm:text-center">
                Sign up for free. Your free plan includes
              </h5>
              <ul className="text-neutral-300 flex items-center justify-center gap-4 sm:gap-8">
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 />
                  <span>5 short links/month</span>
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 />
                  <span>Unlimited link clicks</span>
                </li>
              </ul>
            </div>
          </div>

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
