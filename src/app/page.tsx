import React from "react";
import Link from "next/link";

import { CheckCircle2, CreditCardIcon, Triangle } from "lucide-react";
import { colors } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import HeroTitle from "@/components/ui/hero-title";
import Logo from "@/components/ui/logo";
import HomeUrlForm from "./_components/HomeUrlForm";

const HomePage = () => {
  return (
    <div className="bg-p-primary h-screen w-screen">
      <div className="px-4 pb-2 flex flex-col h-full">
        <header className="py-5 flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="link"
                className="text-white hover:text-p-primary-light cursor-pointer">
                Login
              </Button>
            </Link>

            <Link href="/pricing">
              <Button className="cursor-pointer bg-white hover:bg-p-primary-light text-black">
                Sign Up
              </Button>
            </Link>
          </div>
        </header>

        <main className="relative flex-1 bg-p-primary backdrop-blur-3xl rounded-3xl p-3 md:p-10 overflow-hidden">
          <Triangle className="size-96 fill-p-primary-light/20 blur-3xl absolute -top-40 -right-36 rotate-45" />

          <section className="relative z-10 max-w-[1440px] w-full mx-auto h-full flex flex-col justify-center items-center space-y-5">
            <HeroTitle />

            <p className="max-w-2xl text-lg sm:text-xl font-medium text-neutral-300 text-center">
              Transform long, complex URLs into clean, shareable links. Track
              clicks, analyze performance, and boost your online presence.
            </p>

            <HomeUrlForm />

            <div className="mt-4 space-y-3 flex flex-col items-center">
              <h5 className="text-lg sm:text-2xl text-center font-bold text-neutral-100 sm:text-center">
                Sign up for free. Your free plan includes
              </h5>

              <p className="max-w-2xl text-sm sm:text-base font-medium text-neutral-500 text-center flex items-center gap-2">
                <CreditCardIcon className="inline" />
                <span>No credit card required.</span>
              </p>

              <ul className="text-neutral-300 flex items-center justify-center gap-4 sm:gap-8">
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 color={colors["s-secondary"]} />
                  <span>100 short links/month</span>
                </li>

                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 color={colors["s-secondary"]} />
                  <span>Unlimited link clicks</span>
                </li>
              </ul>
            </div>
          </section>

          <Triangle className="size-96 fill-p-primary-light/20 blur-3xl absolute -bottom-20 -left-30 rotate-135" />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
