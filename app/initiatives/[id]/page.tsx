"use client";
import { AccordionBuild } from "@/components/AccordionBuild";
import { initiatives } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const Initiatives = () => {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  return (
    <div className="h-[250vh] lg:h-[115vh] md:h-[100vh] sm:h-[150vh] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-auto items-start justify-start my-40">
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
        className="pb-5"
      >
        <h3 className="text-4xl md:text-6xl font-semibold">
          {initiatives[id].title}
        </h3>
        <p className="text-base md:text-lg  my-4 md:my-6">
          {initiatives[id].description}
        </p>
        <div className="mt-20">
          <div>
            <AccordionBuild chapters={initiatives[id].chapters} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Initiatives;
