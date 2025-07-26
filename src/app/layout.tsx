import type { Metadata } from "next";
import { Geist, Geist_Mono, DynaPuff } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dynaPuff.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
