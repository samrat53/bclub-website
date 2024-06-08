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
    content: <img src="bclubLogo.jpg" alt="2" className="rounded-2xl" />,
  },
  {
    key: 3,
    content: <img src="bclubLogo.jpg" alt="3" className="rounded-2xl" />,
  },
  {
    key: 4,
    content: <img src="bclubLogo.jpg" alt="4" className="rounded-2xl" />,
  },
  {
    key: 5,
    content: <img src="bclubLogo.jpg" alt="5" className="rounded-2xl" />,
  },
  {
    key: 6,
    content: <img src="bclubLogo.jpg" alt="6" className="rounded-2xl" />,
  },
  {
    key: 7,
    content: <img src="bclubLogo.jpg" alt="6" className="rounded-2xl" />,
  },
  {
    key: 8,
    content: <img src="bclubLogo.jpg" alt="6" className="rounded-2xl" />,
  },
];
const aboutus = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            beatae repellat reprehenderit officiis necessitatibus a natus
            ducimus fugiat illo. Commodi ipsa consequuntur recusandae deserunt
            voluptatum, possimus ratione est eos doloribus.`;

const whatWeDo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            beatae repellat reprehenderit officiis necessitatibus a natus
            ducimus fugiat illo. Commodi ipsa consequuntur recusandae deserunt
            voluptatum, possimus ratione est eos doloribus.`;


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
        className="w-full h-[50vh] px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-40"
      >
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={
            inView1 ? { scale: 1, opacity: 1 } : { scale: 0.1, opacity: 0.5 }
          }
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-6xl font-semibold">About Us</h3>
          <p className="text-base md:text-lg  my-4 md:my-6">
            {aboutus}
          </p>
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

      <section
        ref={ref2}
        id="about"
        className="w-full md:h-[70vh] px-8 py-12 mb-11 flex flex-col-reverse md:grid md:grid-cols-2 md:items-center gap-8 max-w-6xl mx-auto mt-40"
      >
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={
            inView2 ? { scale: 1, opacity: 1 } : { scale: 0.1, opacity: 0 }
          }
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          <CarouselAbout slides={defaultSlides} />
        </motion.div>
        <motion.div
          className="pl-5"
          initial={{ scale: 0.1, opacity: 0 }}
          animate={
            inView2 ? { scale: 1, opacity: 1 } : { scale: 0.1, opacity: 0.5 }
          }
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-6xl font-semibold">What we Do</h3>
          <p className="text-base md:text-lg  my-4 md:my-6">
           {whatWeDo}
          </p>
        </motion.div>
      </section>
    </div>
  );
};
export default About;
