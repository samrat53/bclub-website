import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import InitiativesTiles from "./ui/InitiativesTiles";

import { initiatives } from "@/data";

export default function Initiatives() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
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
        <p className="text-base md:text-lg  my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          beatae repellat reprehenderit officiis necessitatibus a natus ducimus
          fugiat illo. Commodi ipsa consequuntur recusandae deserunt voluptatum,
          possimus ratione est eos doloribus.
        </p>
        <div className="grid lg:grid-cols-4 md:gap-2 lg:gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center py-10">
          {initiatives.map((item, index) => {
            return (
              <InitiativesTiles
                title={item.title}
                description={item.description}
                id={index}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
