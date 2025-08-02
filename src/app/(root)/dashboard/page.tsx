import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import UrlShortenerForm from "./_components/UrlShortenerForm";

import { _config } from "@/lib/_config";
import { shortenLink } from "./_actions/shortenLink";
import ShortLinkDialog from "./_components/ShortLinkDialog";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const urlParams = await searchParams;
  const { url } = urlParams;

  let urlData: TShortLink | undefined;

  if (url && !urlData) {
    const data = await shortenLink(decodeURIComponent(url as string));
    urlData = data.url;
  }

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

      {urlData && <ShortLinkDialog data={urlData} />}
    </section>
  );
};

export default Page;
