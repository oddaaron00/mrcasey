import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mrcasey",
  description: "Casey Goodings – Software Engineer and Developer",
  authors: [{ name: "Casey Goodings" }],
};

// TODO: Add CSP
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} flex h-max flex-col`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
