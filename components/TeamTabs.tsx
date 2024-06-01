"use client";
import { Tabs } from "./ui/tabs";
import { motion } from "framer-motion";
import React from "react";

export function TeamTabs() {
  const techTeam: contentType[] = [
    {
      name: "hello",
      designation: "hello design",
      link: "/bclubLogo.jpg",
    },
    {
      name: "hello2",
      designation: "hello design2",
      link: "/bclubLogo.jpg",
    },
    {
      name: "hello2",
      designation: "hello design2",
      link: "/bclubLogo.jpg",
    },
    {
      name: "hello2",
      designation: "hello design2",
      link: "/bclubLogo.jpg",
    },
    {
      name: "hello2",
      designation: "hello design2",
      link: "/bclubLogo.jpg",
    },
    {
      name: "hello2",
      designation: "hello design2",
      link: "/bclubLogo.jpg",
    },
  ];
  const tabs = [
    {
      title: "Executives",
      value: "executives",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Executives</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <RenderPerson content={techTeam} />
          </div>
        </div>
      ),
    },
    {
      title: "Technical",
      value: "technical",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Technical team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <RenderPerson content={techTeam} />
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Design</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <RenderPerson content={techTeam} />
          </div>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Content</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <RenderPerson content={techTeam} />
          </div>
        </div>
      ),
    },
    {
      title: "Outreach",
      value: "outreach",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>OutReacch</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <RenderPerson content={techTeam} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[250vh] lg:h-[115vh] md:h-[100vh] sm:h-[150vh] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-auto items-start justify-start my-40">
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

interface contentType {
  name: string;
  designation: string;
  link: string;
}
interface RenderPersonProps {
  content: contentType[];
}

const RenderPerson = ({ content }: RenderPersonProps) => {
  return (
    <>
      {content.map((item, ind) => (
        <DummyContent
          name={item.name}
          designation={item.designation}
          link={item.link}
          key={ind}
        />
      ))}
    </>
  );
};

const DummyContent = ({ name, designation, link }: contentType) => {
  return (
    // <div className="p-2">
    //   <div className="card">
    //     <center>
    //       <div className="profileimage">
    //         <img src={link || "/bclubLogo.jpg"} alt="" />
    //       </div>
    //       <div className="Name">
    //         <p>{name || "Name"} </p>
    //       </div>
    //       <p className="text-sm">{designation || "Designation"}</p>
    //     </center>
    //   </div>
    // </div>
    <div className="card-client m-2">
      <div className="user-picture">
      <img src={link || "/bclubLogo.jpg"} alt="Name" />
      </div>
      <p className="name-client">
      {name || "Name"}
        <span>{designation || "Designation"}</span>
      </p>
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
