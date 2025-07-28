import { Button } from "@/components/ui/button";
import HeroTitle from "@/components/ui/hero-title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { colors } from "@/lib/constants";
import { ArrowRight, CheckCircle2, LinkIcon, Triangle } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-p-primary h-screen w-screen">
      <div className="px-4 pb-2 flex flex-col max-w-[1440px] w-full h-full mx-auto">
        <header className="py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl text-neutral-100 flex items-center gap-1">
            <LinkIcon className="size-6" color={colors["s-secondary"]} />
            <span className="font-dyna-puff">LinkLite</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="link"
                className="text-neutral-100 cursor-pointer">
                Login
              </Button>
            </Link>

            <Link href="/signup">
              <Button className="cursor-pointer bg-p-primary-light hover:bg-p-primary-light/90 text-black">
                Sign Up
              </Button>
            </Link>
          </div>
        </header>

        <main className="relative flex-1 bg-p-primary rounded-3xl p-3 md:p-10 overflow-hidden">
          <Triangle className="size-96 fill-neutral-600 blur-2xl absolute -top-40 -right-36 rotate-45" />

          <section className="relative z-10 h-full flex flex-col justify-center items-center space-y-5">
            <HeroTitle />

            <p className="text-xl sm:text-2xl font-medium text-neutral-300 text-center">
              Create, share, and manage your links in a distraction-free
              environment.
            </p>

            <div className="bg-p-primary-light rounded-2xl p-5 max-w-3xl w-full mt-4">
              <div className="mb-4 space-y-1">
                <h4 className="text-2xl font-bold">Shorten Long Link</h4>
                <p className="text-neutral-500">No credit card required.</p>
              </div>

              <form className="flex flex-col items-start gap-4">
                <div className="flex flex-col space-y-1 w-full">
                  <Label htmlFor="url" className="font-bold text-base">
                    Paste your long URL here
                  </Label>
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
                  <CheckCircle2 color={colors["s-secondary"]} />
                  <span>5 short links/month</span>
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 color={colors["s-secondary"]} />
                  <span>Unlimited link clicks</span>
                </li>
              </ul>
            </div>
          </section>

          <Triangle className="size-96 fill-neutral-600 blur-2xl absolute -bottom-20 -left-30 rotate-135" />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
