"use client";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import bg from "@/public/bg-hero-1.png";
import Initiatives from "@/components/Initiatives";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-[100vh]">
          <HeroSection />
        </div>
        <div id="about">
          <About />
        </div>
        <div>
          <Initiatives />
        </div>
        {/* <div
          style={{
            backgroundImage: `url(${bg.src})`,
            width: "100%",
            height: "100%",
          }}
        >
          <CollabSection />
        </div> */}
      </div>
    </>
  );
}

const CollabSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const collabText=`At our Business Club, we believe in the power of collaboration. We partner with industry leaders, innovative startups, and academic institutions to provide our members with unparalleled opportunities for growth and networking. By working together, we aim to foster a vibrant community where ideas flourish and future business leaders are born. Join us and be a part of a collaborative journey towards success.`
  return (
    <div className="w-full h-[100vh] max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={
          inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }
        }
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="text-4xl md:text-6xl font-semibold pt-[13rem]"
      >
        Collaborations
        <p className="text-base md:text-lg  my-4 md:my-6">
          {collabText}
        </p>
      </motion.div>
      <MovingCards />
    </div>
  );
};