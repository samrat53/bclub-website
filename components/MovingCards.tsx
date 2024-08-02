
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function MovingCards() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    content: (
      <div className="flex items-center ">
        <img src="/bclubLogo.jpg" alt="" className="h-[10rem] sm:px-8" />
        <h1 className="text-lg pl-2 sm:text-xl font-bold">Business Club NITA</h1>
      </div>
    ),
  },
  {
    content:(
      <div className="flex items-center rounded-full">
        <img src="/bclubLogo.jpg" alt="" className="h-[10rem] sm:px-8" />
        <h1 className="text-lg pl-2 sm:text-xl font-bold">Business Club NITA</h1>
      </div>
    )
  },
];