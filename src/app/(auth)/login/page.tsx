"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";
import { colors } from "@/lib/constants";
import Image from "next/image";

const LoginSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Page = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof LoginSchema>) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { success } = await res.json();

    if (success) {
    }
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="flex-1 flex flex-col px-5">
        <div className="flex items-center gap-1 py-5" aria-hidden="true">
          <LinkIcon color={colors["s-secondary"]} />
          <span className="font-dyna-puff text-xl">LinkLite</span>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-4 max-w-md w-full h-full mx-auto">
          <div className="flex flex-col gap-2 mb-5">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-lg">
              Enter your credentials to login to your account.
            </p>
          </div>

          <Form {...form}>
            <form
              className="flex flex-col space-y-3 w-full"
              onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button variant="link" className="underline px-0">
                  Forgot Password?
                </Button>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>

          <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
            <span className="text-muted-foreground text-xs">Or</span>
          </div>

          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex items-center justify-center bg-[#fffcf2] rounded-s-4xl">
        <Image
          src={"/sign_in.png"}
          alt="Login to LinkLite.in"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Page;
