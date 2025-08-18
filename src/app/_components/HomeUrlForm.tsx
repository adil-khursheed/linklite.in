"use client";

import React from "react";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { _config } from "@/lib/_config";

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
    router.push(
      `${_config.app_url}/signup?url=${encodeURIComponent(data.url)}`
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-3xl w-full mt-4 bg-white flex flex-col sm:flex-row sm:items-center sm:border sm:border-p-primary/5 sm:rounded-full sm:shadow sm:p-1.5 gap-1.5">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  placeholder="https://example.com/my-long-url"
                  className="h-14 sm:text-lg sm:border-0 sm:shadow-none rounded-full"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-md sm:rounded-full h-14 cursor-pointer">
          Get your free link here <ArrowRight />
        </Button>
      </form>
    </Form>
  );
};

export default HomeUrlForm;
