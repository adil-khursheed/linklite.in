import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { _config } from "@/lib/_config";
import Logo from "@/components/ui/logo";
import ScrollHandler from "../scroll-handler";

const Header = () => {
  return (
    <>
      <ScrollHandler />

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-all duration-300 ease-in-out max-w-[1200px] mx-auto rounded-full">
        <Logo />

        <div className="flex items-center gap-4">
          <Link href={`${_config.app_url}/login`}>
            <Button variant="link" className="cursor-pointer">
              Login
            </Button>
          </Link>

          <Link href={`${_config.app_url}/signup`}>
            <Button className="cursor-pointer rounded-full">Sign Up</Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
