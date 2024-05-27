"use client";
import { Tabs } from "./ui/tabs";
import { motion } from "framer-motion";
import React from "react";

export function TeamTabs() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-cyan-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[100vh] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-auto items-start justify-start my-40">
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
        className="pb-5"
      >
        <h3 className="text-4xl md:text-6xl font-semibold">Core Team</h3>
        <p className="text-base md:text-lg  my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          beatae repellat reprehenderit officiis necessitatibus a natus ducimus
          fugiat illo. Commodi ipsa consequuntur recusandae deserunt voluptatum,
          possimus ratione est eos doloribus.
        </p>
      </motion.div>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="p-2">
      <div className="card">
        <center>
          <div className="profileimage">
            <img src="/bclubLogo.jpg" alt="" />
          </div>
          <div className="Name">
            <p>John Doe</p>
          </div>
          <p className="text-sm">Design lead</p>
        </center>
      </div>
    </div>
  );
};

// className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
{
  /* <div className="card">
      <center>
        <div className="profileimage">
          <img src="/bclubLogo.jpg" alt="" />
        </div>
        <div className="Name">
          <p>John Doe</p>
        </div>
        <p className="text-sm">Design lead</p>
      </center>
    </div> */
}
