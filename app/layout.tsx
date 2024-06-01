import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BClub NIT-A",
  description: "SEO descriptoion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <SmoothScroll>
          <div>{children}</div>
        </SmoothScroll>
          <div>
            <Footer />
          </div>
      </body>
    </html>
  );
}
