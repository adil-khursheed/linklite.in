"use client";

import React from "react";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const DestinationUrlSchema = z.object({
  url: z.url({ error: "Please enter a valid url" }).min(1),
});

const HomeUrlForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof DestinationUrlSchema>>({
    resolver: zodResolver(DestinationUrlSchema),
    defaultValues: {
      url: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof DestinationUrlSchema>) => {
    router.push(`/signup?url=${encodeURIComponent(data.url)}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col items-start gap-4">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor="url" className="font-bold text-base">
                Paste your long URL here
              </FormLabel>

              <FormControl>
                <Input
                  {...field}
                  placeholder="https://example.com/my-long-url"
                  className="h-14 rounded-xl sm:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-xl h-12 cursor-pointer">
          Get your free link here <ArrowRight />
        </Button>
      </form>
    </Form>
  );
};

export default HomeUrlForm;
