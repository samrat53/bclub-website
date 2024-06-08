// "use client";
// import { useEffect, useRef } from "react";
// import { useAnimation, motion } from "framer-motion";

// const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
//   const controls = useAnimation();
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         controls.start({
//           y: -window.scrollY,
//           transition: {
//             type: "tween",
//             duration: 0.5,
//             ease: "linear",
//           },
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Ensure the initial state is set
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls]);

//   return (
//     <div>
//       <motion.div
//         animate={controls}
//         ref={scrollRef}
//         style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default SmoothScroll;
