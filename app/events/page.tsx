"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Event bottom",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae repellat reprehenderit officiis necessitatibus a natus ducimus fugiat illo. Commodi ipsa consequuntur recusandae deserunt voluptatum, possimus ratione est eos doloribus.",
    time: "15-Aug-1947",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Event 1 middle ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae repellat reprehenderit officiis necessitatibus a natus ducimus fugiat illo. Commodi ipsa consequuntur recusandae deserunt voluptatum, possimus ratione est eos doloribus.",
    time: "15-Aug-1947",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Event 1 top",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae repellat reprehenderit officiis necessitatibus a natus ducimus fugiat illo. Commodi ipsa consequuntur recusandae deserunt voluptatum, possimus ratione est eos doloribus.",
    time: "15-Aug-1947",

    icon: "💸",
    color: "#00C9A7",
  },
];

notifications = Array.from(
  { length: 1},
  () => notifications
).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        " events-gradiient [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs ">{time}</span>
          </figcaption>
          <p className="text-sm font-normal">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo() {
  const eventsText=`Our Business Club hosts a dynamic array of events designed to inspire, educate, and connect our members. From keynote speeches by industry experts and hands-on workshops to networking mixers and panel discussions, our events offer valuable insights and opportunities to engage with like-minded individuals. Stay updated with our event calendar and join us in fostering a culture of learning and professional growth.`

  return (
    <div className="">
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
        className="max-w-7xl mx-auto w-full mt-40 sm:w-[40rem] md:w-[50rem] lg:w-auto"
      >
        <h3 className="text-4xl md:text-6xl font-semibold">Events</h3>
        <p className="text-base md:text-lg  my-4 md:my-6">
          {eventsText}
        </p>
      </motion.div>
      <div className="relative flex min-h-[50vh] mx-auto my-20 w-full max-w-7xl text-white flex-col overflow-hidden border-t-2 p-5">
        {/* <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList> */}
        <img src="coming.jpg" alt="" />
      </div>
    </div>
  );
}

