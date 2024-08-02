// components/About.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import CarouselAbout from "./CarouselAbout";

const defaultSlides = [
  {
    key: 1,
    content: <img src="bclubLogo.jpg" alt="1" className="rounded-2xl" />,
  },
  {
    key: 2,
    content: <img src="carousel-1.jpg" alt="2" className="rounded-2xl" />,
  },
  {
    key: 3,
    content: <img src="carousel-2.JPEG" alt="3" className="rounded-2xl" />,
  },
  {
    key: 4,
    content: <img src="bclubLogo.jpg" alt="1" className="rounded-2xl" />,
  },
  {
    key: 5,
    content: <img src="carousel-1.jpg" alt="2" className="rounded-2xl" />,
  },
  {
    key: 6,
    content: <img src="carousel-2.JPEG" alt="3" className="rounded-2xl" />,
  },
];
const aboutus = `Business Club, NIT Agartala, also known as BClub, is a student-run organization that provides a platform for students to learn about and explore the world of business.Business Club, NIT Agartala, also known as BClub, is a student-run organization that provides a platform for students to learn about and explore the world of business.`;
const whatWeDoText=`Our Business Club is dedicated to fostering growth, innovation, and professional excellence. We provide our members with a robust platform for networking, skill development, and real-world business experience. Through workshops, mentorship programs, competitions, and collaborative projects, we equip our members with the tools they need to excel in their careers and make impactful contributions to the business community. Join us to elevate your potential and achieve your professional goals.`

const About = () => {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: false });

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: false });

  return (
    <div>
      <section
        ref={ref1}
        id="aboutTop"
        className="w-full md:h-[30vh] px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-40"
      >
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={
            inView1 ? { scale: 1, opacity: 1 } : { scale: 0.1, opacity: 0.5 }
          }
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-6xl font-semibold">About Us</h3>
          <p className="text-base md:text-lg  my-4 md:my-6 mr-10">{aboutus}</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={
            inView1 ? { scale: 1, opacity: 1 } : { scale: 0.1, opacity: 0 }
          }
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          <CarouselAbout slides={defaultSlides} />
        </motion.div>
      </section>
      <WhatWeDo />
    </div>
  );
};

export function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  return (
    <div className="w-full max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={
          inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-4xl md:text-6xl font-semibold pt-[13rem]"
      >
        What We Do
        <p className="text-base md:text-lg  my-4 md:my-6">
          {whatWeDoText}
        </p>
      </motion.div>
    </div>
  );
}

export default About;
