'use client'
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <>
      <div>
        <div className="h-[100vh]"><HeroSection/></div>
        <div><About/></div>
      </div>
    </>
  );
}
