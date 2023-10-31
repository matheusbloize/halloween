"use client";

import Link from "next/link";
import { useEffect } from "react";

interface Props {
  customHome?: string;
  customInfo?: string;
  customGames?: string;
}

const Navbar = ({ customHome, customInfo, customGames }: Props) => {
  useEffect(() => {
    if (
      (document.querySelector("#spook-audio") as HTMLAudioElement).currentTime >
      0
    ) {
      (document.querySelector("#spook-audio") as HTMLAudioElement).play();
    }
  }, []);

  const playHomeSong = () => {
    if (document.querySelector("#spook-audio")) {
      const audio = document.querySelector("#spook-audio") as HTMLAudioElement;
      audio.play();
    }
  };

  return (
    <>
      <nav>
        <ul className="mt-[.5em] flex gap-[1em] text-[1.5em] md:text-[2em] lg:text-[3em]">
          <li className={`${customHome ? customHome : ""}`}>
            <Link className="transition-all hover:underline" href={"/"}>
              Home
            </Link>
          </li>
          <li
            onClick={playHomeSong}
            className={`${customInfo ? customInfo : ""}`}
          >
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
