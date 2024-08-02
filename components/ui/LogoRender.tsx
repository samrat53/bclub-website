"use client";
import { motion } from "framer-motion";
import Ripple from "../magicui/ripple";

export default function LogoRender() {
  return (
    <motion.div
      initial={{ x: "10vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 30, damping: 10 }}
      className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-full p-20 md:shadow-xl"
    >
      <img
        src="bclubLogo.jpg"
        alt="logo"
        className="md:h-auto rounded-full z-10 whitespace-pre-wrap text-center font-medium tracking-tighter min-w-[14rem]"
      />
      <Ripple />
    </motion.div>
  );
}
