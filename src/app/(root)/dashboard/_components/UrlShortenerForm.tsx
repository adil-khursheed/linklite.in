"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const UrlShortenerFormSchema = z.object({
  originalUrl: z
    .url({
      message: "Please enter a valid URL",
    })
    .min(1, "This field is required."),
});

const UrlShortenerForm = () => {
  const form = useForm<z.infer<typeof UrlShortenerFormSchema>>({
    resolver: zodResolver(UrlShortenerFormSchema),
    defaultValues: {
      originalUrl: "",
    },
  });

  const onSubmit = (data: z.infer<typeof UrlShortenerFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3">
        <FormLabel id="originalUrl" className="">
          Enter your destination url
        </FormLabel>

        <div className="flex flex-col sm:flex-row gap-2">
          <FormField
            control={form.control}
            name="originalUrl"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Enter your URL"
                    {...field}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="h-12 w-full sm:w-auto">
            Create your Lite Link
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UrlShortenerForm;
