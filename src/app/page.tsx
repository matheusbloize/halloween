import Image from "next/image";
import Link from "next/link";

import jackImage from "@/assets/images/jack.webp";

const Home = () => {
  return (
    <main className="max-w-[90%] mx-auto flex flex-col items-center justify-center group sm:flex-row">
      <div>
        <Image
          className="transition-all animate-shine"
          src={jackImage}
          alt="Jack O'Lantern"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[3em] tracking-[.1em] md:text-[4em] lg:text-[5em]">
          Halloween
        </h1>
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
      </div>
    </main>
  );
};

export default Home;
