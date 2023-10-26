"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import backgroundImage from "@/assets/images/tictactoe/background.webp";
import witchImage from "@/assets/images/tictactoe/witch.webp";

interface Player {
  name: string;
  symbol: string;
}

const player1: Player = {
  name: "bat",
  symbol: "static/images/tictactoe/bat.webp",
};

const player2: Player = {
  name: "jack",
  symbol: "static/images/tictactoe/jack.webp",
};

type Win = [number, number, number];

const win1: Win = [0, 1, 2];
const win2: Win = [0, 3, 6];
const win3: Win = [0, 4, 8];
const win4: Win = [1, 4, 7];
const win5: Win = [2, 4, 6];
const win6: Win = [2, 5, 8];
const win7: Win = [3, 4, 5];
const win8: Win = [6, 7, 8];
const winPossibilities = [win1, win2, win3, win4, win5, win6, win7, win8];

const TicTacToe = () => {
  const witchImageRef = useRef<HTMLImageElement | null>(null);
  const witchAudioRef = useRef<HTMLAudioElement | null>(null);
  const [actualTurn, setActualTurn] = useState<Player>(player1);
  const [winner, setWinner] = useState("");

  const resetGame = () => {
    const section = document.getElementById("section")!;
    for (let i = 0; i < section.children.length; i++) {
      const img = section.children[i].children[0] as HTMLImageElement;
      img.alt = "background";
      img.srcset = "";
      img.style.opacity = "0";
      (section.children[i] as HTMLDivElement).setAttribute(
        "selected-area",
        "false",
      );
      img.style.cursor = "pointer";
    }
    setWinner("");
  };

  const checkWin = (currentTarget: HTMLElement) => {
    for (let i = 0; i < 9; i++) {
      if (winPossibilities[i]) {
        if (
          (
            currentTarget.children[winPossibilities[i][0]]
              .children[0] as HTMLImageElement
          ).alt === "bat" &&
          (
            currentTarget.children[winPossibilities[i][1]]
              .children[0] as HTMLImageElement
          ).alt === "bat" &&
          (
            currentTarget.children[winPossibilities[i][2]]
              .children[0] as HTMLImageElement
          ).alt === "bat"
        ) {
          setWinner(player1.name);
          setActualTurn(player1);
          return;
        }
        if (
          (
            currentTarget.children[winPossibilities[i][0]]
              .children[0] as HTMLImageElement
          ).alt === "jack" &&
          (
            currentTarget.children[winPossibilities[i][1]]
              .children[0] as HTMLImageElement
          ).alt === "jack" &&
          (
            currentTarget.children[winPossibilities[i][2]]
              .children[0] as HTMLImageElement
          ).alt === "jack"
        ) {
          setWinner(player2.name);
          setActualTurn(player2);
          return;
        }
        if (
          (currentTarget.children[0].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[1].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[2].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[3].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[4].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[5].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[6].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[7].children[0] as HTMLImageElement).alt !==
            "background" &&
          (currentTarget.children[8].children[0] as HTMLImageElement).alt !==
            "background"
        ) {
          setWinner("tie");
        }
      }
    }
  };

  const showWitch = () => {
    if (witchImageRef.current && witchAudioRef.current) {
      witchImageRef.current.style.display = "block";
      witchImageRef.current.style.animation = "witch 1s ease";
      const audio = document.querySelector("#witch-audio") as HTMLAudioElement;
      audio.play();
    }
  };

  const hideWitch = () => {
    if (witchImageRef.current && witchAudioRef.current) {
      witchImageRef.current.style.display = "none";
      witchImageRef.current.style.animation = "";
    }
  };

  const handlePlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName === "IMG") {
      if (
        (e.target as HTMLElement).parentElement!.getAttribute(
          "selected-area",
        ) === "false"
      ) {
        const img = e.target as HTMLElement as HTMLImageElement;
        img.srcset = `/${actualTurn.symbol}`;
        img.style.opacity = "1";
        img.style.cursor = "not-allowed";
        actualTurn.name === "bat" ? (img.alt = "bat") : (img.alt = "jack");
        (e.target as HTMLElement).parentElement!.setAttribute(
          "selected-area",
          "true",
        );
        checkWin(e.currentTarget);
        actualTurn.name === "bat"
          ? setActualTurn(player2)
          : setActualTurn(player1);
      } else {
        showWitch();
      }
    } else {
      showWitch();
    }
  };

  return (
    <article className="max-w-[75%] mx-auto flex flex-col items-center gap-[2em]">
      <h1 className="text-center text-[2em]">Tic Tac Toe</h1>
      <section
        id="section"
        onClick={handlePlay}
        className="grid grid-cols-3 gap-0 w-fit min-w-[15em]"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <div
            key={index + 1}
            selected-area="false"
            area-number={index + 1}
            className={`${
              winner !== "" ? "pointer-events-none" : "pointer-events-auto"
            } bg-[#FF6400] hover:bg-[#ff660080] transition-all w-[5em] h-[5em] border-solid border-[#010101] border-[.2em] border-l-0 border-t-0 flex items-center justify-center z-10`}
          >
            <Image
              className="opacity-0 transition-all cursor-pointer hover:bg-[#ff660080] h-[-webkit-fill-available] w-[-webkit-fill-available]"
              src={backgroundImage}
              alt="background"
            />
          </div>
        ))}
      </section>
      <div
        className={`${
          winner !== "" ? "block" : "hidden"
        } text-[2em] text-center flex flex-col`}
      >
        {winner === "tie" && <span>Tie game!</span>}
        {winner !== "" && winner !== "tie" && (
          <span>
            Congrats! <br /> the Winner is:{" "}
            <span className="text-[#ffffff]">{winner}</span>
          </span>
        )}
        <button
          className="transition-all hover:text-[#ff660080] z-10"
          onClick={resetGame}
        >
          Play again!
        </button>
      </div>
      <Image
        ref={witchImageRef}
        onAnimationEnd={hideWitch}
        className="z-0 invert rotate-[-7deg] absolute bottom-0 left-0 w-[35vw] hidden"
        src={witchImage}
        alt="witch"
      />
      <audio
        id="witch-audio"
        ref={witchAudioRef}
        src="/static/audio/witch.MP3"
      ></audio>
    </article>
  );
};

export default TicTacToe;
