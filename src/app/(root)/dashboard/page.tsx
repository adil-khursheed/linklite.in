import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import UrlShortenerForm from "./_components/UrlShortenerForm";

const Page = () => {
  return (
    <section className="px-3 py-5 sm:p-5 max-w-5xl w-full mx-auto">
      <h2 className="text-xl sm:text-3xl font-bold">
        Bridge For Your Connections
      </h2>

      <Card className="mt-8 bg-p-primary-light border-p-primary-light">
        <CardHeader>
          <CardTitle className="text-p-primary text-xl sm:text-2xl">
            Shorten Long Link
          </CardTitle>
          <CardDescription>No credit card required.</CardDescription>
        </CardHeader>

        <CardContent>
          <UrlShortenerForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default Page;
