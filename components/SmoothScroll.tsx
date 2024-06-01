"use client";
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';

const SmoothScroll = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
  const controls = useAnimation();

  
  useEffect(() => {
    const handleScroll = () => {
      controls.start({
        y: -window.scrollY,
        transition: { 
          type: 'tween', 
          duration: 0.5, // Adjust the duration to control the speed
          ease: 'linear' // You can change to 'linear', 'easeIn', 'easeOut', etc.
        },
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div animate={controls} initial={{ y: 0 }}>
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
