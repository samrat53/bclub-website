import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

interface slidesType{
    key:number,
    content:React.ReactNode
}

interface CarouselAboutProps{
    slides:slidesType[]
}

export default function CarouselAbout({slides}:CarouselAboutProps) {
  const [goToSlide, setGoToSlide] = useState(0);
  const offsetRadius = 2;
  const showNavigation = false;
  const animationConfig = config.gentle;

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="md:w-[35vw] h-[30vh] grid items-center w-[100vw]">
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        animationConfig={animationConfig}
        showNavigation={showNavigation}
      />
    </div>
  );
}


// slides = [
//     {
//       key: 1,
//       content: <img src="bclubLogo.jpg" alt="1" />
//     },
//     {
//       key: 2,
//       content: <img src="bclubLogo.jpg" alt="2" />
//     },
//     {
//       key: 3,
//       content: <img src="bclubLogo.jpg" alt="3" />
//     },
//     {
//       key: 4,
//       content: <img src="bclubLogo.jpg" alt="4" />
//     },
//     {
//       key: 5,
//       content: <img src="bclubLogo.jpg" alt="5" />
//     },
//     {
//       key: 6,
//       content: <img src="bclubLogo.jpg" alt="6" />
//     },
//     {
//       key: 7,
//       content: <img src="bclubLogo.jpg" alt="7" />
//     },
//     {
//       key: 8,
//       content: <img src="bclubLogo.jpg" alt="8" />
//     }
//   ].map((slide, index) => {
//     return { ...slide, onClick: () => setState({ goToSlide: index }) };
//   });
