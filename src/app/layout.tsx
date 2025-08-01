import type { Metadata } from "next";
import { Inter, DynaPuff } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { _config } from "@/lib/_config";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dyna-puff",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkLite.in",
  description:
    "Create, share, and manage your links in a distraction-free environment.",
  openGraph: {
    type: "website",
    title: "LinkLite.in",
    description:
      "Create, share, and manage your links in a distraction-free environment.",
    url: "https://linklite.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId={_config.google_client_id!}>
      <html lang="en">
        <body
          className={`${interSans.variable} ${dynaPuff.variable} antialiased`}>
          {children}
          <Toaster richColors position="top-center" duration={3000} />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
