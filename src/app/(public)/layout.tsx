import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full bg-white text-black min-h-screen min-w-screen">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}
