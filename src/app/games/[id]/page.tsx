"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Game = () => {
  const { id } = useParams();

  return (
    <main>
      <Link
        className="border-solid border-[.375em] border-[#FF6400] p-[1em] mt-[1em] block w-fit rounded-[100%] group"
        href="/games"
      >
        <AiOutlineArrowLeft className="scale-[1.5] text-[2em] transition-all group-hover:text-[#f1f1f1]" />
      </Link>
      <h1>Game {id}</h1>
    </main>
  );
};

export default Game;
