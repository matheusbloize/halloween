"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import DragAndDrop from "@/components/DragAndDrop";
import GuessTheCharacter from "@/components/GuessTheCharacter";
import TicTacToe from "@/components/TicTacToe";

const Game = () => {
  const { id } = useParams();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <main>
      <Link
        className="border-solid border-[.375em] border-[#FF6400] p-[1em] my-[1em] block w-fit rounded-[100%] group"
        href="/games"
      >
        <AiOutlineArrowLeft className="scale-[1.5] text-[2em] transition-all group-hover:text-[#f1f1f1]" />
      </Link>
      {id === "1" && <TicTacToe />}
      {id === "2" && <DragAndDrop />}
      {id === "3" && domLoaded && (
        <>
          <GuessTheCharacter />
        </>
      )}
    </main>
  );
};

export default Game;
