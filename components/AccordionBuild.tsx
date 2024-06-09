import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface AccordionProps {
  chapters: string[][];
}
export function AccordionBuild({ chapters }: AccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-[80vw]">
      {
        chapters.map((chapter, index) => {
          return (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{`Chapter ${index + 1}`}</AccordionTrigger>
              {chapter.map((item, ind) => {
                return (
                  <AccordionContent key={ind}>
                    <ul>
                        <li>{item}</li>
                    </ul>
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          );
        })
      }
    </Accordion>
  );
}
{/* <AccordionItem value="item-2">
        <AccordionTrigger>{`Chapter ${1}`}</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem> */}

       // <div>
    //     {
    //         chapters.map((chapter,index)=>{
    //             return <div key={index}>
    //                 <h4>{`Chapter ${index+1}`}</h4>
    //                 <ul>
    //                     {chapter.map((item,idx)=>{
    //                         return <li key={idx}>{item}</li>
    //                     })}
    //                 </ul>
    //             </div>
    //         })
    //     }
    // </div>