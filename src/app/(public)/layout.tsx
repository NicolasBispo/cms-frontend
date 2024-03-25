import type { Metadata } from "next";
import { Inter } from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full bg-white text-black min-h-screen min-w-screen">
      {children}
    </main>
  );
}
