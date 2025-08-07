import {inter} from "./constants/index"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



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
        <Footer/>
      </body>
    </html>
  );
}
