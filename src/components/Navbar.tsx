import Link from "next/link";

interface Props {
  customHome?: string;
  customInfo?: string;
  customGames?: string;
}

const Navbar = ({ customHome, customInfo, customGames }: Props) => {
  return (
    <>
      <nav>
        <ul className="flex gap-[1em] text-[1.5em] md:text-[2em] lg:text-[3em]">
          <li className={`${customHome ? customHome : ""}`}>
            <Link className="transition-all hover:underline" href={"/"}>
              Home
            </Link>
          </li>
          <li className={`${customInfo ? customInfo : ""}`}>
            <Link className="transition-all hover:underline" href={"/info"}>
              Info
            </Link>
          </li>
          <li className={`${customGames ? customGames : ""}`}>
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
