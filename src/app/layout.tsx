import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mrcasey",
  description: "mrcasey – Casey Goodings",
  authors: [{ name: "Casey Goodings" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} flex h-max flex-col`}>
        {children}
      </body>
    </html>
  );
}
