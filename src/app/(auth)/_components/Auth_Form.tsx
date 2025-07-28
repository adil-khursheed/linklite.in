"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

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
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const LoginSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Login_Form = ({ isSignUp = false }: { isSignUp?: boolean }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { success } = await res.json();

      if (success) {
        router.replace("/dashboard");
        toast.success("Login successful");
      }
    } catch (error) {
      console.log(error);

      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                  <Input placeholder="Email" className="h-12" {...field} />
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
                  <Input placeholder="Password" className="h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isSignUp && (
            <div className="flex justify-end">
              <Button variant="link" className="underline px-0">
                Forgot Password?
              </Button>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className={cn(
              "cursor-pointer w-full h-12",
              isSignUp && "mt-4",
              loading && "cursor-not-allowed opacity-50"
            )}>
            {loading ? (
              <Loader2 color="white" size={16} className="animate-spin" />
            ) : isSignUp ? (
              "Create free account"
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>

      <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
        <span className="text-muted-foreground text-xs">Or</span>
      </div>

      <Button variant="outline" className="cursor-pointer w-full h-12">
        Login with Google
      </Button>
    </>
  );
};

export default Login_Form;
