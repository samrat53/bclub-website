"use client";
import { Tabs } from "./ui/tabs";
import { motion } from "framer-motion";
import React from "react";

export function TeamTabs() {
  const techTeam: contentType[] = [
    {
      name: "S. Bhattacharya",
      designation: "Lead",
      link: "/tech/samrat.png",
    },
    {
      name: "Sayan Jyoti Das",
      designation: "Co-Lead",
      link: "/tech/sayanjyoti.jpg",
    },
    {
      name: "Tathagata Ghosh",
      designation: "Member",
      link: "/tech/tathagatha.jpg",
    },
    {
      name: "Tanmoy Majumdar",
      designation: "Member",
      link: "/tech/tanmoy.jpg",
    },
  ];
  const executives: contentType[] = [
    {
      name: "Swapnonil Ghosh",
      designation: "President",
      link: "/executives/swapnonil.jpg",
    },
    {
      name: "Srijan Mallick",
      designation: "Vice President",
      link: "/executives/srijan.jpg",
    },
    {
      name: "Omisha Bajoria",
      designation: "General Secretary",
      link: "/executives/omisha.jpg",
    },
    {
      name: "Aditi V Paunikar",
      designation: "Assistant GS",
      link: "/executives/aditi.png",
    },
    {
      name: "Saumya Chandra",
      designation: "Assistant GS",
      link: "/executives/saumya.png",
    },
    {
      name: "Soumyadeep Acharya",
      designation: "Operations Head",
      link: "/executives/soumyadeep.jpg",
    },
  ];
  const designTeam: contentType[] = [
    {
      name: "Saumya Chandra",
      designation: "Lead",
      link: "/executives/saumya.png",
    },
    {
      name: "Chhitij Ranpal",
      designation: "Co-Lead",
      link: "/design/chhitij.jpg",
    },
    {
      name: "K. Chakraborty",
      designation: "Member",
      link: "/design/koena.png",
    },
    {
      name: "Sakhil Das",
      designation: "Member",
      link: "/design/sakhil.jpg",
    },
    {
      name: "Rinita Singha",
      designation: "Member",
      link: "/design/rinita.jpg",
    },
    {
      name: "Amlan Saha",
      designation: "Member",
      link: "/design/amlan.jpg",
    },
    {
      name: "Akmal Hossain",
      designation: "Member",
      link: "/design/akmal.jpeg",
    },
  ];
  const product: contentType[] = [
    {
      name: "Swapnonil Ghosh",
      designation: "Lead",
      link: "/executives/swapnonil.jpg",
    },
    {
      name: "Sourabh Roy",
      designation: "Co-Lead",
      link: "/product/sourabh.jpg",
    },
    {
      name: "Anirban Modak",
      designation: "Member",
      link: "/product/anirban.jpeg",
    },
    {
      name: "K.G Krishna",
      designation: "Member",
      link: "/product/gopi.png",
    },
    {
      name: "Abhishek K.",
      designation: "Member",
      link: "/product/abhishek.jpg",
    },
    {
      name: "Akmal Hossain",
      designation: "Member",
      link: "/design/akmal.jpeg",
    },
    {
      name: "Harshit Benke",
      designation: "Member",
      link: "/product/harshit.jpg",
    },
  ];
  const logistics: contentType[] = [
    {
      name: "Omisha Bajoria",
      designation: "Lead",
      link: "/executives/omisha.jpg",
    },
    {
      name: "Aman Kumar",
      designation: "Co-Lead",
      link: "/logistics/aman.jpg",
    },
    {
      name: "Leela Shiva Kumar",
      designation: "Member",
      link: "/logistics/leela.jpg",
    },
    {
      name: "Himankan Dutta",
      designation: "Member",
      link: "/logistics/himankan.png",
    },
    {
      name: "Agrim Gupta",
      designation: "Member",
      link: "/logistics/agrim.png",
    },
    {
      name: "Chirag Saha",
      designation: "Member",
      link: "/logistics/chirag.jpg",
    },
  ];
  const events: contentType[] = [
    {
      name: "Soumyadeep A.",
      designation: "Lead",
      link: "/executives/soumyadeep.jpg",
    },
    {
      name: "Arkyajit B.",
      designation: "Co-Lead",
      link: "/events/arkyajit.JPG",
    },
    {
      name: "Vaishnavi H.",
      designation: "Member",
      link: "/events/vaishnavi.webp",
    },
    {
      name: "Diptaraj Deb",
      designation: "Member",
      link: "/events/diptaraj.png",
    },
    {
      name: "Himankan Dutta",
      designation: "Member",
      link: "/logistics/himankan.png",
    },
    {
      name: "Aniket Anand",
      designation: "Member",
      link: "/events/aniket.png",
    },
    {
      name: "Meghatithi C.",
      designation: "Member",
      link: "/events/megha.png",
    },
  ];
  const videography: contentType[] = [
    {
      name: "Swapnonil Ghosh",
      designation: "Lead",
      link: "/executives/swapnonil.jpg",
    },
    {
      name: "Rahul Kumar",
      designation: "Co-Lead",
      link: "/videography/rahul.jpeg",
    },
  ];
  const outreach: contentType[] = [
    {
      name: "Srijan Mallick",
      designation: "Lead",
      link: "/executives/srijan.jpg",
    },
    {
      name: "Ankit Bhardwaj",
      designation: "Co-Lead",
      link: "/outreach/ankit.jpg",
    },
    {
      name: "Chirag Saha",
      designation: "Member",
      link: "/logistics/chirag.jpg",
    },
    {
      name: "Akmal Hossain",
      designation: "Member",
      link: "/design/akmal.jpeg",
    },
    {
      name: "Harshit Benke",
      designation: "Member",
      link: "/product/harshit.jpg",
    },
  ];
  const pr: contentType[] = [
    {
      name: "Aditi V Paunikar",
      designation: "Lead",
      link: "/executives/aditi.png",
    },
    {
      name: "Vaishnavi H.",
      designation: "Co-Lead",
      link: "/events/vaishnavi.webp",
    },
    {
      name: "Diptaraj Deb",
      designation: "Member",
      link: "/events/diptaraj.png",
    },
    {
      name: "Leela Shiva Kumar",
      designation: "Member",
      link: "/logistics/leela.jpg",
    },
    {
      name: "Chirag Saha",
      designation: "Member",
      link: "/logistics/chirag.jpg",
    },
    {
      name: "Agrim Guota",
      designation: "Member",
      link: "/logistics/agrim.png",
    },
  ];
  const tabs = [
    {
      title: "Executives",
      value: "executives",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Executives</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={executives} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
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
          <p>Design Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={designTeam} />
          </div>
        </div>
      ),
    },
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Product Management Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={product} />
          </div>
        </div>
      ),
    },
    {
      title: "Logistics",
      value: "Logistics",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Logistics Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={logistics} />
          </div>
        </div>
      ),
    },
    {
      title: "Outreach",
      value: "Outreach",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Outreach Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={outreach} />
          </div>
        </div>
      ),
    },
    {
      title: "PR & Content",
      value: "PR and Content Management Team",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>PR and Content Management Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={pr} />
          </div>
        </div>
      ),
    },
    {
      title: "Events",
      value: "events",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Event Management Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={events} />
          </div>
        </div>
      ),
    },
    {
      title: "Videography",
      value: "Videography",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white team-gradient ">
          <p>Videography and Editing Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center">
            <RenderPerson content={videography} />
          </div>
        </div>
      ),
    },
  ];
 
  const descriptiontext=`Our Business Club is led by a diverse group of passionate and dedicated individuals committed to driving our mission forward. Meet the innovative minds behind our initiatives and events, and discover how their unique skills and perspectives shape the vibrant community of our club.`
  return (
    <div className="h-[250vh] lg:h-[115vh] md:h-[100vh] sm:h-[150vh] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-auto items-start justify-start my-40">
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
        className="pb-5"
      >
        <h3 className="text-4xl md:text-6xl font-semibold">Meet the Team</h3>
        <p className="text-base md:text-lg  my-4 md:my-6">
         {descriptiontext}
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
