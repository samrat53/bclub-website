"use client";
import { AccordionBuild } from "@/components/AccordionBuild";
import { initiatives } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const Initiatives = () => {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  let renderData={
    title: ``,
    description:``,
    chapters:[""]
  }
  if(id===0){
    renderData={
      title: `BBC: Business Breakdown Casestudy`,
      description:`loren vfhbsfhbsajhbafh`,
      chapters:["https://google.com","https://google.com","https://google.com","https://google.com"]
    }
  }
  else{
    renderData={
      title: `BTE: Business Breakdown Casestudy`,
      description:`loren vfhbsfhbsajhbafh`,
      chapters:["https://google.com","https://google.com","https://google.com","https://google.com"]
    }
  }

  return (
    <div className="h-[250vh] lg:h-[115vh] md:h-[100vh] sm:h-[150vh] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full sm:w-[40rem] md:w-[50rem] lg:w-auto items-start justify-start my-40">
      <motion.div
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
        className="pb-5"
      >
        <h3 className="text-4xl md:text-6xl font-semibold">
          {renderData.title}
        </h3>
        <p className="text-base md:text-lg  my-4 md:my-6">
          {renderData.description}
        </p>
        <div className="mt-20">
          <div>
            {/* <AccordionBuild chapters={initiatives[id].chapters} /> */}
            {renderData.chapters.map((item,id)=>{
              return <div key={id}>{item}</div>
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// export function Redirect ({link}:{link:string}){
//   return <>
//   <Link href={`/initiatives/${id.toString()}`} className="tile h-40 w-[35rem]">
//       <p className="time-text">
//         <span>{title}</span>
//       </p>
//       <p className="day-text">{description}</p>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="bi bi-arrow-right-short moon h-[1.5em]"
//         viewBox="0 0 16 16"
//       >
//         <path
//           fill-rule="evenodd"
//           d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
//         />
//       </svg>
//     </Link>
//   </>
// }
export default Initiatives;
