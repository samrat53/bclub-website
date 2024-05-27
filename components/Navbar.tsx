import Link from "next/link";

export default function Navbar() {
  const tabData = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/events",
      name: "Events",
    },
    {
      link: "/teams",
      name: "Teams",
    },
    {
      link: "/projects",
      name: "Projects",
    },
  ];

  return (
    <nav className="h-10 md:h-auto glass-nav bg-gradient-to-br from-white/20 to-white/5 backdrop-blur fixed left-[50%] top-3 flex w-fit -translate-x-[50%] rounded-full items-center gap-6 border-[1px] border-neutral-700 p-2 text-sm text-neutral-200 backdrop-filter shadow-lg">
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 fill-neutral-50 hidden sm:flex"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
      <div className="items-center gap-1 md:gap-5 flex">
        {tabData.map((tab, id) => {
          return (
            <RenderTabs link={tab.link} name={tab.name} key={Number(id)} />
          );
        })}
      </div>
      <Link
        href={"/#about"}
        className='hidden relative z-[100] sm:flex items-center overflow-hidden whitespace-nowrap rounded-full border-[1px] h-7 md:h-auto
    border-neutral-700 px-4 py-1.5 font-medium
   text-neutral-300 transition-all duration-300
    
    before:absolute before:inset-0
    before:-z-10 before:translate-y-[200%]
    before:scale-[2.5]
    before:rounded-[100%] before:bg-neutral-50
    before:transition-transform before:duration-1000
    before:content-[""]
    hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
    hover:before:translate-y-[0%]
    active:scale-100'
      >
        Know Us
      </Link>
    </nav>
  );
}

const RenderTabs = ({ link, name }: { link: string; name: string }) => {
  return (
    <>
      <Link
        href={link}
        className="group relative scale-100 overflow-hidden rounded-lg px-1 py-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span
          className='relative z-10 text-white/90 transition-colors group-hover:text-green-600 hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
    hover:before:translate-y-[0%]
    active:scale-100  before:content-[""] before:absolute before:inset-0
    before:-z-10 before:translate-y-[200%]
    before:scale-[2.5]
    before:rounded-[100%] 
    before:transition-transform before:duration-500'
        >
          {name}
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
      </Link>
    </>
  );
};
