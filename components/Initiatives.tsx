import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import InitiativesTiles from "./ui/InitiativesTiles";

import { initiatives } from "@/data";

export default function Initiatives() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const initiativesText = `Our Business Club is committed to driving positive change through a range of strategic initiatives. We focus on sustainability, entrepreneurship, community outreach, and professional development to create meaningful impacts both within and beyond our club. Explore our initiatives and join us in our mission to create a better future.`;
  const bbcData = {
    index: 0,
    title: "BBC - Business Breakdown Casestudy",
    tagline: "Blueprints of Business Brilliance!",
    description: "fhsdjfgbdsfgvbd",
    link:"https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODY5MDQ0NDU2MTAzNTYy?igsh=YmF4djRidnNiMjhk"
  };
  const bteData = {
    index:1,
    title: "BTE - Business Terminologies Explained",
    tagline: "Demystifying Business Lingo!",
    description: "",
    link:"https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MjY5NTc0MTQ1MjI0MTE2?igsh=MWo2MW9tbTdqejMwdA=="
  };
  return (
    <div className="w-full sm:h-[90vh]  max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={
          inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-4xl md:text-6xl font-semibold pt-[13rem]"
      >
        Initiatives
        <p className="text-base md:text-lg  my-4 md:my-6">{initiativesText}</p>
        <div className="grid md:grid-cols-2 md:gap-2 lg:gap-3 sm:grid-cols-2 grid-cols-1 items-center py-10">
          {/* {initiatives.map((item, index) => {
            return (
              <InitiativesTiles
                title={item.title}
                description={item.description}
                id={index}
              />
            );
          })} */}
          <InitiativesTiles
            title={bbcData.title}
            tagline={bbcData.tagline}
            id={bbcData.index}
            link={bbcData.link}
            description={bbcData.description}
          />
          <InitiativesTiles
            title={bteData.title}
            tagline={bteData.tagline}
            id={bteData.index}
            link={bteData.link}
            description={bteData.description}
          />
        </div>
      </motion.div>
    </div>
  );
}
