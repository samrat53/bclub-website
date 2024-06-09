import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import ChapterCarousel from "./CarouselChapter";
import { initiatives } from "@/data";
  
  interface AccordionProps {
    chapters: string[][];
  }
  
  export function AccordionBuild({ chapters }: AccordionProps) {
    return (
      <div>
        <Accordion type="single" collapsible className="w-[80vw]">
          {chapters.map((chapter, index) => {
            return (
              <div className="acc my-5" key={index}>
                <AccordionItem value={`chapter-${index}`} key={`chapter-${index}`}>
                  <AccordionTrigger>{`Chapter ${index + 1}`}</AccordionTrigger>
                  <div className="border-t">
                    <AccordionContent>
                      <ChapterCarousel items={chapter} />
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
        {/* <ChapterCarousel items={initiatives[0].chapters[0]} /> */}
      </div>
    );
  }

  /*
  import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChapterCarousel from "./CarouselChapter";
import CarouselAbout from "./CarouselAbout";
interface AccordionProps {
  chapters: string[][];
}
const defaultSlides = ["bclubLogo.jpg", "bclubLogo.jpg", "bclubLogo.jpg"];
export function AccordionBuild({ chapters }: AccordionProps) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-[80vw]">
        {chapters.map((chapter, index) => {
          return (
            <div className="acc m-5" key={index}>
              <AccordionItem value={`item-${index}`} >
                <AccordionTrigger>{`Chapter ${index + 1}`}</AccordionTrigger>
                <div className="border-t">
                  <AccordionContent>
                    <ChapterCarousel items={chapter} />
                  </AccordionContent>
                </div>
                {/* {chapter.map((item, ind) => {
                  return (
                    
                  );
                  })} }
                  </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
      
            <ChapterCarousel items={defaultSlides} />
          </div>
        );
      }
      {
        <AccordionItem value="item-2">
              <AccordionTrigger>{`Chapter ${1}`}</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem> 
      }
      
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
*/      