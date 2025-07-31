import React from "react";

import Image from "next/image";
import Link from "next/link";

import Auth_Form from "../_components/Auth_Form";
import Logo from "@/components/ui/logo";

const Page = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex-1/5 flex flex-col px-5">
        <Logo className="py-5" />

        <div className="flex-1 flex flex-col justify-center space-y-4 max-w-md w-full h-full mx-auto">
          <div className="flex flex-col gap-2 mb-5">
            <h2 className="text-3xl font-bold">Create your account</h2>

            <p className="text-sm text-neutral-500">
              Already have an account?{" "}
              <Link href="/login" className="text-s-secondary underline">
                Login
              </Link>
            </p>
          </div>

          <Auth_Form isSignUp={true} />
        </div>
      </div>

      <div className="flex-1 hidden lg:flex flex-col items-center justify-center bg-p-primary-light rounded-s-4xl px-4">
        <Image
          src={"/sign_up.png"}
          alt="Sign Up at LinkLite.in"
          width={400}
          height={400}
        />

        <p className="text-center text-lg font-semibold">
          Streamline your online presence, amplify your productivity.
        </p>
      </div>
    </div>
  );
};

export default Page;
