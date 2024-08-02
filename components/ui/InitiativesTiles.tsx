import Link from "next/link";

export default function ({
  title,
  description,
  id,
  link,
  tagline,
}: {
  title: string;
  description: string;
  id: number;
  link: string;
  tagline: string;
}) {
  return (
    <Link href={link} className="tile h-[9rem] w-[35rem]">
      <p className="time-text">
        <span>{title}</span>
      </p>
      <p className="day-text">{tagline}</p>
      {/* <div className="mt-6">
        <p className="day-text">{description}</p>
      </div> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-arrow-right-short moon h-[1.5em]"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
        />
      </svg>
    </Link>
  );
}

// <Link href={`/initiatives/${id.toString()}`} passHref classNameName="tile">
