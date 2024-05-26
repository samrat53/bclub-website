import {
  motion,
  useAnimation,
  useScroll,
  useAnimationFrame,
} from "framer-motion";
import LogoRender from "./ui/LogoRender";
import WordRotate from "./magicui/word-rotate";
import { SocialIcons } from "./SocialIcons";

const HeroSection = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useAnimationFrame(() => {
    const scrollYValue = scrollY.get();
    controls.start({
      scale: 1 - scrollYValue / 1500,
      opacity: 1 - scrollYValue / 1500,
      transition: { duration: 0.01 },
    });
  });

  return (
    <motion.section
      initial={{ opacity: 1, scale: 1 }}
      animate={controls}
      className="w-full px-8 pt-[10rem] grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
        className=""
      >
        <h3 className="text-4xl md:text-6xl font-semibold">Business Club</h3>
        <h4 className="text-2xl md:text-3xl font-semibold pt-2">
          NIT Agartala
        </h4>
        <WordRotate
          className="text-2xl md:text-3xl font-semibold pt-2 radiant-text"
          words={["Dream.", "Believe.", "Achieve."]}
        />

        <SocialIcons />
      </motion.div>
      <LogoRender />
    </motion.section>
  );
};

export default HeroSection;
