"use client";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import { motion, useInView } from "framer-motion";
import React ,{ useRef } from "react";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-[100vh]">
          <HeroSection />
        </div>
        <div>
          <About />
        </div>
        <CollabSection />
      </div>
    </>
  );
}

const CollabSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  return (
    <div
      className="w-full h-[60vh] mt-[15rem] px-8 max-w-6xl mx-auto"
      ref={ref}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={
          inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }
        }
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="text-4xl md:text-6xl font-semibold"
      >
        Collaborations
        <p className="text-base md:text-lg  my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          beatae repellat reprehenderit officiis necessitatibus a natus ducimus
          fugiat illo. Commodi ipsa consequuntur recusandae deserunt voluptatum,
          possimus ratione est eos doloribus.
        </p>
      </motion.div>
      <MovingCards />
    </div>
  );
};
