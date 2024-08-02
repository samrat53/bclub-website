"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  return (
    <div className="h-[250vh] lg:h-[115vh] md:h-[100vh] sm:h-[150vh] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-auto items-start justify-start my-40">
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
        className="pb-5"
      >
        <h3 className="text-4xl md:text-6xl font-semibold">
          Projects and Initiatives
        </h3>
        <p className="text-base md:text-lg  my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          beatae repellat reprehenderit officiis necessitatibus a natus ducimus
          fugiat illo. Commodi ipsa consequuntur recusandae deserunt voluptatum,
          possimus ratione est eos doloribus.
        </p>
        <div className="mt-20">
          <RenderProjects
            title="Merchandise"
            description="Lorem ipsum dolor sit amet, consectetur adipii voluptas ten
              mollitia pariatur odit, ab minus ratione adipisci accusamus vel
              est excepturi laboriosam magnam necessitatibus dignissimos
              molestias."
          />
        </div>
      </motion.div>
    </div>
  );
}

const RenderProjects = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="card-container h-[20rem] w-[17rem]">
        <div className="card">
          <div className="front-content">
            <p>{title}</p>
            <br />
            <div>Hover / click to expand</div>
          </div>
          <div className="content">
            <p className="heading">{title}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
