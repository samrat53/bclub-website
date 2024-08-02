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
    // {
    //   link: "/projects",
    //   name: "Projects",
    // },
  ];

  return (
    <nav className="h-10 md:h-auto glass-nav bg-gradient-to-br from-white/20 to-white/5 backdrop-blur fixed left-1/2 top-3 transform -translate-x-1/2 rounded-full flex items-center gap-6 border border-neutral-700 p-2 text-sm text-neutral-200 backdrop-filter shadow-lg z-50">
      <img src="navbarLogo.png" alt="" />
      <div className="flex items-center gap-1 md:gap-5">
        {tabData.map((tab, id) => (
          <RenderTabs link={tab.link} name={tab.name} key={id} />
        ))}
      </div>
      <Link
        href="/#about"
        className="hidden relative z-[100] sm:flex items-center overflow-hidden whitespace-nowrap rounded-full border h-7 md:h-auto border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300 hover:scale-105 hover:border-neutral-50 hover:text-neutral-900 hover:before:translate-y-0 active:scale-100"
      >
        Know Us
      </Link>
    </nav>
  );
}

const RenderTabs = ({ link, name }: { link: string; name: string }) => {
  return (
    <Link
      href={link}
      className="group relative scale-100 overflow-hidden rounded-lg px-1 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-green-600">
        {name}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
    </Link>
  );
};
