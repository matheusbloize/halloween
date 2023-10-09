import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex gap-[1em] text-[1.5em] md:text-[2em] lg:text-[3em]">
          <li>
            <Link className="transition-all hover:underline" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="transition-all hover:underline" href={"/info"}>
              Info
            </Link>
          </li>
          <li>
            <Link className="transition-all hover:underline" href={"/games"}>
              Games
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
