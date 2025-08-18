import React from "react";

import { CheckCircle2, CreditCardIcon } from "lucide-react";
import { colors } from "@/lib/constants";
import HeroTitle from "@/components/ui/hero-title";
import HomeUrlForm from "./HomeUrlForm";
import Container from "@/components/container";

const Hero = () => {
  return (
    <div className="w-full bg-white relative">
      {/* Noise Texture (Darker Dots) Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.20) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative">
        {/* Amber Glow Background */}
        <div
          className="absolute inset-0 z-0 "
          style={{
            backgroundImage: `
                  radial-gradient(125% 125% at 50% 90%, transparent 40%, #fffcf2 100%)
                `,
            backgroundSize: "100% 100%",
          }}
        />
        <Container className="relative z-10 flex flex-col justify-center items-center space-y-5 py-28">
          <HeroTitle />

          <p className="max-w-2xl text-lg sm:text-xl font-medium text-p-primary text-center">
            Transform long, complex URLs into clean, shareable links. Track
            clicks, analyze performance, and boost your online presence.
          </p>

          <HomeUrlForm />

          <div className="mt-4 space-y-3 flex flex-col items-center">
            <h5 className="text-lg sm:text-2xl text-center font-bold text-neutral-400 sm:text-center">
              Sign up for free. Your free plan includes
            </h5>

            <p className="max-w-2xl text-sm sm:text-base font-medium text-neutral-400 text-center flex items-center gap-2">
              <CreditCardIcon className="inline" />
              <span>No credit card required.</span>
            </p>

            <ul className="text-p-primary flex items-center justify-center gap-4 sm:gap-8">
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle2 color={colors["s-secondary"]} />
                <span>25 short links/month</span>
              </li>

              <li className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle2 color={colors["s-secondary"]} />
                <span>Unlimited link clicks</span>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
