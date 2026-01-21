import type { Metadata } from "next";
import { Inter as Inter } from "next/font/google"
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BidAx",
  description: "Simplified auctions brought to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
        className={`${geistSans.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}