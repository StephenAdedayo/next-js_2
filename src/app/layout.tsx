import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top Blogs",
  description: "Steve's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={lora.className}>
        
        <Navbar />
        <main className="min-h-screen bg-slate-100 px-40 py-5"> {children}</main>
         <Footer />
        
        </body>

    </html>
  );
}
