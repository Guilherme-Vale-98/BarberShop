import type { Metadata } from "next";
import {inter} from "./constants/index"
import "./globals.css";
import Navbar from "@/components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
